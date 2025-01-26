Olá por aqui que devem entregar o projeto integrador de vocês.
Projeto Integrador - Desenvolvimento de um Site de Vendas Utilizando React

Introdução
Vocês foram contratados para criar o front-end de um site de vendas moderno e dinâmico, utilizando as boas práticas de componentização, reutilização de código, gerenciamento de estados e roteamento no React. O objetivo é construir uma aplicação funcional e escalável que simule uma plataforma de e-commerce.

Requisitos do Projeto
Estrutura e Layout Geral

Crie um layout responsivo e amigável, utilizando componentes reutilizáveis.
O site deve conter pelo menos 3 páginas principais:
Página Inicial: Exibe uma vitrine com os produtos disponíveis.
Detalhes do Produto: Mostra informações detalhadas sobre um produto selecionado.
Carrinho de Compras: Exibe os produtos adicionados ao carrinho com a possibilidade de alterar quantidades e finalizar a compra.
Componentização e Reutilização de Código

Utilize componentes reutilizáveis para partes comuns do site, como:
Cabeçalho com navegação.
Rodapé com informações do site.
Cartões de produtos (exibidos na vitrine e no carrinho).
Botões personalizados (ex.: "Adicionar ao Carrinho", "Comprar Agora"). 
Gerenciamento de Estados

Gerencie os estados globais da aplicação utilizando:
React Context API ou Redux para compartilhar dados como:
Lista de produtos no carrinho.
Quantidade total de itens.
Preço total do carrinho.
Permita as seguintes ações:
Adicionar produtos ao carrinho.
Remover produtos do carrinho.
Alterar a quantidade de produtos no carrinho.
Roteamento

Implemente a navegação entre páginas usando o React Router:

Página Inicial (/): Mostra a lista de produtos disponíveis.
Detalhes do Produto (/produto/:id): Mostra informações detalhadas de um produto selecionado.
Carrinho (/carrinho): Lista os produtos adicionados ao carrinho com opções de gerenciamento.
Funcionalidades Básicas

Exibição de Produtos:
Utilize uma lista de produtos mockados (simulados) para exibição. Cada produto deve ter:
Nome.
Imagem.
Descrição curta.
Preço.
ID único.
Detalhes do Produto:
Ao clicar em um produto, o usuário deve ser redirecionado à página de detalhes, onde verá:
Nome, imagem grande, descrição completa e preço.
Botão para "Adicionar ao Carrinho".
Carrinho de Compras:
Exiba os produtos adicionados ao carrinho com:
Nome, quantidade, preço unitário e subtotal.
Botões para alterar a quantidade ou remover itens.
Calcule e exiba o valor total do carrinho. 
Estilização

Utilize CSS ou bibliotecas como Styled Components ou CSS Modules para estilizar a aplicação. Garanta que o design seja:
Responsivo: Funciona bem em dispositivos móveis e desktops.
Intuitivo: Fácil de usar e navegar.
Diferenciais
Filtros e Pesquisa: Implemente filtros para categorias ou uma barra de pesquisa para buscar produtos.
Persistência de Dados: Use o localStorage para salvar os itens do carrinho, mesmo após o recarregamento da página.
Animações: Adicione animações para transições de páginas ou interações do usuário (ex.: adicionar itens ao carrinho).
Critérios de Avaliação
Funcionalidade: O site atende aos requisitos básicos?
Boas Práticas de Código:
Uso correto de componentes reutilizáveis.
Organização e clareza no código.
Gerenciamento de Estado:
Estados bem definidos e usados corretamente.
Roteamento:
Navegação entre páginas sem erros.
Estilização e Design:
Layout atrativo e responsivo.
Inovação: Funcionalidades extras ou melhorias no design.
Entrega
Suba o projeto no GitHub e envie o link para a avaliação.
Documente no README:
Passos para rodar o projeto.
Funcionalidades implementadas.
Tecnologias utilizadas.
