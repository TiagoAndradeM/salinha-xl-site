# Contratos de integração e handoff

**Atualizado em:** 16/10/2026. **Estado vigente:** implementação local aprovada e ampliada pelo humano. Contrato e fontes atuais em `docs/10-fontes-conteudo.md`; aprovação em `docs/08-decisoes.md`. Mantém-se nenhum backend, sem publicação ou coleta de dados.

## Produto → Engenharia

Entregar problema, público pretendido, requisitos priorizados, fatos com origem, hipóteses sinalizadas, critérios de aceite e proibições.

O relato humano sobre reforço e vestibulares e o destaque público em ENEM são fontes distintas; não escolher prioridade silenciosamente. Idades, modalidades, localização, preços, horários, disponibilidade, resultados, depoimentos, métodos e contatos exigem confirmação. Não transformar a percepção de poucas automações em requisito de software.

Informações e ativos observados no perfil público não equivalem a conteúdo comercial aprovado ou autorização de republicação. A grafia “Salinha da XL” e seu uso na demonstração continuam sujeitos à decisão registrada pelo responsável humano.

## Design → Frontend

Entregar em `docs/05-design.md`: direção escolhida, mapa das seções, tokens propostos, tipografia, variações mobile/desktop, comportamento das CTAs, foco, teclado, contraste e movimento reduzido. Distinguir observação verificável de interpretação visual. Não descrever a direção proposta como identidade oficial aprovada.

FE-01 preserva a pequena melhoria inicial. FE-02, autorizado no pedido posterior, aplica as paletas à experiência completa e acrescenta Sobre mim e Aprovados. Usar apenas os registros públicos e a imagem da professora rastreados em `docs/10-fontes-conteudo.md`, conforme pedido de uso demonstrativo. Dois comentários reais substituem depoimentos fabricados; sugestões de coleta ficam separadas. Não copiar fotos de alunos nem alegar arquivo Figma criado.

## Backend → Frontend

**Nesta fase: nenhum endpoint, armazenamento de leads, login, checkout ou integração protegida.** O servidor local apenas serve arquivos estáticos para desenvolvimento.

Não criar formulários, botões ou mensagens que simulem envio, reserva, matrícula, diagnóstico, pagamento ou atendimento. Não adicionar segredos, banco, dependências ou serviço para a personalização visual.

### Contrato de CTA do protótipo

| Elemento | Destino ou estado | Aceite |
|---|---|---|
| CTA principal | “Conhecer as aulas” → `#servicos` | Seção existe; rótulo descreve navegação interna |
| CTA secundário | “Ver aprovados” → `aprovados.html` | Página existe e é navegável por teclado |
| Entrada de contato | `#contato` | Exibe link do perfil conhecido; formatos, horários e disponibilidade pendentes |
| Canal ainda não confirmado | Texto visível de contato pendente | Sem número inventado, link fictício ou aparência de envio disponível |
| Perfil Instagram fornecido | Referência e destino de navegação autorizado para a demo | Abrir perfil conhecido; não simular mensagem, matrícula ou atendimento |
| Formulário externo observado na bio | Destino não aberto nem validado | Não incorporar, enviar dados, declarar funcionamento ou substituir o contato pendente |

Os rótulos foram autorizados para a demonstração conforme `docs/08-decisoes.md` e `docs/10-fontes-conteudo.md`. Todos os links internos devem apontar a páginas ou IDs reais; não usar `href="#"`. Manter aviso de protótipo no topo e rótulos de conteúdo ilustrativo. Não exibir sucesso de operação inexistente.

### Contrato proporcional de uma integração futura

Antes de codificar uma integração aprovada, registrar: finalidade, dono operacional, alternativa considerada, custo, dados mínimos, destino, URL/método, validação, respostas, erros, autenticação, segredos, limites, retenção e testes. Para reservas ou transações, definir o que constitui confirmação e como tratar falhas ou repetição de solicitações.

Credenciais nunca devem aparecer no HTML, JavaScript distribuído ou repositório. Avaliar solução existente ou serviço gerenciado antes de assumir backend próprio. A referência pública a um serviço não autoriza sua contratação nem integração.

## Implementação → Observador

Entregar ticket, arquivos alterados, comparação antes/depois, comandos executados, resultados reais, evidências visuais, restrições e pendências. Antes de editar, preservar snapshot local suficiente para reconstruir a comparação. A pasta atual não é um repositório Git; não alegar diff de branch nem inicializar Git no escopo de FE-01.

Seguir AC-01 a AC-08 do PRD aplicáveis à área alterada e verificar regressão da navegação e do contato pendente. Registrar capturas em 360, 768 e 1440 px, teclado, foco, menu, títulos, contraste e zoom de 200%, incluindo limitações do método usado. Testes estruturais não substituem essas verificações.

Executar `npm test` conforme solicitado e registrar o resultado real. Se o ambiente impedir o comando, documentar o impedimento e qualquer alternativa executada sem equipará-la ao comando solicitado. Baseline reportado nesta fase: `npm` indisponível no PATH; `node --test scripts/check.test.mjs` aprovado em cinco testes, sem falhas. Isso não comprova testes da futura alteração, CI ou qualidade no navegador.

O rodapé não deve continuar afirmando que nenhuma informação da cliente foi usada se a adaptação incorporar o nome ou contexto informado. Capturas e handoff devem mostrar o alcance parcial da entrega; não declarar o site completo a partir de FE-01.

## Observador → Responsável humano

Consolidar progresso verificável, divergências entre documentos e código, riscos, bloqueios e decisões priorizadas. Não marcar proposta como aprovada nem afirmar execução de CI, publicação ou funcionalidade sem evidência.

Revisão do observador não substitui a decisão do dono do produto. Aprovação do protótipo não substitui autorização comercial da cliente. Publicação, push, PR e contratação de serviços continuam dependentes de autorização explícita.
