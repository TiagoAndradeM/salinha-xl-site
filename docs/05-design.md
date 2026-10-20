# Design — proposta pré-briefing para Salinha da XL

**Rodada atual — 19/10:** protótipos editáveis e comparação da organização em [Vamos comparar as duas versões](11-prototipagem.md). Explicação curta em [relato de design](relatorios/designer.md). A auditoria abaixo é o histórico da primeira versão.

**Atualizado em:** 16/10/2026. **Estado vigente:** direção A e implementação aprovadas pelo dono do produto. O pedido posterior ampliou a experiência para home completa, Sobre mim, página Aprovados e prévias A/B. Contrato vigente em `docs/10-fontes-conteudo.md` substitui os limites antigos de FE-01 quando explicitado. HEX continuam propostas, sem identidade oficial aprovada pela cliente. Auditoria inicial preservada abaixo.

## 1. Fontes, evidências e limites

### Informações do responsável humano
- Aulas de matemática para diferentes idades e objetivos, incluindo reforço e preparação para vestibulares.
- Nome inicialmente informado como “salinhadaXl”; grafia observada no perfil: “Salinha da XL”. Uso na demonstração e grafia oficial sujeitos a aprovação.
- Demonstração anterior ao briefing; não se trata de material comercial aprovado pela cliente.

### Referência pública efetivamente observada
O **orquestrador** consultou o [perfil no Instagram](https://www.instagram.com/salinhadaxl/) no Chrome, via CUA, em 16/10/2026 e relatou a observação visual ao designer. Fonte consolidada em `docs/00-contexto.md`.

- Título público: “Salinha da XL | Matemática ENEM”. ENEM recebe destaque no perfil.
- Rosa, branco e preto predominam. O avatar é uma ilustração de professora; há destaques circulares rosa, títulos pretos/brancos e publicações educacionais.
- Essas observações orientam a direção; **não comprovam tokens oficiais, licença ou permissão de republicação**.
- Não foram baixados ou reutilizados avatar, logo, fotos, textos ou imagens. Os códigos HEX abaixo são aproximações propostas pelo designer, não amostras extraídas do perfil nem valores de um manual de marca.
- Não escolher prioridade entre ENEM, outros vestibulares e reforço sem briefing ou decisão explícita do dono do produto para a demonstração.

### Figma e escopo da auditoria
O designer executou `figma_whoami`: sessão autenticada, plano Starter, assento View e Code Layers desabilitadas. Isso não comprova acesso de edição a arquivo específico. Nenhum arquivo Figma foi acessado, criado ou atualizado; este documento é o handoff de design.

A auditoria do site foi **estática**, em HTML/CSS/JS, com cálculo de contraste das cores declaradas. Não houve teste manual do site em navegador, teclado, leitor de tela ou zoom. A consulta visual ao Instagram não equivale à validação do protótipo.

## 2. Auditoria de UX, acessibilidade e responsividade

### Bases úteis verificadas em código

| Evidência | Local |
|---|---|
| Idioma pt-BR e viewport declarados | `site/index.html:2` e `site/index.html:5` |
| Aviso de protótipo antes do cabeçalho | `site/index.html:14` |
| Skip link e destino no conteúdo principal | `site/index.html:13` e `site/index.html:24` |
| Landmarks, um h1 e títulos de seção | `site/index.html` |
| Menu com aria-controls, aria-expanded e rótulo atualizado no JS | `site/index.html:18`; `site/main.js:3` |
| Âncoras principais correspondem a IDs existentes | `site/index.html:20`, `:39`, `:42`, `:50` e `:51` |
| Foco visível definido; movimento reduzido contemplado | `site/styles.css:2` e `site/styles.css:5` |

Essas evidências mostram recursos existentes, sem comprovar conformidade integral de acessibilidade.

### Lacunas e prioridades

| Prioridade | Achado | Evidência e consequência |
|---|---|---|
| Alta | A primeira dobra apresenta um estúdio, sem matemática | Marca, hero e arte em `site/index.html:17`, `:29` e `:34`; a oferta da potencial cliente não fica reconhecível |
| Alta | A paleta atual verde/creme não deriva da referência rosa/preto/branco observada | `site/styles.css:1`; propor nova direção sem alegar identidade oficial |
| Alta | Processo descreve contratação de site e cards descrevem estrutura de página | `site/index.html:45` e `:50`; permanecem demonstrativos até FE-02 |
| Alta | Notas e rótulos pequenos têm contraste insuficiente | Cálculos abaixo; corrigir quatro usos específicos em FE-01 |
| Média | Menu mobile depende de JS para aparecer | `site/styles.css:4` oculta `.nav`; prever melhoria de progressividade em ticket próprio |
| Média | Menu usa posição fixa relativa ao topo da página | `top:108px` em `site/styles.css:4`; risco inferido de desalinhamento quando aviso/cabeçalho ganhar linhas |
| Média | Cards informativos sobem no hover | `site/styles.css:2`; animação pode sugerir clique inexistente; tratar em FE-02 |
| Média | Avisos e rótulos usam 9–11px | `site/styles.css:2` e `:4`; priorizar legibilidade do aviso e da primeira dobra |
| Média | Documento anterior e CSS usavam tokens diferentes | Versão anterior: texto #212421/destaque #596c62; CSS: #222821/#52695d; distinguir proposta de valor implementado |

Os riscos de menu, sobreposição, reflow e teclado foram inferidos do código; sua ocorrência visual não foi testada.

### Contraste calculado do estado atual

Aplicada a fórmula de luminância relativa sRGB às cores declaradas em `site/styles.css:1` e `:2`, sem captura de pixels:

| Uso | Texto / fundo | Razão aproximada |
|---|---|---|
| `.hero-footnote` | #787d73 / #f6f1eb | 3,76:1 |
| `.footer p`, `.footer #year` | #757971 / #f6f1eb | 3,95:1 |
| `.card-index` | #858980 / #fffcf7 | 3,49:1 |
| `.card-tag` | #7f857c / #fffcf7 | 3,70:1 |
| Texto `--muted` sobre `--bg` | #61675f / #f6f1eb | 5,17:1 |

Os quatro primeiros usos não atingem 4,5:1 para texto normal. Referência: [W3C — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Valores exibidos estão arredondados; o aceite deve usar o resultado sem arredondar para decidir o limiar.

### Responsividade existente, sem aceite manual
- Container máximo de 1160px, com margens de 24px; até 680px, margens de 17px.
- Breakpoints de 900px e 680px; até 680px, hero, cards e etapas ficam em uma coluna.
- Arte mantém altura mínima de 385px no mobile e pode ampliar a distância até a próxima seção.
- Menu mobile sobreposto com deslocamento absoluto fixo de 108px.
- Ausência de rolagem horizontal, alinhamento do menu e legibilidade a 360, 768 e 1440px permanecem **PENDENTES DE VERIFICAÇÃO**.

## 3. Duas direções visuais — HIPÓTESES

### A — Caderno claro, com rosa e tinta escura — RECOMENDADA
Base clara, títulos diretos, rosa em destaques e geometria matemática discreta. A referência rosa/preto/branco aparece sem reproduzir ativos da cliente. A composição busca acomodar públicos heterogêneos sem definir a experiência como infantil nem exclusivamente vestibular.

- Branco levemente rosado, texto quase preto e rosa mais escuro em ações para legibilidade.
- Tipografia de sistema, leitura em primeiro plano e arte secundária.
- Formas e símbolos matemáticos decorativos em CSS; sem imagens de alunos ou falso material didático.
- Caminhos de reforço e preparação poderão receber hierarquia equivalente até uma decisão de prioridade.
- **Risco:** parecer genérica sem ativos autorizados; a aderência precisa de avaliação humana.

### B — Quadro contemporâneo, com fundo escuro e rosa
Áreas escuras de destaque, títulos claros e acentos rosa. Mantém a família cromática observada com maior intensidade e contraste de áreas.

- Fundo proposto #20151D, texto #FFF8FC e acento #F69BC6, todos ILUSTRATIVOS.
- Cards e áreas de leitura podem permanecer claros.
- **Riscos:** intensidade excessiva para alguns públicos, associação maior a preparação para provas e maior exigência de controle de contraste em foco/ações.
- Fórmulas decorativas não devem sugerir método próprio, credenciais ou resultados reais.

### Recomendação para decisão humana
Escolher **A**, com a mensagem única da seção 5 e o contrato pequeno FE-01. A recomendação respeita as famílias de cor observadas; HEX, logo, fonte e estilo final continuam sujeitos à validação. Não usar o verde atual como suposta identidade da cliente.

## 4. Tokens propostos para A — ILUSTRATIVOS

| Token | Valor proposto | Uso |
|---|---|---|
| `--surface-page` | #FFF9FC | Fundo claro da composição |
| `--surface-card` | #FFFFFF | Superfícies de leitura |
| `--surface-soft` | #FCE7F1 | Blocos secundários |
| `--text-primary` | #241921 | Títulos e corpo |
| `--text-secondary` | #65515F | Texto de apoio |
| `--action-primary` | #B51B64 | CTA com texto branco |
| `--action-hover` | #95134F | Hover do CTA |
| `--text-on-action` | #FFFFFF | Texto do CTA |
| `--surface-demo` | #FFE3F0 | Aviso de protótipo |
| `--focus` | #6F2DBD | Foco em superfície clara |
| `--border` | #D9BBCB | Separação decorativa |
| `--radius-card` | 16px | Cards futuros |
| `--radius-control` | 8px | Controles da composição |

Cálculos nas combinações propostas: texto principal/fundo 16,35:1; secundário/fundo 6,98:1; branco/CTA 6,35:1; foco/fundo 7,25:1. Não estender esses resultados a outras combinações sem recalcular. A borda decorativa não será o único identificador de um controle. Foco sobre fundo escuro exige tratamento próprio, por exemplo contorno de duas cores.

**Alcance em FE-01:** aplicar a direção no aviso, cabeçalho e hero. Escopar os estilos dessa área para evitar recolorir silenciosamente todas as seções por mudança global dos tokens atuais. As quatro correções de contraste e a coerência textual do rodapé são exceções específicas autorizáveis no contrato. A aplicação integral da paleta depende de FE-02.

### Tipografia, espaço e composição
- Fonte: `system-ui, 'Segoe UI', Arial, sans-serif`; nenhum download externo.
- Corpo: 16–18px, line-height 1.6. Apoio: mínimo proposto de 14px; aviso: 13px.
- H1 fluido aproximadamente 36–64px, line-height 1.1; H2 futuro aproximadamente 28–44px.
- Preferir rem e limites fluidos; não impedir ampliação de texto.
- Espaçamento: 4, 8, 12, 16, 24, 32, 48, 64 e 80px.
- Largura máxima: 1160px; texto de apoio com cerca de 60 caracteres por linha.
- Mobile: uma coluna, texto antes da arte; margens mínimas propostas de 20px. Arte com altura menor que a composição atual, sem deslocar o CTA para depois de conteúdo decorativo.
- Desktop: hero pode usar duas colunas, mantendo a ordem do DOM.

## 5. Mensagem única proposta para FE-01 — ILUSTRATIVA

Esta é a mesma proposta editorial do PRD, sujeita ao aceite do dono do produto:

- **Aviso mantido:** “PROTÓTIPO · CONTEÚDO ILUSTRATIVO · PENDENTE DE BRIEFING”. Melhorar tamanho, espaçamento e quebras, preservando os termos do AC-01.
- **Nome tipográfico:** “Salinha da XL”; sem redesenhar ou imitar logo.
- **Eyebrow:** “MATEMÁTICA PARA DIFERENTES OBJETIVOS”.
- **H1:** “Qual é o seu próximo passo na matemática?”
- **Apoio:** “Uma proposta de site para apresentar aulas de matemática, do reforço à preparação para vestibulares. Formatos e detalhes serão confirmados no briefing.”
- **CTA principal:** “Conhecer as possibilidades” → `#servicos`.
- **CTA secundário:** “Entender a proposta” → `#sobre`.
- **Nota de contexto:** “Conteúdo demonstrativo; não representa oferta comercial aprovada.”
- **Título de página proposto:** “Salinha da XL — Demonstração”.
- **Metadescrição proposta:** “Demonstração de site para aulas de matemática. Conteúdo ilustrativo e detalhes sujeitos ao briefing.”
- **Rodapé proposto:** “Protótipo com referências fornecidas e observadas. Conteúdo sujeito ao briefing e à aprovação.”

Reforço e vestibulares descrevem os objetivos informados; o aviso e o apoio não devem sugerir oferta vigente ou prioridades comerciais confirmadas. Nenhum CTA simula envio, matrícula, reserva, agenda ou atendimento. A navegação existente mantém destinos internos reais; contato permanece explicitamente pendente.

## 6. Arquitetura futura de referência — fora de FE-01

1. Aviso de demonstração e cabeçalho.
2. Hero contextualizado.
3. Possibilidades por objetivo: reforço e preparação, com detalhes confirmados ou rotulados.
4. Explicação do caminho de interesse; não inventar método de ensino.
5. Apresentação profissional e dúvidas frequentes somente com informações autorizadas.
6. Próximo passo com canal confirmado; até lá, estado de contato pendente.
7. Rodapé consistente com o uso demonstrativo de informações.

Não inserir depoimentos, aprovações, taxas de sucesso, preços, endereços, contadores, disponibilidade, imagens de alunos ou selos fictícios. Após FE-01, cards e processo ainda genéricos continuam registrados como pendência de FE-02.

## 7. Estados, acessibilidade e verificação futura

- **Links:** finalidade clara; hover por sublinhado ou fundo, sem depender só de cor; destino existente.
- **CTA:** padrão, hover, foco visível e active. Alvo recomendado do projeto de 44 × 44px; não apresentar isso como mínimo universal de WCAG 2.2 AA. [W3C — Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- **Menu existente:** verificar aberto/fechado, aria-expanded, rótulo e ordem de foco. Conteúdo oculto deve ficar fora da ordem de foco. Escape para fechar e retorno ao botão são recomendações para um ticket de comportamento, não autorização implícita de reescrita em FE-01.
- **Cards informativos:** na evolução integral, sem cursor ou movimento que sugira ação inexistente.
- **Contato não implementado:** texto claro de pendência; nenhum botão de envio disponível.
- **Movimento:** preservar reduced-motion; evitar animação necessária para compreender conteúdo.
- **Semântica:** preservar lang, skip link, landmarks e hierarquia h1 → h2 → h3. Arte exclusivamente decorativa pode usar aria-hidden, sem texto essencial inacessível.
- **Leitura:** texto normal com pelo menos 4,5:1; foco perceptível em seu fundo real; nenhum significado comunicado apenas por rosa/escuro.
- **Responsividade:** registrar capturas e dimensões em 360, 768 e 1440px; acrescentar teste de reflow a 320px. Testar ampliação de texto/zoom a 200%, indicando o método e limitações. [W3C — Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).
- **Aceite humano:** pedir que o avaliador identifique a oferta na primeira dobra; registrar a resposta, sem alegar teste com público que não tenha ocorrido.

Todos esses critérios de navegador, teclado e zoom permanecem pendentes nesta fase. Não declarar conformidade WCAG integral apenas com esta auditoria ou os testes estruturais existentes.

## 8. Contrato pequeno proposto — FE-01

**Estado:** AUTORIZADO pelo humano em 16/10/2026; contrato inicial preservado para comparação. A ampliação posterior de FE-02 está autorizada e descrita em `docs/10-fontes-conteudo.md`.
**Dono:** frontend. **Revisão:** observador. **Decisão final:** dono do produto.
**Objetivo:** primeira dobra reconhecível como demonstração para aulas de matemática, com referência rosa/claro/escuro e legibilidade corrigida.

### Dependências e arquivos
- Aceite da direção A, do nome/grafia para uso demonstrativo, da mensagem da seção 5 e deste escopo.
- PRD e decisão registrados; sem backend ou endpoint, conforme `docs/03-arquitetura.md` e `docs/04-contratos.md`.
- Arquivos previstos: `site/index.html` e `site/styles.css`.
- `site/main.js` somente se um comportamento previsto exigir ajuste indispensável; registrar a justificativa e encaminhar ampliação ao orquestrador antes de executá-la. O contrato atual não exige alteração de comportamento.
- Antes de editar, preservar snapshot para comparação; pasta atual sem Git, sem inicializá-lo nesta tarefa.

### Alterar — lista fechada
1. Aviso, cabeçalho e hero segundo a direção A e copy única da seção 5; conservar IDs, navegação e estado de contato pendente.
2. Título/metadescrição e identificação/texto do rodapé para coerência; o rodapé não poderá afirmar que nenhuma informação da cliente foi usada.
3. Arte do hero substituída por geometria matemática decorativa, sem copiar avatar, logo, foto ou material da cliente.
4. **Quatro correções de contraste expressamente permitidas**, inclusive abaixo da dobra: `.hero-footnote`, `.footer p`/`.footer #year` como um uso de rodapé, `.card-index` e `.card-tag`. Não reescrever o conteúdo ou layout das seções posteriores.

### Fora deste ticket
- Aplicar a paleta a toda a página ou reescrever cards, processo e contato.
- Criar ofertas definitivas, formulário, contato externo, matrícula, agenda ou automação.
- Reutilizar ativos sem autorização, criar arquivo Figma, adicionar dependência/framework/serviço ou publicar.
- Prometer resultado educacional, conversão ou fidelidade à identidade oficial.

### Aceite e evidências exigidas
1. Comparação com snapshot limitada aos arquivos e itens aprovados; anexar o diff local.
2. Primeira dobra e aviso visíveis; proposta identifica matemática e o caráter ilustrativo em revisão humana.
3. Copy igual à seção 5, sem novos dados ou oferta real presumida.
4. CTAs internos chegam a `#servicos` e `#sobre`; regressão da navegação e contato pendente verificada.
5. Quatro usos de texto auditados atingem pelo menos 4,5:1 em seus fundos reais; registrar cores e cálculo.
6. Executar `npm test`, registrando comando, ambiente, saída e código de saída. Se impedido, documentar sem declarar execução bem-sucedida e encaminhar a pendência.
7. Capturas reais em 360, 768 e 1440px, dimensões registradas; verificar reflow a 320px, teclado, foco, menu e zoom a 200%, anotando resultados e limitações.
8. Observador confronta diff, contrato, testes e evidências; dono do produto decide sobre a apresentação.
9. Handoff explicita que FE-01 é parcial: demais seções ainda genéricas pertencem a FE-02. Nenhuma publicação, push, PR ou contratação.

**Baseline relatado pelo orquestrador nesta fase:** `npm test` não iniciou a suíte porque npm estava ausente do PATH. Alternativa `node --test scripts/check.test.mjs`: cinco testes aprovados, zero falhas, saída 0. Não é evidência da futura alteração nem comprovação de `npm test` ou de qualidade visual.

## 9. Próximos tickets e briefing

- **FE-02 — frontend:** adaptar as seções restantes para objetivos confirmados; revisar progressividade e posição do menu, affordance dos cards e aplicação integral da direção aprovada. Contrato próprio, sem autorização por FE-01.
- **QA-01 — observador + humano:** verificar a alteração e decidir sua adequação para a apresentação.
- **COM-01 — humano:** confirmar oferta prioritária, público decisor, ativos, tom e canal.

Perguntas prioritárias de design:
1. Há logo, paleta, fontes e aplicações oficiais? Que materiais podem ser reutilizados?
2. O foco inicial será ENEM/vestibulares, reforço ou ambos? Quem decide a contratação, estudante ou responsável?
3. Quais formatos e níveis realmente são atendidos e quais dúvidas antecedem o contato?
4. Como a marca quer ser percebida? Quais referências a cliente aprova ou rejeita?
5. Qual canal poderá ser divulgado, para quem direciona e quem mantém o conteúdo?

**Decisão humana concreta solicitável após consolidação:** aprovar a direção A clara/rosa, a copy única, o uso demonstrativo de “Salinha da XL” e o contrato FE-01 com as quatro correções de contraste. Esse aceite não equivale à aprovação comercial da cliente ou autorização de publicação.
