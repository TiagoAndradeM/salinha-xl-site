# Backend — 19/10/2026

## O que usei e por quê

Minha decisão foi manter o site sem uma parte própria para processar dados no servidor. Não criei banco de dados, cadastro de alunos ou comunicação automática com outros sistemas. A apresentação funciona com arquivos de página, aparência e comportamento: HTML, CSS e JavaScript. Isso evita manutenção sem uma necessidade confirmada.

O servidor local em `scripts/serve.mjs` permite abrir os arquivos para trabalhar no computador. A hospedagem Cloudflare indicada no README disponibiliza o site pela internet. O servidor local não precisa ficar ligado para a hospedagem funcionar.

## Uma escolha pequena do site

O `sessionStorage` guarda no navegador, durante a sessão da aba, a escolha entre claro e escuro. Essa preferência acompanha a navegação entre as páginas. O código não a envia a um cadastro ou banco. Se o navegador impedir o armazenamento, a troca continua funcionando.

## O que conferi e o próximo passo

Nesta rodada li o código, a configuração e o registro anterior de sete testes aprovados. Não executei novos testes nem conferi a hospedagem novamente.

Reconsideraremos a decisão se forem aprovados cadastro, agendamento, pagamentos ou gestão de alunos. Primeiro precisamos entender a necessidade. Atualizar os relatórios e fazer protótipos não exige trocar as ferramentas do site.
