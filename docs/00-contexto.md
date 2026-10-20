# Contexto da oportunidade

**Atualizado em:** 16/10/2026. **Estado:** implementação local autorizada e entregue para revisão, anterior ao briefing. **Uso previsto:** demonstração interna para apresentação a uma potencial cliente. Não é material comercial aprovado pela cliente.

## Informações fornecidas pelo responsável humano

Estas informações orientam a descoberta, mas ainda não foram confirmadas diretamente pela cliente:

- Marca informada inicialmente como “salinhadaXl”.
- Atividade: aulas de matemática para diferentes idades e objetivos, incluindo reforço e preparação para vestibulares.
- O responsável percebe uma presença digital de baixa qualidade e poucas automações de controle. Trata-se de avaliação inicial, não de diagnóstico validado com a cliente.
- Há intenção de realizar uma reunião de briefing no fim de semana; data e horário não foram confirmados.
- O responsável quer demonstrar o valor de um site intuitivo, respeitando a identidade visual existente, e é o dono do produto e revisor final.
- Referência pública fornecida: [perfil no Instagram](https://www.instagram.com/salinhadaxl/).

## Referência pública observada

Consulta realizada pelo orquestrador em 16/10/2026 no Chrome, via CUA. Esta seção registra o conteúdo efetivamente observado e seus limites; a referência não autoriza republicação.

| Observação | O que permite concluir | Limite |
|---|---|---|
| Título/identidade visível: “Salinha da XL \| Matemática ENEM” | Essa é a grafia exibida no perfil consultado | Grafia oficial para o site, uso do nome e aprovação da cliente ainda pendentes |
| Bio destaca ENEM e reserva de vagas 2026 | ENEM recebe destaque nessa referência pública | Não comprova oferta, disponibilidade ou campanha vigente; não reproduzir chamada de vagas como oferta atual |
| Há link externo de formulário na bio | Existe um caminho de interesse divulgado no perfil | Link não aberto nem validado; destino, funcionamento, responsável e coleta de dados desconhecidos |
| Rosa, branco e preto predominam; avatar ilustrado de professora e publicações educacionais | Há referências visuais para propor direções coerentes | Não comprova tokens oficiais, licença ou autorização de reutilização de imagens, textos ou avatar |

O destaque público em ENEM e o relato humano sobre reforço e diferentes idades são fontes distintas. A prioridade entre esses públicos e ofertas é pergunta do briefing, não decisão já tomada.

## Fatos verificados no repositório

- A baseline era uma página genérica de estúdio. Após aprovação, há home em `site/index.html` com aulas/Sobre mim e `site/aprovados.html`, com fontes rastreadas em `docs/10-fontes-conteudo.md`.
- Conteúdo, estilo e interação estão separados em `site/index.html`, `site/styles.css` e `site/main.js`.
- Avisos, navegação, tema e menu foram implementados; a suíte final passou 7/7 e o navegador foi inspecionado em duas páginas/dois temas de 320 a 1440px. Zoom 200% e revisão humana permanecem pendentes; detalhes em `docs/evidencias/qa-2026-10-16/README.md`.
- O projeto foi enviado ao repositório público `TiagoAndradeM/salinha-xl-site` após autorização do humano em 16/10. Os snapshots anteriores foram preservados como histórico. Em 19/10, o pedido é simplificar relatos e comparar no Figma antes de mudar o site; ver `docs/11-prototipagem.md`.

## Hipóteses — NÃO CONFIRMADAS

- Uma página institucional estática pode ser suficiente para explicar a oferta e orientar o próximo contato.
- Distinguir reforço de preparação para vestibulares/ENEM pode ajudar a navegação; agrupamento, nomenclatura e prioridade dependem da cliente.
- Um canal externo confirmado pode atender ao primeiro contato; não assumir WhatsApp ou agendamento.
- Uma apresentação mais clara pode reduzir dúvidas antes do contato. Não há medição de conversão, economia de tempo ou retorno financeiro.
- Alguma automação pode ser útil no futuro; ainda não se conhece a rotina que justificaria sua construção.

## Pendências e limites

- Confirmar públicos prioritários, ofertas reais, modalidades, níveis atendidos, disponibilidade, diferenciais demonstráveis, canal de atendimento e responsável por atualizar o conteúdo.
- Obter materiais e autorização de uso da marca, imagens, avatar e textos antes de incorporá-los como ativos da cliente.
- Manter aviso visível de demonstração; rotular conteúdo proposto como ILUSTRATIVO ou PENDENTE DE BRIEFING quando necessário.
- Não inventar preços, metodologia, credenciais, depoimentos, resultados, números, idades específicas, redes, contatos, endereço ou disponibilidade.
- Não incorporar dados pessoais sem autorização. O pedido posterior do humano autorizou nomes/cursos publicados de aprovados e uso de posts para esta demonstração local, conforme `docs/10-fontes-conteudo.md`; fotos de alunos não são necessárias. Não coletar dados nem simular formulário, atendimento, reserva ou agendamento.
- Não publicar, fazer push, abrir PR, contratar serviços ou alterar infraestrutura sem autorização explícita.
- FE-01 foi aprovado pelo dono do produto em 16/10/2026, com ampliação explícita para Sobre mim, Aprovados e prévias de cor. Registro em `docs/08-decisoes.md`; isso não equivale à aprovação comercial pela cliente.

## Objetivo desta fase

Tornar concreta a proposta de um site para aulas de matemática, preparar o briefing e permitir a avaliação da direção visual e da clareza da oferta. O pedido posterior autorizou a experiência de duas páginas e a comparação das paletas. Implementação e provas estão disponíveis; aceite humano, zoom real de 200% e validação comercial permanecem pendentes. Não prometer resultados ainda não medidos.
