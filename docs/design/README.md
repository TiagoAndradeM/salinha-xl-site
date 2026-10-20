# Registro da construção no Figma

Estes scripts registram as operações da rodada de 19/10. São executados somente pela ferramenta `use_figma`, no contexto do Figma Plugin API, com os IDs salvos em `../evidencias/figma-2026-10-19/estado.json`.

Não são código do site, não devem ser executados com Node.js e não são uma tarefa pendente. Reexecutá-los sobre telas já criadas pode duplicar objetos; a retomada precisa inspecionar o arquivo e usar os IDs existentes.

1. `figma-build.js`: construção das telas e registro das ligações que precisavam de ajuste.
2. `figma-fix-navigation.js`: correção dessas ligações e remoção da captura temporária.
3. `figma-fix-layout.js`: correção da largura dos links no cabeçalho e das escolhas no celular.

As cores e estilos foram criados antes dos scripts, com IDs e valores no arquivo de estado. A captura de referência serviu para obter a imagem já utilizada pelo site; a interface final tem textos, vetores e componentes separados. Limites de inspeção estão em `../11-prototipagem.md` e `../evidencias/figma-2026-10-19/validacao.json`.
