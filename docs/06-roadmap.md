# Plano de execução incremental

**Atualizado em:** 16/10/2026. Documentação e pareceres não autorizam implementação. Estado comprovado: `docs/07-status.md`.

| Etapa | Ticket | Dono | Dependência | Entrega e evidência |
|---|---|---|---|---|
| 0 | BASE-01 Verificar a base | orquestrador | arquivos locais | Node direto 5/5; npm indisponível no PATH; snapshot/hashes em `docs/evidencias/2026-10-16-base.md`; QA manual pendente |
| 1 | PROD-01 Avaliar valor, escopo e riscos | produto | contexto e referência | `docs/00-contexto.md`, `01-briefing.md`, `02-prd.md` |
| 1 | UX-01 Auditar e propor duas direções | designer | código e referência observada | `docs/05-design.md`: auditoria estática, A clara/rosa e B escura/rosa |
| 1 | BE-01 Decidir necessidade de backend | backend | requisitos do MVP | `docs/03-arquitetura.md`, `04-contratos.md`; nenhum backend recomendado, ADR-001 proposto |
| 2 | OPS-01 Consolidar análises | observador | três pareceres e evidências | `docs/07-status.md`: lacunas, divergências, riscos e decisões |
| 3 | ENV-01 Disponibilizar execução de npm | orquestrador | diagnóstico do ambiente | Localizar/configurar npm existente; registrar se instalação for necessária. Executar comando real; não criar substituto para simular npm |
| 3 | FE-01 Melhorar primeira dobra e contraste | frontend | aprovação humana; contrato em `docs/05-design.md`; snapshot | Comparação local, testes e capturas; escopo fechado abaixo |
| 4 | QA-01 Revisar FE-01 | observador + humano | entrega e evidências FE-01 | Revisão de comparação/aceites; humano decide uso na apresentação e ajustes |
| 5 | COM-01 Briefing real | humano | pauta `docs/01-briefing.md`; reunião a confirmar | Respostas com fonte, autorizações, oferta e ação prioritárias |
| 6 | FE-02 Adaptar restante da página | frontend | conteúdo ou hipóteses aceitos; novo contrato e aprovação | Ofertas, processo, contato e direção integral; menu e cards; testes/revisão |

A reunião pode ocorrer antes de FE-02; data e horário ainda não foram confirmados. FE-01 isolado não conclui o site nem comprova que a página está pronta para apresentação.

## FE-01 — contrato resumido para decisão

- **Dono:** frontend; revisão do observador; decisão final do dono do produto.
- **Objetivo:** primeira impressão reconhecível como demonstração de aulas de matemática.
- **Arquivos:** `site/index.html` e `site/styles.css`. O contrato atual não exige alterar `site/main.js`.
- **Escopo:** aviso, cabeçalho, hero e arte geométrica decorativa; título/metadescrição e coerência do rodapé. Corrigir especificamente `.hero-footnote`, `.footer p`/`.footer #year`, `.card-index` e `.card-tag`, inclusive suas cores abaixo da dobra. Sem aplicação global da paleta ou reescrita das demais seções.
- **Dependências:** aprovação da opção A de escopo, direção visual, uso demonstrativo de “Salinha da XL”, copy única e contrato detalhado em `docs/05-design.md`.
- **Aceite:** AC-01 a AC-08 do PRD aplicáveis à área alterada; navegação/contato pendente sem regressão; contraste dos usos auditados; `npm test` com resultado real; capturas 360/768/1440px, reflow 320px, teclado, foco, menu e zoom 200%, com método e limitações.
- **Evidências:** comparar com `docs/evidencias/baseline-2026-10-16/`; registrar comandos/resultados/capturas; revisão do observador. Falha de ambiente não equivale a teste aprovado.
- **Fora de escopo:** backend, formulários, coleta de dados, contato externo, dependências, ativos de pessoas, publicação, push, PR ou contratação.

## Coordenação

PROD-01, UX-01 e BE-01 foram analisados em paralelo, sem escrita. Documentação em janelas exclusivas: produto → backend → designer → orquestrador → observador. Não houve edição simultânea. Frontend só recebe tarefa após o aceite humano. A pasta está sem Git; a comparação será local por snapshot, sem inicializar repositório neste escopo.
