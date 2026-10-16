# FE-02 — entrega para QA

**Data:** 16/10/2026. **Autor:** frontend. Contrato: `docs/10-fontes-conteudo.md`, aprovação e extensão explícitas do dono do produto. FE-01 executado primeiro e preservado separadamente em `../frontend-fe01/`.

## Resultado implementado

- Home editorial com hero de matemática, dois caminhos ilustrativos de estudo, Sobre mim substancial de Gisele Mara, figura integral e datada da publicação BIO-01, chamada para as histórias e link real para o Instagram fornecido.
- Página `aprovados.html`: Lucas Martins / Ciência da Computação / UNIFEI Itabira; Isadora Fontes / Psicologia / UFES; Isabella Vitória / Engenharia Ambiental / UNIFEI Itabira. Cada registro tem fonte. Só dois comentários reais, preservados como citação e ligados aos comentários originais. Isadora foi corrigida conforme nova conferência do orquestrador para “mto obg por todo o apoio Gisele❤️”.
- Perguntas para coleta futura em bloco próprio “ROTEIRO SUGERIDO”, sem fabricar entrevista ou depoimento.
- Paletas A clara e B escura em toda a página com rádios nativos “Comparar visual”, opção armazenada em `sessionStorage` e fallback protegido quando o armazenamento é indisponível. Controles continuam funcionais na sessão sem armazenamento.
- Menu em fluxo: navegação visível sem JS; com JS, menu mobile com rótulos/estado ARIA, fechamento ao navegar e Escape com retorno do foco ao botão. Alvos, foco visível e movimento reduzido contemplados.
- Nenhum formulário, matrícula, agenda, coleta de leads, API, dependência nova, backend ou publicação.

## Arquivos alterados

`site/index.html`, `site/aprovados.html` (novo), `site/styles.css`, `site/main.js`, `scripts/check.test.mjs`. Ajuste adicional autorizado pelo orquestrador: `scripts/serve.mjs` recebeu MIME `.jpg`, `.jpeg` e `.png` para servir o ativo real como imagem. Servidor/porta/infraestrutura preservados. O ativo `site/assets/gisele-apresentacao.jpg` foi obtido e copiado pelo orquestrador antes da implementação; frontend apenas o incorporou como publicação integral, sem edição de imagem.

## Teste executado e comparação

PATH modificado só no processo com `C:\Users\tiago\AppData\Local\Temp\salinha-xl-node-24.19.0\node-v24.19.0-win-x64`. Comando real `npm.cmd test`, npm 11.17.0 / Node v24.19.0. **7 testes passaram, zero falhas, saída 0.** Saída integral: `npm-test.txt`.

A suíte verifica as duas páginas, landmarks/metadados/IDs/ARIA, destinos locais e recursos, aviso de demonstração, ausência de ações falsas, atribuição da biografia e ativo JPEG, três registros e comentários exatos, separação do roteiro sugerido, controles nativos e contraste calculado dos tokens reais nos fundos usados. É verificação estrutural e de cores declaradas; não simula DOM nem substitui navegador.

Snapshot final de `site/` e `scripts/`, hashes SHA-256 em `sha256.json`. Comparação local acumulada com baseline em `alteracoes.patch`, produzida com `git diff --no-index`. A saída 1 do diff significa arquivos diferentes, não falha de teste. Nenhum repositório ou branch Git foi criado. O patch inclui o JPEG como diferença binária; o arquivo completo está no snapshot.

Contrastes calculados de todas as combinações usadas em `contrastes.json`; script reproduzível `contrastes.mjs`. Asserções usam o valor sem arredondar: texto ≥4,5:1, foco sobre superfícies ≥3:1. Isso não constitui declaração de conformidade WCAG integral.

## Pendências e limites para o orquestrador/observador

- QA real em navegador ainda não executado pelo frontend. O orquestrador fará 320/360/768/1440px, ambas as páginas e temas, persistência entre páginas, menu/teclado/foco, reflow/zoom 200%, console e resposta HTTP/MIME. Capturas não foram fabricadas.
- Aceite visual e comercial da cliente continua pendente; os tokens são propostas. A imagem já contém no original referência de experiência na data da publicação; por isso aparece integral e datada, sem converter em contador atual no texto.
- Não há confirmação de modalidades, horários ou disponibilidade, nem garantia de resultados. Fontes são registros divulgados pela marca, não verificação independente universitária. Uso comercial dos registros depende da validação prevista no contrato.
- Nenhuma publicação, push, PR, contratação ou mudança de infraestrutura foi feita. Entrega permanece local para apresentação e decisão do dono do produto.

**Estado:** escrita do site e scripts encerrada; aguardando QA e revisão do observador. Não declarar navegabilidade/zoom/responsividade como verificados antes das evidências do orquestrador.
