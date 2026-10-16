# PRD — protótipo de apresentação pré-briefing

**Atualizado em:** 16/10/2026. **Estado vigente:** MVP estático e direção A aprovados pelo humano; implementação autorizada e ampliada para Sobre mim, página Aprovados e comparação visual de paletas. Contrato e conteúdo atuais: `docs/10-fontes-conteudo.md`; registro: `docs/08-decisoes.md`. As análises e o ticket inicial abaixo são históricos onde o novo contrato os amplia.

## Problema e proposta de valor

A demonstração atual apresenta uma estrutura genérica de estúdio. Ela ainda não permite avaliar com clareza como um site pode apresentar as aulas de matemática da potencial cliente.

A proposta é organizar a apresentação e o próximo passo de quem procura aulas. **HIPÓTESE DE VALOR:** tornar mais claras as ofertas pode reduzir dúvidas antes do contato. Não há medição de conversão, economia de tempo, desempenho educacional ou retorno financeiro.

## Objetivos e públicos

- Permitir que o dono do produto e a potencial cliente avaliem clareza, direção visual e caminho de contato antes de aprovar produção.
- Mostrar uma proposta coerente com as referências públicas observadas, sem alegar identidade oficial implementada.
- Preparar o briefing e registrar as informações necessárias para uma versão comercial.

O público de avaliação atual é o dono do produto e a potencial cliente. **Públicos finais a validar:** estudantes e responsáveis. O relato humano cita reforço, vestibulares e diferentes idades; o perfil público destaca ENEM. Não decidir a prioridade entre eles sem briefing ou aprovação explícita do dono do produto para a demonstração.

## Duas opções de escopo

| Opção | Entrega | Dependências e limites |
|---|---|---|
| A — demonstração focada, RECOMENDADA agora | Página estática com aviso visível, apresentação ilustrativa das aulas de matemática, objetivos de estudo a validar e indicação transparente de contato pendente | Utiliza dados fornecidos e referência visual observada; não precisa coletar informações, operar atendimento ou receber conteúdo comercial completo |
| B — institucional completa após briefing | Mesma base estática com apresentação autorizada, ofertas reais, formatos de aula, dúvidas frequentes e canal externo confirmado | Depende de conteúdo, materiais autorizados e aprovação da cliente; automações não estão incluídas e exigem descoberta própria |

Recomendação de produto: opção A. A decisão técnica formal sobre backend pertence a `docs/03-arquitetura.md`; não há, neste escopo, requisito confirmado de autenticação, persistência, formulário ou transação.

## MVP e priorização

O MVP é o destino proposto, não uma alegação de que a página já está pronta. A implementação deve ocorrer em tickets pequenos.

| Prioridade | Requisitos |
|---|---|
| Must | Aviso de demonstração; contexto de matemática; dados e hipóteses identificáveis; navegação interna funcional; uso em celular e por teclado; contato com estado pendente claramente descrito |
| Should | Diferenciar os objetivos de estudo definidos para a demo; direção visual fundamentada em referências; textos breves e hierarquia clara |
| Could | Apresentação profissional e dúvidas frequentes, apenas com conteúdo autorizado |
| Won't nesta fase | Backend, banco, login, painel, coleta de leads, formulário, agenda, reserva, pagamentos, analytics, automações de atendimento, resultados prometidos ou SEO avançado |

Fluxo ilustrativo: chegar à página → entender que é uma demonstração de aulas de matemática → explorar possibilidades → encontrar a seção que explica a pendência do canal de contato. Não simular matrícula, atendimento ou envio bem-sucedido.

## Regras de conteúdo

- Manter aviso de protótipo visível no topo; hipóteses específicas devem ser identificadas como ILUSTRATIVO ou PENDENTE DE BRIEFING.
- Tratar “Salinha da XL” como grafia observada no perfil, com validação de uso no site pendente. O nome original informado pelo responsável continua registrado no contexto.
- Não inventar idades específicas, metodologia, formato de aula, qualificações, preços, disponibilidade, números, depoimentos ou resultados.
- Não reutilizar imagens, avatar ou textos do perfil como ativos autorizados. A referência pública orienta uma proposta; não comprova permissão de republicação.
- Para a demonstração local, o humano autorizou nomes/cursos de aprovados provenientes de publicações verificadas. Usar somente os registros e comentários rastreados em `docs/10-fontes-conteudo.md`; não incluir fotos de alunos ou falas inventadas. Não usar o formulário da bio ou contato sem validação do destino.
- Corrigir mensagens genéricas incompatíveis com a adaptação. Se utilizarmos informações da cliente, o rodapé não poderá afirmar que nenhuma foi usada.

Proposta editorial **ILUSTRATIVA**, alinhada ao contrato de design e ainda sujeita a aprovação; não é oferta final:

- H1: “Qual é o seu próximo passo na matemática?”
- Apoio: “Uma proposta de site para apresentar aulas de matemática, do reforço à preparação para vestibulares. Formatos e detalhes serão confirmados no briefing.”
- CTA principal: “Conhecer as possibilidades” → `#servicos`.
- CTA secundário: “Entender a proposta” → `#sobre`.
- Nome tipográfico observado: “Salinha da XL”; uso na demonstração e grafia sujeitos a aprovação.

Reforço e vestibulares/ENEM devem receber a prioridade aprovada para a demonstração, sem afirmar oferta vigente.

## Histórias e critérios de aceite do MVP

| ID | História | Critério verificável |
|---|---|---|
| AC-01 | Como visitante, quero reconhecer a demonstração | Aviso “PROTÓTIPO · CONTEÚDO ILUSTRATIVO · PENDENTE DE BRIEFING” visível no topo, inclusive em celular |
| AC-02 | Como avaliador, quero entender a proposta | Em revisão humana da primeira dobra, registrar se matemática e os objetivos escolhidos são identificados sem explicação adicional; não declarar sucesso antes do feedback |
| AC-03 | Como dono do produto, quero conteúdo verdadeiro | Revisão rastreia afirmações a relato humano, referência observada ou hipótese rotulada; nenhum dado proibido ou não confirmado é apresentado como oferta real |
| AC-04 | Como visitante, quero um próximo passo compreensível | Links possuem destino real; CTA pré-briefing usa seção interna e deixa clara a pendência do contato; não há formulário ou ação de atendimento simulada |
| AC-05 | Como visitante mobile, quero acessar todo o conteúdo | Verificar 360, 768 e 1440 px no navegador, sem rolagem horizontal ou conteúdo cortado; registrar dimensões e capturas |
| AC-06 | Como visitante, quero navegar com diferentes condições de uso | Verificar teclado, foco, menu, ordem dos títulos, contraste e zoom de 200%; registrar resultados e limites observados |
| AC-07 | Como revisor, quero evidência técnica reproduzível | Executar `npm test` e registrar comando, ambiente e resultado real; testes estruturais não substituem a revisão no navegador |
| AC-08 | Como dono do produto, quero decidir com evidência | Observador revisa aceites, comparação com snapshot e pendências; aprovação final é solicitada ao humano |

## Ticket proposto FE-01 — adequar cabeçalho e primeira dobra

**Responsável:** frontend.

**Dependências:** aprovação humana do ticket, mensagem e direção visual; contrato correspondente em `docs/05-design.md`. Contrato técnico sem endpoints conforme decisão formal de backend.

**Fatos conhecidos:** página estática demonstrativa existente; contexto de aulas de matemática informado pelo responsável; referência pública registrada no contexto.

**Hipóteses:** hierarquia, mensagem e composição visual propostas podem facilitar a compreensão; ainda precisam de avaliação.

**Objetivo de negócio:** permitir avaliar uma primeira impressão ligada às aulas de matemática na apresentação pré-briefing.

**Arquivos esperados:** `site/index.html` e `site/styles.css`. `site/main.js` somente se um comportamento previsto no contrato de design exigir ajuste; registrar a justificativa.

**Escopo:** cabeçalho e hero; coerência de título/metadescrição; texto e identificação do rodapé apenas quando incompatíveis com a adaptação. Exceção específica abaixo da dobra: corrigir somente as cores dos quatro usos auditados em design (`.hero-footnote`, `.footer p`/`.footer #year`, `.card-index` e `.card-tag`). CTA mantém destino interno real. Não aplicar a nova paleta globalmente nem reescrever as demais seções; o restante da página continua demonstrativo e será tratado em FE-02.

**Critérios observáveis:** AC-01 a AC-08 aplicáveis à área alterada; regressão da navegação existente e da indicação de contato pendente; nenhuma nova dependência ou serviço. Capturas devem deixar claro o alcance parcial da entrega. Não declarar o site completo com base neste ticket.

**Fora de escopo:** reformular todas as seções, criar ofertas definitivas, integrar contato real, coletar dados, reutilizar ativos sem autorização, alterar stack ou publicar.

**Aprovação humana necessária:** opção de escopo, direção visual, grafia/uso da marca, mensagem ilustrativa e autorização para iniciar FE-01. Essas decisões não equivalem à autorização comercial da cliente.

**Evidências obrigatórias:** comparação com snapshot local, arquivos alterados, comando e saída dos testes, capturas nas três larguras, registro de teclado/zoom/contraste, limitações e revisão do observador. A pasta não é um repositório Git; não inicializar Git como parte do ticket.

## Próximos tickets e indicadores

- **FE-02 — frontend:** adaptar ofertas e demais seções, com contrato próprio após briefing ou aprovação de escopo; não está autorizado por FE-01.
- **QA-01 — observador + humano:** revisar a entrega de FE-01 e decidir se pode ser usada na apresentação.
- **COM-01 — humano:** conduzir briefing e confirmar conteúdo, prioridade, canal e materiais.

Indicadores desta fase: perguntas respondidas, conteúdo validado, aceites verificados e mudanças solicitadas. Não há valores medidos, metas de leads ou dados de conversão disponíveis.

## Riscos e decisões pendentes

Riscos: priorizar ENEM ou reforço sem validação; presumir identidade oficial a partir de publicações; prometer resultado educacional; sugerir atendimento inexistente; ampliar para automações sem conhecer a operação; tomar testes estruturais como prova suficiente de qualidade visual.

Decisões do dono do produto: opção A ou B, direção visual, mensagem, uso da marca e início de FE-01. Conteúdo comercial, materiais e publicação dependem de autorização aplicável da cliente e do responsável. Permanecem proibidos publicação, push, PR e contratação de serviços sem autorização explícita.
