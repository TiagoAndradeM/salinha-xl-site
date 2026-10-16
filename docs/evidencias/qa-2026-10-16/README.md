# QA de navegador — 16/10/2026

**Autor:** orquestrador. Código final FE-02, sem alterações posteriores aos testes. Servidor estático em loopback; nenhuma publicação.

- HTTP local: home 200; JPEG 200 e `Content-Type: image/jpeg`.
- Chrome real via CUA; matrizes de 2 páginas × 2 temas × 4 larguras = 16 verificações em `matriz.json`.
- Larguras de viewport: 1440, 768, 360 e 320 CSS px. Todas com `scrollWidth <= clientWidth` e um h1. A largura útil e o bitmap variam por barra de rolagem/escala do navegador; não confundir nome do viewport com dimensões exatas do JPEG.
- Claro/Escuro alteraram o visual completo; escolha Escuro preservada ao navegar da home a Aprovados e ao voltar pela âncora.
- Teclado: Enter abre menu; Escape fecha e devolve foco a `menuToggle`; âncora As aulas navega e fecha menu; Tab seguinte chega ao link Conversar sobre reforço. A seta esquerda no rádio Escuro seleciona Claro. Skip link transfere foco a `main#conteudo`.
- Biografia: imagem original carregada (1080 px naturais), alternativa no AX e legenda datada; nomes/cursos e comentários na página correspondem às fontes.
- Console consultado: avisos observados vieram de uma extensão do navegador, sem erros próprios do site observados. Não alterar extensões do usuário.
- Capturas são **quadros de viewport**, não páginas inteiras. `fullPage` falhou no provedor; o wrapper genérico também produziu quadros antigos, portanto as 16 capturas foram refeitas pela API direta. A primeira captura clara de Aprovados foi conferida e refeita separadamente após pintura. Não usar os quadros antigos como comprovação.

## Limites

Não foi comprovado zoom de 200%. O atalho Control+Equal foi executado, mas largura e DPR ficaram inalterados (1536 px / DPR 1,25). Não inferir zoom a partir de reflow. Leitor de tela, teste com público e aprovação final humana não foram executados. Sem alegação de conformidade WCAG integral.

Não reexecutei npm após esta inspeção: não houve mudança em código. A saída válida da implementação está em `../frontend-fe02/npm-test.txt`, 7 testes aprovados, saída 0. Diferenças em `../frontend-fe02/alteracoes.patch`; snapshot e hashes correspondentes preservados.

Os servidores de preview devem ser encerrados ao fim da verificação. A interface de paletas entregue na conversa é independente desses servidores.
