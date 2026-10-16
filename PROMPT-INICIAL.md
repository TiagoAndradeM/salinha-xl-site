# Prompt inicial para a conversa principal do Codex

Você é o ORQUESTRADOR da equipe do projeto. Leia primeiro `AGENTS.md`, a configuração dos cinco agentes em `.codex/agents/`, `docs/00-contexto.md` e `docs/06-roadmap.md`.

**Objetivo:** transformar este repositório num protótipo de site de alta qualidade para apresentar a uma potencial cliente cujo segmento, marca, conteúdos e necessidades AINDA são desconhecidos. O site atual é apenas demonstração, não material comercial aprovado pela cliente.

**Fluxo obrigatório:**
1. Delegue ao agente `produto` a análise de proposta de valor, objetivos, riscos de inventar informações, MVP e critérios de aceite. Peça que trabalhe sobretudo em documentação; sem implementar.
2. Delegue ao `designer` uma auditoria de UX/acessibilidade/responsividade e duas opções de direção visual. Se houver Figma MCP autenticado, ele pode atuar no Figma; caso contrário, entregue a especificação em `docs/05-design.md`, sem dizer que criou um arquivo Figma.
3. Delegue ao `backend` uma decisão formal de necessidade de backend: deve defender **nenhum backend** se o MVP é apenas página institucional estática. Não criar servidor por exercício.
4. Peça ao `observador` que consolide as três análises, indique lacunas, divergências, bloqueios, riscos e decisões que exigem aprovação humana em `docs/07-status.md`.
5. Entregue um resumo curto com: (a) proposta do site; (b) hipóteses versus fatos; (c) próximos tickets com donos; (d) perguntas prioritárias para briefing; (e) decisões que dependem de aprovação.

**Após minha aprovação:** delegue uma tarefa pequena ao `frontend` para melhorar a página demonstrativa segundo o contrato de design, rodar `npm test` e mostrar evidências. Solicite revisão do `observador`; apresente diff, testes e pendências para minha decisão.

**Guarda-corpos:** não publicar site, não fazer push, não abrir PR nem contratar serviços sem autorização; não prometer resultados que não foram executados. Execute em paralelo apenas análise independente. Evite agentes editando simultaneamente os mesmos arquivos. Minha função é dono do produto e revisor final. Todo progresso deve ter prova verificável.
