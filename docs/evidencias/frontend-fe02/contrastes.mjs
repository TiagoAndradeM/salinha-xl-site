import { readFile } from 'node:fs/promises';
const css = await readFile(new URL('../../../site/styles.css', import.meta.url), 'utf8');
const tokens = block => Object.fromEntries([...block.matchAll(/--([\w-]+): (#[0-9A-F]{6})/g)].map(match => [match[1], match[2]]));
const light = tokens(css.match(/:root \{([\s\S]*?)\}/)[1]);
const dark = { ...light, ...tokens(css.match(/:root\[data-theme="dark"\] \{([\s\S]*?)\}/)[1]) };
function luminance(hex) {
  const rgb = hex.slice(1).match(/../g).map(value => parseInt(value, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
}
function ratio(a, b) { const values = [luminance(a), luminance(b)].sort((x, y) => x - y); return Number(((values[1] + .05) / (values[0] + .05)).toFixed(4)); }
const result = {};
for (const [name, theme] of [['claro', light], ['escuro', dark]]) {
  result[name] = {};
  for (const background of ['surface-page', 'surface-card', 'surface-soft', 'surface-demo']) {
    for (const foreground of ['text-primary', 'text-secondary', 'action-primary', 'focus']) result[name][`${foreground}/${background}`] = { foreground: theme[foreground], background: theme[background], ratio: ratio(theme[foreground], theme[background]) };
  }
  for (const background of ['action-primary', 'action-hover']) result[name][`text-on-action/${background}`] = { foreground: theme['text-on-action'], background: theme[background], ratio: ratio(theme['text-on-action'], theme[background]) };
}
result.inverse = {};
for (const foreground of ['inverse-text', 'inverse-muted', 'inverse-accent']) result.inverse[foreground] = { foreground: light[foreground], background: light.inverse, ratio: ratio(light[foreground], light.inverse) };
console.log(JSON.stringify(result, null, 2));
