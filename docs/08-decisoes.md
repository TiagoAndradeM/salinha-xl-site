# Log de decisões

**Pedido de 19/10/2026:** o dono do projeto pediu relatos simples, explicando o que cada agente usou e por quê. Também pediu primeiro prototipar no Figma e comparar melhorias. Autorizou commit e push se o acesso ao GitHub estivesse funcionando. O acesso de push foi confirmado pelo conector; a execução será registrada no status. Essa autorização cobre os relatórios, instruções, protótipos e provas da rodada; não escolhe uma versão para implementação no site.

**Atualizado em:** 16/10/2026. Aprovação do processo não equivale a aprovação de conteúdo, design ou implementação. Agentes não autoaprovam propostas de negócio.

| ID | Data | Estado | Decisão ou proposta | Fundamentação e autoridade |
|---|---|---|---|---|
| ADR-001 | 16/10/2026 | APROVADO pelo humano | MVP estático HTML/CSS/JS, nenhum backend de aplicação, persistência, autenticação, pagamento ou integração protegida | Resposta explícita “Aprovo sim”; parecer BE-01 em `docs/03-arquitetura.md` |
| ADR-002 | 16/10/2026 | AUTORIZADO pelo humano quanto ao fluxo | Cinco papéis especializados; análises de produto/designer/backend, consolidação do observador e frontend após aprovação | Solicitação explícita nesta conversa; não significa cinco processos residentes ou todos simultâneos |
| ADR-003 | 16/10/2026 | CONFIRMADO pelo humano como limite | Demonstração pré-briefing; não é material comercial aprovado; fatos, hipóteses e pendências separados | Solicitação explícita; não autoriza apresentar ativos, contatos ou alegações como oferta real |
| ADR-004 | 16/10/2026 | APROVADO e ampliado pelo humano | Demonstração estática em tickets sequenciais; pedido posterior inclui Sobre mim, Aprovados e comparação das cores | “Aprovo sim, faça o site…”; contrato vigente em `docs/10-fontes-conteudo.md` |
| ADR-005 | 16/10/2026 | APROVADO pelo humano para demo | Direção A clara/rosa como padrão; B escura/rosa disponível para comparação interativa | Pedido explícito para visualizar protótipos das cores; HEX propostos, sem manual oficial validado |
| ADR-006 | 16/10/2026 | AUTORIZADO pelo humano | Executar FE-01 e extensão FE-02 já solicitada, sem nova parada de aprovação entre os dois; revisão do observador e decisão final permanecem | Escopo e fontes em `docs/10-fontes-conteudo.md`; nenhum deploy autorizado |
| ADR-007 | 16/10/2026 | LIMITE explícito do humano | Sem publicação, push, PR ou contratação de serviços até autorização | Solicitação explícita; aceite de FE-01 não libera essas ações |
| ADR-008 | 16/10/2026 | AUTORIZADO pelo humano, inclusive visibilidade pública | Preparar e enviar o projeto ao GitHub, preservando a hospedagem existente | Pedido explícito “você consegue subir essa página pro GitHub?” e resposta “pode ser publico”; autoriza inicialização, commits e push para `TiagoAndradeM/salinha-xl-site` público. Nenhum deploy novo ou PR solicitado |

## ADR-001 — parecer formal

Recomenda-se nenhum backend de aplicação para a demonstração institucional. `scripts/serve.mjs` é ferramenta local de desenvolvimento. A escolha aceita a ausência de coleta de leads, reservas, cobrança e gestão de alunos, reduzindo operação e dependências antes de haver requisito.

A menção a poucas automações e o formulário na bio não constituem requisito de integração aprovado. Reavaliar após briefing se houver fluxo real de dados, reserva, transação ou gestão. Comparar alternativas e definir operação, custos, contrato e aprovação antes de implementar. Trade-offs: `docs/03-arquitetura.md`.

## Registro da aprovação e ampliação

O humano respondeu: “Aprovo sim, faça o site com sobre mim, utilize os posts do instagram que ela fala sobre ela, adicione uma pagina com aprovados, com nomes cursos e depoimentos dos alunos sugeridos.” Também solicitou uma interface em que pudesse ver os protótipos de cores.

Isso autoriza a implementação local e a ampliação descrita em `docs/10-fontes-conteudo.md`, inclusive uso demonstrativo dos registros públicos rastreados. Serão usados comentários reais verificados e perguntas sugeridas para coletar outros relatos; não atribuir texto inventado a alunos. A versão prévia de FE-01 fica como etapa inicial, seguida por FE-02 sem nova confirmação desnecessária. Publicação, push, PR e contratação continuam fora da autorização.

Nenhum agente aprovou conteúdo comercial pela cliente. Oferta prioritária, formatos, ativos, canal e automações continuam sujeitos ao briefing. Evidências e limitações: `docs/evidencias/2026-10-16-base.md`; consolidação: `docs/07-status.md`.

## Envio ao GitHub

O humano informou a hospedagem existente `https://tiny-salad-c306.tiagoandrademarques26.workers.dev/` e solicitou envio ao GitHub. O conector confirmou a conta `TiagoAndradeM`; não listou repositórios acessíveis nem oferece criação de repositório. O navegador autenticado abriu o formulário de criação e confirmou o nome disponível `salinha-xl-site`.

A tentativa inicial de selecionar privado foi bloqueada pela revisão automática por faltar escolha explícita de visibilidade. O humano resolveu a pendência ao responder “pode ser publico”, autorizando o repositório público `TiagoAndradeM/salinha-xl-site`. Preparação local concluída: README com endereço informado, ZIP de entrega ignorado, fontes/documentação/evidências preservadas e commit `e372149`. O repositório foi criado pelo navegador e o conector confirmou `visibility: public`, `default_branch: main` e acesso de push. O envio e o resultado dos testes serão registrados com evidência em `docs/07-status.md`. Não configurar deploy automático, alterar DNS ou abrir PR neste pedido.
