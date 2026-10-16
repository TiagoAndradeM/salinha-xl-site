import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { Script } from 'node:vm';
const site = new URL('../site/', import.meta.url);
const names = (await readdir(site)).filter(name => name.endsWith('.html'));
const pages = new Map(await Promise.all(names.map(async name => [name, await readFile(new URL(name, site), 'utf8')])));
const css = await readFile(new URL('../site/styles.css', import.meta.url), 'utf8');
const js = await readFile(new URL('../site/main.js', import.meta.url), 'utf8');
const values = (text, attribute) => [...text.matchAll(new RegExp(`\\b${attribute}="([^"]+)"`, 'g'))].map(match => match[1]);

test('duas páginas possuem idioma, metadados, landmarks e um único h1', () => {
  assert.deepEqual(names.sort(), ['aprovados.html', 'index.html']);
  for (const [name, html] of pages) {
    for (const snippet of ['lang="pt-BR"', 'name="viewport"', 'name="description"', '<main', '<nav', '<footer']) assert.ok(html.includes(snippet), `${name}: falta ${snippet}`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, name);
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, name);
    const ids = values(html, 'id');
    assert.equal(new Set(ids).size, ids.length, `${name}: IDs duplicados`);
    for (const id of [...values(html, 'aria-controls'), ...values(html, 'aria-labelledby')].flatMap(value => value.split(/\s+/))) assert.ok(ids.includes(id), `${name}: referência ARIA sem destino: ${id}`);
  }
});

test('links locais, âncoras e recursos existem nas duas páginas', async () => {
  for (const [name, html] of pages) {
    for (const href of [...values(html, 'href'), ...values(html, 'src')]) {
      assert.notEqual(href, '#', name);
      const url = new URL(href, `https://local.test/${name}`);
      if (url.origin !== 'https://local.test') { assert.equal(url.protocol, 'https:', `${name}: protocolo externo inesperado`); continue; }
      const relative = decodeURIComponent(url.pathname.slice(1));
      assert.ok((await stat(new URL(relative, site))).isFile(), `${name}: recurso ausente ${relative}`);
      if (url.hash) {
        const target = pages.get(relative);
        assert.ok(target, `${name}: âncora não aponta a HTML`);
        assert.ok(values(target, 'id').includes(decodeURIComponent(url.hash.slice(1))), `${name}: âncora ausente ${href}`);
      }
    }
  }
});

test('avisos claros, sem formulário, contato inventado ou ação simulada', () => {
  for (const [name, html] of pages) {
    assert.match(html, /PROTÓTIPO · CONTEÚDO ILUSTRATIVO · PENDENTE DE BRIEFING/, name);
    assert.doesNotMatch(html, /<form\b|wa\.me|tel:|mailto:|href="#"|https:\/\/cdn/i, name);
    for (const tag of html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? []) assert.match(tag, /rel="noopener noreferrer"/, name);
  }
  assert.match(pages.get('index.html'), /não realiza matrículas ou agendamentos/);
  assert.doesNotMatch(js, /\bfetch\s*\(|XMLHttpRequest|localStorage/);
});

test('biografia possui figura original, data e atribuição rastreável', async () => {
  const html = pages.get('index.html');
  assert.match(html, /Gisele Mara é professora de matemática/);
  assert.match(html, /escolas públicas e privadas/);
  assert.match(html, /datetime="2025-04-14"/);
  assert.match(html, /https:\/\/www\.instagram\.com\/salinhadaxl\/p\/DIbvuDRRTZU\//);
  assert.match(html, /Imagem integral do post original/);
  assert.doesNotMatch(html, /\d+ anos de (experiência|docência)/);
  const img = await readFile(new URL('assets/gisele-apresentacao.jpg', site));
  assert.equal(img.length, 168054);
  assert.equal(img.readUInt16BE(0), 0xFFD8);
});

test('aprovações preservam registros e apenas os dois comentários reais', () => {
  const html = pages.get('aprovados.html');
  for (const [name, course, source] of [
    ['Lucas Martins', 'Ciência da Computação', 'DUJP8TbEdDo'],
    ['Isadora Fontes', 'Psicologia', 'DUJPdwOkds2'],
    ['Isabella Vitória', 'Engenharia Ambiental', 'DT3GpcNDd6v']
  ]) { assert.ok(html.includes(name)); assert.ok(html.includes(course)); assert.ok(html.includes(`/p/${source}/`)); }
  const quotes = [...html.matchAll(/<blockquote><p>“(.*?)”<\/p><\/blockquote>/g)].map(match => match[1]);
  assert.deepEqual(quotes, ['mto obg por todo o apoio Gisele❤️', 'Obrigada, Gisele! Seu apoio foi essencial nesse processo ❤️']);
  assert.match(html, /17985603941930777/);
  assert.match(html, /18100338259879590/);
  assert.match(html, /ROTEIRO SUGERIDO/);
  assert.match(html, /não são depoimentos nem respostas atribuídas/);
  assert.match(html, /não foram obtidos por entrevista/);
  assert.doesNotMatch(html, /<img\b|cinco estrelas|100%/i);
});

test('controle de tema nativo, navegação progressiva e proteções de acessibilidade presentes', () => {
  for (const [name, html] of pages) {
    assert.match(html, /<fieldset[^>]*id="themePicker"/, name);
    assert.match(html, /<legend>Comparar visual<\/legend>/, name);
    assert.equal((html.match(/type="radio" name="theme"/g) ?? []).length, 2, name);
    assert.match(html, /class="skip" href="#conteudo"/, name);
    assert.match(html, /aria-controls="mainNav"/, name);
  }
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /\.js \.nav \{ display: none/);
  assert.doesNotThrow(() => new Script(js));
});

function contrast(a, b) {
  const luminance = hex => {
    const rgb = hex.slice(1).match(/../g).map(value => parseInt(value, 16) / 255).map(channel => channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4);
    return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
  };
  const [low, high] = [luminance(a), luminance(b)].sort((x, y) => x - y);
  return (high + .05) / (low + .05);
}

test('paletas mantêm contraste de texto e foco nas superfícies usadas', () => {
  const light = Object.fromEntries([...css.match(/:root \{([\s\S]*?)\}/)[1].matchAll(/--([\w-]+): (#[0-9A-F]{6})/g)].map(match => [match[1], match[2]]));
  const dark = { ...light, ...Object.fromEntries([...css.match(/:root\[data-theme="dark"\] \{([\s\S]*?)\}/)[1].matchAll(/--([\w-]+): (#[0-9A-F]{6})/g)].map(match => [match[1], match[2]])) };
  for (const [name, tokens] of [['claro', light], ['escuro', dark]]) {
    for (const background of ['surface-page', 'surface-card', 'surface-soft', 'surface-demo']) {
      for (const color of ['text-primary', 'text-secondary', 'action-primary']) assert.ok(contrast(tokens[color], tokens[background]) >= 4.5, `${name}: ${color}/${background}`);
      assert.ok(contrast(tokens.focus, tokens[background]) >= 3, `${name}: foco/${background}`);
    }
    for (const background of ['action-primary', 'action-hover']) assert.ok(contrast(tokens['text-on-action'], tokens[background]) >= 4.5, `${name}: texto CTA/${background}`);
  }
  for (const color of ['inverse-text', 'inverse-muted', 'inverse-accent']) assert.ok(contrast(light[color], light.inverse) >= 4.5, color);
});
