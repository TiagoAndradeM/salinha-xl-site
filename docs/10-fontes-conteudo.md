# Conteúdo e contrato vigente — site demonstrativo

**Data:** 16/10/2026. **Autor:** orquestrador, após aprovação explícita e ampliação pelo dono do produto. Trabalho local; sem publicação, push, PR, contratação, backend ou coleta de dados. Este contrato prevalece sobre os limites anteriores de FE-01 nos itens ampliados.

## Autorização e execução sequencial

O usuário aprovou o MVP sem backend, direção A, nome e melhoria inicial. Pediu também Sobre mim a partir de posts da professora, página com aprovados/nomes/cursos/depoimentos e prévias visíveis das cores. Essa solicitação autoriza as duas tarefas abaixo; não é necessário pedir novamente aprovação da extensão solicitada.

| Ticket | Dono | Arquivos | Aceite e evidência |
|---|---|---|---|
| FE-01 | frontend | `site/index.html`, `site/styles.css` | Pequena melhoria inicial: hero/cabeçalho/metadados/rodapé e quatro contrastes; preservar comparação local da etapa e executar teste real |
| FE-02 | frontend, após FE-01 | `site/index.html`, `site/aprovados.html`, `site/styles.css`, `site/main.js`, `scripts/check.test.mjs`; ativos já obtidos | Home completa com aulas e Sobre mim, página Aprovados, duas paletas compartilhadas e menu robusto. Recursos/links/âncoras válidos, conteúdo rastreado, npm test, capturas e revisão |
| QA-01 | observador + humano | `docs/07-status.md`, evidências | Confrontar fontes, comparação, testes, desktop/mobile, teclado, zoom e seleção de paleta; humano decide resultado e pendências |

Só um autor edita por vez. Frontend não altera documentos de decisão. Raiz fará QA real no navegador e o observador revisará a entrega. A extensão não autoriza formulários, matrícula, pagamento, agenda ou dados inventados.

## Fontes efetivamente consultadas

Todas consultadas pelo orquestrador no Chrome via CUA em 16/10/2026, com conteúdo e capturas inspecionados. São publicações da marca, não verificação independente de registros universitários. Usar fonte discreta por registro; não prometer resultado nem inferir que as aulas causaram a aprovação.

### BIO-01 — apresentação da professora

[Publicação de apresentação — 14/04/2025](https://www.instagram.com/salinhadaxl/p/DIbvuDRRTZU/).

Observado na legenda e nos dois primeiros slides: nome **Gisele Mara**, professora de matemática, experiência em escolas públicas e privadas, interesse em acompanhar a evolução dos alunos e ensino como paixão. A publicação cita 24 anos de docência naquela data; **não converter para anos atuais nem publicar um contador de experiência**.

Resumo editorial permitido, sem fingir uma declaração literal: “Gisele Mara é professora de matemática. Em sua apresentação pública, conta sobre sua trajetória em escolas públicas e privadas e sobre a alegria de acompanhar cada avanço dos alunos. Seu trabalho reúne dedicação ao ensino e interesse em tornar a matemática mais compreensível.” Usar título “Prazer, Gisele Mara.” e link para a apresentação original. Evitar detalhes da vida familiar, qualificações ou metodologia não investigados.

Ativo real exportado pela capacidade `pageAssets` do navegador: capa do post, JPEG integral, 168.054 bytes. Copiado para `site/assets/gisele-apresentacao.jpg`. Exibir como figura de publicação datada, sem recorte destrutivo ou transformação, com alternativa descritiva e crédito/link. Não apresentar como retrato exclusivo produzido para o site. Uso solicitado para a demonstração local; autorização comercial da cliente permanece pendente. Não houve geração de imagem ou uso de foto de outra pessoa.

### APR-01 — Lucas Martins

[Publicação de aprovação](https://www.instagram.com/salinhadaxl/p/DUJP8TbEdDo/).

Nome **Lucas Martins** e curso **Ciência da Computação**, instituição **UNIFEI Itabira**, conferidos na imagem e legenda. Não há depoimento de Lucas verificado nesta coleta: não criar frase atribuída a ele. Não copiar fotografia ou anunciar notas/ano/colocação.

### APR-02 — Isadora Fontes

[Publicação de aprovação](https://www.instagram.com/salinhadaxl/p/DUJPdwOkds2/).

Nome **Isadora Fontes**, curso **Psicologia**, instituição **UFES**, conferidos na arte. A legenda menciona o perfil `isa.alvarenga`; [comentário público](https://www.instagram.com/p/DUJPdwOkds2/c/17985603941930777/) conferido também no AX: **“mto obg por todo o apoio Gisele❤️”**. A transcrição visual inicial do emoji foi corrigida antes da entrega. Pode aparecer como citação curta, com rótulo “Comentário na publicação” e fonte. Preservar o texto original; não ampliar ou atribuir nota, método ou resultado adicional.

### APR-03 — Isabella Vitória

[Publicação de aprovação](https://www.instagram.com/salinhadaxl/p/DT3GpcNDd6v/).

Nome **Isabella Vitória**, curso **Engenharia Ambiental**, instituição **UNIFEI Itabira**, conferidos na legenda. O perfil marcado é `isabellavrsantos`; [comentário público](https://www.instagram.com/p/DT3GpcNDd6v/c/18100338259879590/) visto: **“Obrigada, Gisele! Seu apoio foi essencial nesse processo ❤️”**. Pode aparecer como citação curta, com rótulo “Comentário na publicação” e fonte. O post também cita desempenho/colocação; não é necessário replicar esses números nesta demo.

### Sugestões para novos depoimentos

Há dois comentários reais verificados; não há necessidade de fabricar depoimentos para completar cards. Atender ao pedido de sugestões com um bloco separado “Perguntas para novas histórias”, identificado como **ROTEIRO SUGERIDO**, por exemplo:

1. Como era sua relação com a matemática antes das aulas?
2. Que mudança você percebeu durante a preparação?
3. Como foi receber a notícia da aprovação?

Não associar essas sugestões a nomes reais, usar estrelas fictícias, fabricar frases, expandir os comentários ou declarar que houve entrevista. Aprovados e relatos são registros divulgados pela marca, não garantia de desempenho futuro.

## Contrato visual da extensão

- **Duas páginas:** home com `#servicos`, `#sobre` e `#contato`; `aprovados.html` separada. Não criar página biográfica redundante.
- **Home:** hero matemático expressivo, dois caminhos (reforço / vestibulares e ENEM), seção editorial Sobre mim com figura real, chamada para Aprovados e contato transparente. Remover seções que vendem construção de sites.
- **Copy do hero:** H1 aprovado “Qual é o seu próximo passo na matemática?”. Apoio editorial visitante: “Reforço para fortalecer a base. Preparação para encarar novos desafios.” Nota próxima: “Apresentação ilustrativa; formatos e ofertas sujeitos ao briefing.” CTA “Conhecer as aulas” → `#servicos`; secundário “Ver aprovados” → `aprovados.html`.
- **Aviso no topo:** conservar “PROTÓTIPO · CONTEÚDO ILUSTRATIVO · PENDENTE DE BRIEFING”. Usar notas proporcionais junto ao conteúdo; sem espalhar instruções de desenvolvimento pelo site.
- **Contato:** link real do Instagram fornecido é permitido como navegação para a marca. Não adicionar telefone, WhatsApp, formulário da bio ou sucesso de envio. Texto não deve alegar canal desconhecido quando o Instagram já é um destino conhecido; horários, modalidades e disponibilidade a confirmar.
- **Aprovados:** introdução, três registros rastreados, dois comentários reais e bloco de perguntas sugeridas separado. Sem fotos de alunos, contadores de aprovação, números ou alegações de desempenho garantido.
- **Paleta A padrão:** fundo `#FFF9FC`, card `#FFFFFF`, suave `#FCE7F1`, texto `#241921`, apoio `#65515F`, ação `#B51B64`, hover `#95134F`, texto da ação `#FFFFFF`, foco `#6F2DBD`.
- **Paleta B comparável:** fundo `#20151D`, card `#2C2029`, suave `#382333`, texto `#FFF8FC`, apoio `#D3BAC9`, ação `#F69BC6`, hover `#FFC1DF`, texto da ação `#20151D`, foco `#FFC1DF`.
- HEX são propostas orientadas pela referência, não valores oficiais. Seletor nativo de rádios “Comparar visual”, opções “Claro” e “Escuro”, swatches e foco visível. Alterar tokens da página completa; lembrar opção entre páginas por `sessionStorage` com fallback seguro. Sem backend/rede.
- Menu mobile em fluxo, navegação disponível sem JS, Escape/foco e rótulos consistentes. Arte matemática apenas decorativa, movimento reduzido e alvos de toque adequados.
- Corpo 16–18px, largura até 1160px, respiro e tipografia expressiva. Hero assimétrico, aulas em dois blocos e Sobre mim editorial; evitar todas as seções em cards iguais.

## Verificação exigida

1. `npm test` real com código e saída registrados; suíte multipágina verifica recursos, destinos/IDs, idioma, avisos e atribuições proporcionais. Sem teste com DOM falso que só espelha implementação.
2. Navegador: ambas as páginas nos dois temas, 360/768/1440px e reflow 320px; ausência de overflow; menu por teclado e fechamento; foco, links, troca de tema e manutenção da preferência entre páginas.
3. Zoom 200% com método registrado; capturas reais; console sem erro próprio da aplicação. Contraste das combinações reais recalculado.
4. Comparação com baseline preservada, incluindo novos arquivos, fontes e ativo; sem alegar diff Git de branch.
5. Observador revisa e atualiza status; humano recebe interface, evidências e pendências. Nenhuma publicação está autorizada.

## Ambiente npm resolvido para a sessão

Backend investigou e não encontrou npm existente. Raiz obteve o ZIP portátil oficial do Node v24.19.0, validou SHA-256 `57F71AB3652E797D84ACDDC79C81CC9FF1C6DDB2A1974CDB83F00FEE9BFF4C73`, extraiu em diretório temporário e executou `npm.cmd --version`: **11.17.0**. Não houve instalação global, modificação permanente do PATH ou dependências adicionadas ao projeto.

Executável real disponível nesta sessão: `C:\Users\tiago\AppData\Local\Temp\salinha-xl-node-24.19.0\node-v24.19.0-win-x64\npm.cmd`. Acrescentar a pasta ao PATH só do processo ao executar `npm test`; registrar resultado, sem reutilizar o teste da baseline.
