import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile(new URL('../site/index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../site/styles.css', import.meta.url), 'utf8');
const js = await readFile(new URL('../site/main.js', import.meta.url), 'utf8');

test('página possui elementos essenciais e idioma', () => {
  for (const snippet of ['lang="pt-BR"', 'name="viewport"', '<main', '<nav', '<h1', '<footer', 'id="contato"'])
    assert.ok(html.includes(snippet), `Falta ${snippet}`);
});
test('sinaliza conteúdo de demonstração sem induzir a erro', () => {
  assert.match(html, /PROTÓTIPO/);
  assert.match(html, /ILUSTRATIVO/);
  assert.match(html, /PENDENTE DE BRIEFING/);
});
test('não inclui links ou formulários falsos', () => {
  assert.ok(!html.includes('href="#"'));
  assert.ok(!html.includes('<form'));
  assert.ok(!html.includes('wa.me/000'));
});
test('possui estilos responsivos e foco visível', () => {
  assert.match(css, /@media\s*\(/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
});
test('interatividade reduzida e sem frameworks externos', () => {
  assert.match(js, /addEventListener/);
  assert.ok(!html.includes('https://cdn'));
});
