# Arquitetura — protótipo institucional de aulas de matemática

**Análise BE-01 em:** 16/10/2026. **Estado vigente:** parecer sem backend aprovado pelo humano em `docs/08-decisoes.md`. A ampliação local de Sobre mim, Aprovados e paletas está em `docs/10-fontes-conteudo.md`; continua compatível com arquivos estáticos.

## Decisão recomendada

**Nenhum backend de aplicação para o MVP.** HTML, CSS e JavaScript estáticos atendem à apresentação demonstrativa, à navegação e à indicação transparente do contato pendente.

Não há requisito confirmado que exija execução no servidor, persistência, autenticação, pagamento ou integração protegida. A percepção de poucas automações de controle é tema para o briefing, não autorização para construir um sistema de gestão.

O relato humano descreve matemática, reforço e vestibulares; o perfil público observado pelo orquestrador destaca ENEM e exibe “Salinha da XL | Matemática ENEM”. A prioridade entre as ofertas, a grafia para o site e a autorização de uso continuam pendentes. A existência de um formulário externo na bio, cujo destino não foi aberto nem validado, não altera a decisão técnica e não autoriza sua integração.

## Necessidade examinada

| Capacidade | Requisito nesta fase | Parecer |
|---|---|---|
| Execução de regra de negócio no servidor | Nenhum confirmado | Não implementar |
| Persistência de cadastros ou leads | Fora do MVP | Não coletar nem armazenar |
| Login ou área do aluno | Fora do MVP | Não implementar |
| Pagamento, matrícula ou reserva | Fora do MVP | Não simular nem implementar |
| Integração com segredo | Nenhuma confirmada | Não criar endpoint ou credencial |
| Apresentação e navegação interna | Demonstrativas, conforme PRD | Recursos estáticos suficientes |

## Camadas presentes e evidências

- `site/index.html`: home de matemática, Sobre mim com publicação datada, chamada para Aprovados, avisos de protótipo e contato pelo Instagram conhecido; sem formulário.
- `site/aprovados.html`: três registros públicos de aprovação, dois comentários reais com fontes e perguntas sugeridas para coletar novas histórias.
- `site/styles.css`: apresentação e regras responsivas; a existência das regras não comprova comportamento no navegador.
- `site/main.js`: menu progressivo, ano do rodapé e troca de paleta; `sessionStorage` guarda somente a preferência visual da sessão, com fallback, sem integração ou cadastro de alunos.
- `scripts/serve.mjs`: ferramenta local para servir arquivos, vinculada a `127.0.0.1:4173`; não é backend de aplicação nem infraestrutura de produção.
- `scripts/check.test.mjs`: testes estruturais invocados pelo script `test` de `package.json`. Esse é o caminho real, corrigindo a referência anterior a `scripts/check.mjs`.
- `.github/workflows/quality.yml`: definição de CI; nenhuma execução de CI foi comprovada.
- `package.json`: sem dependências declaradas; não é necessário instalar bibliotecas para a personalização proposta.

**Baseline informado pelo orquestrador nesta fase:** `npm test` não executou porque `npm` estava indisponível no PATH. A alternativa `node --test scripts/check.test.mjs` terminou com código 0, cinco testes aprovados e nenhuma falha. Isso não equivale a `npm test` aprovado e não comprova responsividade, acessibilidade ou revisão no navegador. A verificação exigida para FE-01 deve registrar os comandos e resultados reais da entrega.

## Trade-offs

| Aspecto | Efeito da escolha | Limite |
|---|---|---|
| Custo | Evita provisionar API, banco e autenticação sem requisito | Domínio, hospedagem e operação futura continuam indefinidos; não se promete custo zero |
| Manutenção | Concentra alterações no conteúdo e na interface | Enquanto não houver gestão aprovada, conteúdo é atualizado em arquivos |
| Segurança | Evita coletar dados e manter credenciais nesta demonstração | Arquivos, dependências futuras e hospedagem ainda exigirão cuidados proporcionais |
| Confiabilidade | Conteúdo não depende de uma API da aplicação para aparecer | Links externos futuros têm disponibilidade própria |
| Funcionalidade | Atende à apresentação institucional demonstrativa | Não registra leads, agenda, cobra ou administra alunos; a interface deve refletir esse limite |

## Fronteira de evolução após briefing

| Necessidade confirmada | Próxima avaliação antes de implementar |
|---|---|
| Contato por canal externo | Validar destino, responsável e autorização; pode continuar estático |
| Formulário real | Definir finalidade, campos mínimos, destinatário, retenção e estados; comparar serviço gerenciado com endpoint próprio |
| Agenda | Distinguir solicitação de reserva confirmada, definir disponibilidade e conflitos; avaliar solução existente |
| Gestão de alunos ou aulas | Mapear usuários, permissões, dados, rotina, responsáveis, importação, backup e operação em escopo separado |
| Pagamento | Confirmar fluxo e responsável, avaliar provedor, confirmação da transação e proteção de segredos |
| Gestão de conteúdo | Definir quem atualiza e com qual frequência; geração estática ou CMS podem ser suficientes |

Essas necessidades não implicam automaticamente backend próprio. Propor a solução proporcional após comparar alternativas, esclarecer manutenção e obter aprovação humana de escopo e eventuais custos. Se API própria for necessária, especificar o contrato em `docs/04-contratos.md` antes de codificar.

## Limites da próxima implementação

FE-01 foi preservado como etapa pequena inicial. O pedido posterior autorizou FE-02 com home completa, Sobre mim, página Aprovados e paletas completas. Isso não requer backend, banco, framework, dependência ou serviço externo. O servidor de desenvolvimento recebeu somente MIME para JPEG/PNG; continua local e estático. O bloqueio inicial de npm foi resolvido com ferramenta portátil oficial; testes finais reais em `docs/evidencias/frontend-fe02/npm-test.txt`.

Nenhum endpoint foi implementado por BE-01. Não publicar, contratar serviços, fazer push, abrir PR ou alterar infraestrutura nesta fase. A documentação técnica não aprova FE-01 nem conteúdo comercial em nome da cliente.
