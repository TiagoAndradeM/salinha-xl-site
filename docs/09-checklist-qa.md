# QA — evidência antes de demonstrar

- [x] Rodar `npm test` e registrar saída: FE-01 5/5; FE-02 7/7, saída 0.
- [x] Abrir site local e testar 360px, 768px e 1440px: duas páginas, duas paletas; adicional 320px.
- [x] Navegar com teclado: menu Enter/Escape, retorno do foco, âncora e Tab seguinte, rádio e skip link.
- [x] Conferir textos alternativos, títulos e landmarks: código, suíte e árvore de acessibilidade; sem teste com leitor de tela.
- [x] Verificar links internos/recursos na suíte; navegação e persistência entre páginas no navegador.
- [x] Confirmar fontes dos três aprovados e dois comentários reais; sugestões não atribuídas e contato sem ação simulada.
- [ ] Revisar contraste, zoom 200%, console do navegador.
- [ ] Solicitar revisão de código e da apresentação ao humano.
- [ ] Antes de publicar: substituir placeholders, obter autorização sobre imagens/dados, conferir consentimento e política de privacidade se coletar dados.

Marque os itens apenas após verificação real.

**Evidência atual:** `docs/evidencias/qa-2026-10-16/matriz.json`, capturas JPEG e `README.md`; suíte em `docs/evidencias/frontend-fe02/npm-test.txt`. Contraste declarado foi calculado e console consultado sem erros próprios observados. A linha de contraste/zoom/console permanece desmarcada porque **zoom real de 200% não foi comprovado**: o atalho automatizado não alterou as métricas. Reflow de 320px foi testado, mas não substitui esse teste. Revisão humana e autorização comercial continuam pendentes.
