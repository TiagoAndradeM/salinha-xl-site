# Salinha da XL · Protótipo de site

Site demonstrativo de aulas de matemática, com Sobre mim, página Aprovados e comparação de paletas Claro/Escuro. Conteúdo e fontes em `docs/10-fontes-conteudo.md`; validação comercial da cliente ainda pendente.

**Demonstração hospedada pelo responsável:** https://tiny-salad-c306.tiagoandrademarques26.workers.dev/

**Código no GitHub:** https://github.com/TiagoAndradeM/salinha-xl-site

**Protótipos no Figma:** https://www.figma.com/design/gSo2f1TKL4c7w4trJgQxE2?node-id=6-3

Para entender as escolhas sem um relatório técnico longo, comece por [O que cada agente fez e por quê](docs/relatorios/README.md). Para experimentar as alternativas, veja [Vamos comparar as duas versões](docs/11-prototipagem.md).

O responsável informou esse endereço nesta conversa. O envio ao GitHub versiona o projeto; a configuração de deploy automático da hospedagem é uma etapa separada.

## Processo da equipe

Kit de partida para aprender a orquestrar um time de agentes e construir uma apresentação comercial **antes do briefing**.

## O que este repositório já entrega

- Cinco **agentes de projeto** em `.codex/agents/*.toml`: produto, design, frontend, backend e observador.
- Regras e fluxo de aprovação em `AGENTS.md`, com orquestração pela conversa principal do Codex.
- Documentos de produto e handoffs em `docs/`, para que decisões sobrevivam entre sessões.
- Um site demonstrativo em `site/`: home com aulas e Sobre mim, página Aprovados e paletas Claro/Escuro. Conteúdo rastreado e aviso explícito de protótipo.
- Verificações locais sem instalação de dependências e um workflow de CI no GitHub.

**Importante:** ter os cinco arquivos não significa que cinco agentes estão rodando sempre. Abra esta pasta no Codex e peça explicitamente a delegação; a conversa principal inicia e coordena os subagentes conforme a tarefa. O Codex e os acessos às ferramentas devem estar instalados/autorizados separadamente.

## Experimente o site (Node 20+)

```powershell
npm run dev
```

Abra http://localhost:4173. Pressione Ctrl+C para parar.

```powershell
npm test
```

Sem banco de dados, API de aplicação, login, pagamentos ou dependências de terceiros neste protótipo. A hospedagem estática informada acima é externa ao servidor local de desenvolvimento.

Também é possível abrir `site/index.html` diretamente no navegador para visualizar os arquivos locais; o teste com navegação/tema entre páginas foi executado por HTTP local. Fontes e contrato: `docs/10-fontes-conteudo.md`. Resultado atual, testes, screenshots e pendências: `docs/07-status.md`. A ferramenta npm portátil usada nesta sessão está documentada no contrato; não houve instalação global.

## Experimente a equipe no Codex

1. Abra **esta pasta** como projeto no aplicativo Codex para Windows, na extensão do VS Code ou na CLI (`codex` no diretório raiz).
2. Envie o texto de `PROMPT-INICIAL.md` para a conversa principal.
3. Leia primeiro o relatório do `observador` e a proposta do `produto`; aprove ou corrija premissas antes de liberar mudanças importantes.
4. Solicite design e frontend após a decisão de escopo. Só peça backend se surgir um requisito real de dados, autenticação ou integração servidor.
5. Peça teste, revisão do diff, validação no navegador e resumo de pendências antes de aprovar publicação.

Na CLI do Codex, `/subagents` permite inspecionar as tarefas delegadas. A documentação atual está em https://developers.openai.com/codex/subagents.

## Três travas importantes

1. O projeto está **antes do briefing**. O relato do responsável e a referência pública estão em `docs/00-contexto.md`; isso não substitui aprovação da cliente. Não inventar serviços, preços, certificações, contatos, resultados nem depoimentos.
2. O `backend` pode **recomendar não criar backend**. Isso é uma decisão de engenharia válida e preferível para uma landing page estática.
3. Ferramentas externas (Figma, GitHub, hospedagem, WhatsApp) só funcionam quando configuradas e com permissões adequadas. `AGENTS.md` não concede permissões de infraestrutura.

## Passagem para sistemas maiores

Aumente a complexidade por **requisitos aprovados**, não pelo número de agentes. Em um SaaS futuro, acrescente autenticação, dados, testes integrados, revisão de segurança, migrações, monitoramento e ambientes separados. Adote tickets, branches/worktrees por tarefa, PRs e CI antes de permitir implementação paralela no mesmo código.

## Referências utilizadas

- https://developers.openai.com/codex/subagents
- https://developers.openai.com/codex/guides/agents-md
- https://openai.com/index/harness-engineering/
- https://openai.com/index/open-source-codex-orchestration-symphony/
- https://www.figma.com/blog/introducing-codex-to-figma/
