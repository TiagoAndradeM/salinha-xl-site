# Status consolidado — implementação local e revisão

**Atualizado em:** 16/10/2026. **Responsável:** observador. **Estado:** implementação autorizada e entregue; revisão técnica realizada; QA parcial e decisão final humana pendentes. Este relatório consolida arquivos, evidências e relatos recebidos, sem observação contínua dos agentes.

**Atualização do orquestrador — GitHub entregue:** o humano autorizou o envio e escolheu explicitamente público. Repositório criado: https://github.com/TiagoAndradeM/salinha-xl-site, branch `main`, com fontes, testes, documentação e evidências; ZIP de `entrega/` ignorado. Primeiro push confirmado no commit `bfba8a74bcda76d346648c21b4ad212c611e36d8`, igual ao remoto. GitHub Actions executou `npm test`: 7 aprovados, 0 falhas; execução https://github.com/TiagoAndradeM/salinha-xl-site/actions/runs/38982130329 concluída com sucesso. Metadados e trecho real do log em `docs/evidencias/github-2026-10-16/`. O commit seguinte registra somente esta evidência e atualização documental. A hospedagem informada pelo humano respondeu HTTP 200; não foi configurado deploy automático. As menções abaixo a pasta sem Git ou CI não executado descrevem a entrega FE-02 anterior ao envio. Decisão ADR-008 em `docs/08-decisoes.md`.

## O que mudou / risco / sua decisão / próximo passo

- **O que mudou:** o frontend executou FE-01 e, em seguida, a ampliação FE-02 aprovada: home de matemática, Sobre mim de Gisele Mara, página Aprovados e comparação Claro/Escuro. A decisão de nenhum backend foi mantida.
- **Evidência:** npm real passou 7/7 na versão final; a matriz de navegador registra 16 combinações de página/tema/largura sem overflow horizontal. O observador confrontou código, contratos, diffs, fontes e capturas, sem achar defeito impeditivo comprovado.
- **Risco/limite:** zoom real de 200% não foi comprovado. O briefing, a validação comercial da cliente e a revisão final do dono do produto continuam pendentes; não declarar aceite completo ou conformidade integral de acessibilidade.
- **Sua decisão:** avaliar as duas páginas e as cores, decidir ajustes e o uso da demonstração na reunião. A autorização para implementar já foi obtida; essa decisão não precisa ser pedida novamente.
- **Próximo passo:** completar a verificação de zoom de 200%, registrar a decisão humana sobre a apresentação e levar as perguntas prioritárias ao briefing. Nenhuma publicação, push, PR ou contratação está autorizada.

## Semáforo por tarefa

Legenda: **VERDE** = entrega indicada comprovada; **AMARELO** = entrega parcial ou pendência explícita; **VERMELHO** = bloqueio objetivo. Verde de implementação não significa aprovação comercial ou encerramento de todo o QA.

| Ticket / dono | Estado | Evidência e limite |
|---|---|---|
| PROD-01 / produto | VERDE — análise entregue | Contexto, briefing, PRD e aceites em docs `00`–`02`; hipóteses comerciais ainda dependem da cliente |
| UX-01 / designer | VERDE — especificação entregue | `docs/05-design.md`: auditoria e direções A/B; contrato ampliado em `docs/10-fontes-conteudo.md`; nenhum arquivo Figma criado |
| BE-01 / backend | VERDE — decisão aprovada | ADR-001 em `docs/08-decisoes.md`: nenhum backend; duas páginas e temas seguem estáticos |
| ENV-01 / orquestrador | VERDE — resolvido nesta sessão | Node portátil oficial v24.19.0 / npm 11.17.0; teste real via `npm.cmd test`, sem instalação global ou dependências novas |
| FE-01 / frontend | VERDE — etapa inicial implementada | Snapshot, patch, handoff e npm 5/5 em `docs/evidencias/frontend-fe01/`; etapa intermediária preservada |
| FE-02 / frontend | VERDE — implementação autorizada entregue | Duas páginas e paletas; snapshot, patch, hashes, contrastes e npm 7/7 em `docs/evidencias/frontend-fe02/`; aceite final continua pendente |
| OPS-01 / observador | VERDE — revisão e consolidação entregues | Leitura independente do código/evidências; sete arquivos atuais iguais ao snapshot e ao manifesto; capturas pertinentes inspecionadas |
| QA-01 / orquestrador + observador | AMARELO — parcial | Navegador, responsividade, teclado e temas verificados nos limites abaixo; zoom 200% não comprovado |
| REV-01 / dono do produto | AMARELO — decisão final pendente | Avaliar resultado visual, conteúdo e condições de uso na apresentação; revisão do observador não substitui o humano |
| COM-01 / humano | AMARELO — briefing pendente | Pauta em `docs/01-briefing.md`; data/horário da reunião e autorizações comerciais não confirmados |

## Contrato vigente e proposta do site

O dono do produto aprovou o MVP estático, direção A e implementação, ampliando expressamente o pedido para Sobre mim baseado nos posts, Aprovados e prévias das cores. A aprovação está em `docs/08-decisoes.md`; **`docs/10-fontes-conteudo.md` prevalece nos itens ampliados** sobre o recorte inicial de FE-01 em PRD/design/roadmap. A ampliação não é desvio não autorizado nem exige backend.

A proposta implementada apresenta dois objetivos ilustrativos — reforço e vestibulares/ENEM —, a professora, registros públicos de aprovações e navegação para o Instagram conhecido. A direção A clara/rosa é padrão; B escura/rosa pode ser comparada na mesma interface e preservada entre páginas durante a sessão. Os HEX são propostas orientadas pela referência, sem manual oficial validado.

**HIPÓTESE DE VALOR:** clareza sobre as aulas e o próximo passo pode reduzir dúvidas antes do contato. Não há medição de conversão, retorno financeiro, economia de tempo ou resultado educacional. Público prioritário, modalidades, níveis, horários, disponibilidade e operação de atendimento continuam sujeitos ao briefing.

Sem API de aplicação, banco, login, formulário, matrícula, agenda, pagamento ou coleta de leads. `sessionStorage` guarda apenas a preferência visual local da sessão, com fallback; não é cadastro de alunos. `scripts/serve.mjs` serve arquivos em loopback para preview e não é backend de negócio.

## Resumo do diff e rastreabilidade

| Arquivo | Mudança entregue |
|---|---|
| `site/index.html` | Home de matemática, dois caminhos de estudo, Sobre mim com figura datada e fonte, chamada para Aprovados e link real do Instagram; avisos demonstrativos mantidos |
| `site/aprovados.html` — novo | Três registros públicos com nomes/cursos/instituições, dois comentários reais com fontes e perguntas sugeridas em bloco separado |
| `site/styles.css` | Paletas completas, hierarquia editorial, composição matemática decorativa, layouts responsivos, foco e menu em fluxo |
| `site/main.js` | Troca de tema com preferência de sessão/fallback; menu progressivo, Escape e estados ARIA; ano do rodapé |
| `site/assets/gisele-apresentacao.jpg` — novo | JPEG integral da apresentação pública da professora, obtido pelo orquestrador; sem edição ou foto de aluno |
| `scripts/check.test.mjs` | Suíte de sete testes para duas páginas, recursos/âncoras/ARIA, conteúdo rastreado e contrastes declarados |
| `scripts/serve.mjs` | MIME JPEG/PNG para servir o ativo; continua servidor estático local |

Comparação acumulada contra a baseline: `docs/evidencias/frontend-fe02/alteracoes.patch`. Etapa inicial: `docs/evidencias/frontend-fe01/alteracoes.patch`. Há snapshots integrais e manifesto de hashes; a imagem aparece no patch como diferença binária e está preservada no snapshot. `package.json` permanece sem dependências novas. A pasta continua sem repositório Git; não alegar diff de branch ou PR.

**Conferência própria do observador:** os sete arquivos atuais de site/scripts coincidiram com o snapshot FE-02, e os sete hashes do snapshot coincidiram com `sha256.json`. A comparação confirma a versão revisada; não significa código intocado em relação à baseline anterior à implementação. Não houve mudança de código reportada após npm 7/7 e o QA.

## Conteúdo: fatos públicos, hipóteses e autorizações

As fontes foram consultadas pelo orquestrador no Chrome em 16/10/2026 e rastreadas em `docs/10-fontes-conteudo.md`. São registros divulgados pela marca, sem verificação independente universitária ou entrevista de alunos.

| Registro | Conteúdo usado | Limite preservado |
|---|---|---|
| BIO-01 / Gisele Mara | Professora de matemática; trajetória em escolas públicas e privadas; resumo editorial e capa integral da apresentação de 14/04/2025 | Figura com data, alternativa e crédito; os 24 anos impressos no post são referência histórica original, sem contador atualizado no texto |
| APR-01 / Lucas Martins | Ciência da Computação — UNIFEI Itabira | Sem depoimento atribuído, fotografia, nota ou colocação |
| APR-02 / Isadora Fontes | Psicologia — UFES; comentário público de `isa.alvarenga` | Citação exata “mto obg por todo o apoio Gisele❤️”, ligada ao comentário original; fonte documental corrigida e coerente com o site |
| APR-03 / Isabella Vitória | Engenharia Ambiental — UNIFEI Itabira; comentário público de `isabellavrsantos` | Citação curta preservada com fonte; sem acrescentar números de desempenho |
| ROTEIRO SUGERIDO | Perguntas para novas histórias | Bloco separado, sem respostas ou frases inventadas atribuídas aos alunos |

Uso desses registros e do post foi solicitado para a demonstração local pelo dono do produto. Isso não equivale à autorização comercial da cliente ou das pessoas envolvidas. Não há fotos de alunos, prova social fabricada, estrelas, taxas de sucesso ou promessa de aprovação. Formulário da bio não foi aberto/validado nem incorporado.

## Testes reais e QA observado

| Verificação | Resultado comprovado | Fonte / limite |
|---|---|---|
| Baseline anterior à implementação | `npm test` não iniciou por falta de npm; Node direto passou 5/5 | Histórico em `docs/evidencias/2026-10-16-base.md`; bloqueio posteriormente resolvido |
| FE-01 — `npm.cmd test` real | 5 testes aprovados, 0 falhas, saída 0 | `docs/evidencias/frontend-fe01/npm-test.txt`; etapa intermediária |
| FE-02 — `npm.cmd test` real | **7 testes aprovados, 0 falhas, saída 0** | `docs/evidencias/frontend-fe02/npm-test.txt`; Node v24.19.0 / npm 11.17.0, PATH apenas do processo |
| Contraste | Texto ≥4,5:1 e foco ≥3:1 nas combinações declaradas verificadas | `contrastes.json` e script reproduzível em FE-02; cálculo de tokens, sem alegação de conformidade integral |
| HTTP local e ativo | Home 200; JPEG 200 com `Content-Type: image/jpeg`; imagem carregada com largura natural de 1080px | Relato e evidências de QA do orquestrador |
| Layout no Chrome real | 2 páginas × 2 temas × 1440/768/360/320 CSS px = **16 verificações**; 16/16 com `scrollWidth <= clientWidth` e um h1 | `docs/evidencias/qa-2026-10-16/matriz.json`; larguras úteis diferem pela barra de rolagem |
| Tema/navegação | Claro/Escuro alteram visual completo; Escuro preservado ao ir a Aprovados e voltar por âncora | Fluxo registrado na matriz; preferência de sessão |
| Teclado/menu | Enter abre; Escape fecha e devolve foco ao botão; âncora As aulas fecha/navega e Tab seguinte chega a Conversar sobre reforço | Fluxo real registrado; a âncora não manteve foco preso no link oculto |
| Rádio/skip link | Seta esquerda seleciona Claro; skip link transfere foco a `main#conteudo` | Fluxo real registrado na matriz |
| Console | Nenhum erro próprio do site observado; avisos vistos pertenciam a extensão do navegador | Console consultado pelo orquestrador; extensão não alterada |
| Zoom de 200% | **NÃO COMPROVADO** | Control+Equal não mudou as métricas: viewport 1536px / DPR 1,25 antes/depois; `verified200:false` na matriz |

O npm portátil é a ferramenta oficial extraída temporariamente, com SHA-256 do ZIP validado conforme docs/10. Não houve instalação global, substituto de npm ou dependência adicionada. O observador não reexecutou a suíte sem alteração que justificasse repetição.

**Capturas:** 16 quadros finais de viewport e capturas adicionais em `docs/evidencias/qa-2026-10-16/`. Não são páginas inteiras. A API de captura genérica chegou a devolver quadros antigos; os 16 arquivos foram refeitos pela API direta e Aprovados claro/1440 foi validado separadamente. O observador inspecionou home claro/1440 e escuro/320, Aprovados claro/1440 e escuro/360, Sobre mim, relatos `fresh` e menu aberto: sem corte ou sobreposição impeditiva nos quadros vistos. Isso não substitui inspeção visual de cada região de todas as combinações.

**Prévia interativa das cores na conversa:** o orquestrador criou e testou o fragmento `salinha-paletas.html`, independente do servidor do site; relatório em `docs/evidencias/qa-2026-10-16/paletas.md`. Troca de cores e ausência de overflow interno foram registradas em viewports externos de 736 e 320px. O fragmento é uma prévia, não substitui as duas páginas implementadas.

## Parecer, riscos e pendências

A revisão independente não encontrou defeito impeditivo comprovado no código e nas evidências recebidas. Os pontos sugeridos para exercício no navegador — seletor a 320px, foco após âncora mobile e preferência entre páginas — foram contemplados nos registros de QA. **A entrega está disponível para avaliação do dono do produto; o aceite integral ainda não foi atingido.**

O gargalo verificável é o teste de zoom de 200%: a própria matriz registra `verified200:false`; reflow a 320px foi verificado, mas não substitui ampliação real. Quem age: orquestrador/QA e humano com método que permita confirmar a ampliação. Não há dados de tempo ou produtividade para estimar atraso. ENV-01 e autorização de implementação deixaram de ser bloqueios.

Permanecem sem execução comprovada: leitor de tela, teste com público, aprovação final da apresentação e CI. Fontes/ativos, prioridade comercial, modalidades, disponibilidade, canal de atendimento e manutenção devem ser validados no briefing. Publicação e infraestrutura seguem sem autorização.

Documentos do recorte inicial ainda podem conter trechos de baseline ou pedidos de aprovação antigos; interpretar escopo conforme ADRs aprovados e docs/10. Após o encerramento da escrita do observador, o orquestrador alinhou os bullets de camadas em docs/03 e a frase de autorização dos rótulos em docs/04 com a implementação atual. Foi um ajuste documental, sem mudança no código ou na autorização já concedida.

## Próximas ações e decisão humana

| Ação / ticket | Dono | Entrega esperada |
|---|---|---|
| QA-02 — comprovar zoom real de 200% | orquestrador/QA + humano | Registrar método, ampliação efetiva, resultado das duas páginas/temas e eventuais ajustes; preservar checklist parcial até concluir |
| REV-01 — avaliar demonstração e cores | dono do produto | Decidir direção preferida, ajustes e condições de uso na reunião; reconhecer explicitamente a pendência de zoom se decidir apresentar antes dela |
| COM-01 — conduzir briefing | humano, com pauta de produto | Confirmar público/oferta prioritários, formatos/níveis, canal e responsável, ativos e autorizações comerciais, atualização e objetivo mensurável |
| Automação — somente descoberta futura | produto + backend após briefing | Mapear problema operacional real e comparar soluções antes de propor sistema ou custos |

**Perguntas prioritárias:** quem procura e contrata; ENEM/vestibulares ou reforço primeiro; quais aulas existem; qual canal e fluxo de atendimento funcionam; quais materiais/registros podem ser usados comercialmente; quem atualiza; qual tarefa repetitiva merece automação. Não presumir respostas a partir do Instagram.

**Decisão imediata:** o dono do produto revisa a implementação, as paletas e as pendências para decidir a apresentação e ajustes. Conteúdo comercial e uso público dependem de validação aplicável da cliente. Não solicitar nova autorização para o trabalho local já aprovado, nem tratar a aprovação do protótipo como autorização de deploy.

## Handoff do observador

- **Lidos/revisados:** regras do observador, decisões e contrato vigente, documentação fonte, HTML/CSS/JS e scripts, handoffs/diffs/testes FE-01/FE-02, manifesto, matriz/relatório de QA, paletas e sete capturas pertinentes. O JPEG original também foi inspecionado.
- **Verificação própria:** leitura independente, sete comparações de fonte atual/snapshot e sete do snapshot/manifesto; inspeção visual das capturas indicadas; releitura deste status.
- **Alterado nesta tarefa:** somente `docs/07-status.md`. Sem implementação, execução de testes adicional, publicação ou edição de outros documentos.
- **Encerramento:** revisão documental entregue. QA parcial por zoom não comprovado; decisão final humana e validação comercial permanecem pendentes.
