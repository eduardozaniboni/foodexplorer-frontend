# Food Explorer - Frontend

Este é um projeto desenvolvido como parte de um desafio de um curso, que consiste em criar um restaurante online chamado Food Explorer. A aplicação foi construída utilizando HTML, CSS, JavaScript, Node.js e React.js. Ela simula um restaurante fictício, permitindo que os usuários visualizem e interajam com um menu interativo.

## Descrição da Aplicação

O Food Explorer é uma aplicação completa de ponta a ponta, com front-end e back-end. Ela foi desenvolvida com o objetivo de simular um restaurante, seguindo o layout disponibilizado no Figma. O projeto inclui a versão web e mobile da aplicação.

Existem duas personas principais no Food Explorer: o admin e o usuário.

### Funcionalidades do Admin:

* O admin é responsável pelo restaurante e possui as seguintes funcionalidades:
  * Criar, visualizar, editar e apagar pratos a qualquer momento.
  * Cada prato deve conter uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o preço.
  * Ao adicionar um prato, o admin recebe uma mensagem de sucesso e é redirecionado para a página principal.

### Funcionalidades do Usuário:

* O usuário pode:
  * Visualizar todos os pratos cadastrados.
  * Ao clicar em um prato, será redirecionado para uma nova tela com informações mais detalhadas sobre o prato.

## Como executar o projeto

Siga as instruções abaixo para executar o projeto localmente:

1. Clone o repositório para sua máquina local:
```bash
  git clone <link do repositório>
```

2. Navegue até o diretório do projeto:
```bash
  cd food-explorer
```

3. Instale as dependências do front-end:
```bash
  cd frontend
  npm install
```

4. Instale as dependências do back-end
```bash
  cd backend
  npm install
```

5. Inicie o servidor do back-end:
```bash
  npm run dev
```  

6. Inicie o servidor front-end:
```bash 
  cd frontend
  npm run dev
```

7. Abra o navegador e acesso `http://localhost:${PORT}` para visualizar a aplicação.

## Deploy

A aplicação pode ser acessada online através dos seguintes links
* Front-end: [Frontend]()
* Back-end: [BackEnd]()

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte mandeira:

* `backend/` - Contém os arquivos relacionados ao back-end da aplicação.
* `frontend/` - Contém os arquivos relacionados ao front-end da aplicação.
* `README.md` - Documentação detalhada sobre o projeto.

## Critérios de Avaliação

O projeto será avaliado de acordo com os critérios abaixo:

### Obrigatórios:

* Atender a todas as especificações na Descrição da Aplicação.
* Um projeto estruturado, com uma boa organização das pastas, divisão de componentes no front-end, etc.
* Armazenamento dos dados do admin, do restaurante e dos usuários em um banco de dados.
* Autenticação dos usuários utilizando autenticação JWT.
* Nomes significativos para funções, variáveis, classes, arquivos, tabelas e todos os outros elementos do código.
* Possibilidade de busca por nome do prato e pelos ingredientes.
* Upload de imagens para cadastrar os pratos.
* Aplicação responsiva, seguindo o conceito Mobile First e o modelo do Figma.
* README detalhado com link do deploy, previews e instruções para execução do projeto.
* Utilização de animações e transições para melhorar a experiência da aplicação.
* Consumo da própria API pelo front-end.
* Deploy da aplicação (front-end e back-end).
* Atender ao modelo proposto no Figma e conter elementos indicativos de ação e estado.

### Opcionais:

* Adicionar novas funcionalidades ao projeto.
* Inclusão de itens no carrinho de compras, controle de quantidade e exibição do pedido.
* Exclusão de pratos do carrinho com atualização automática do valor total do pedido.
* Marcação de pratos como favoritos.
* Visualização e controle do status de cada pedido pelo admin.
* Opção de modo claro (light mode) além do dark mode.

## Recursos Adicionais

* [Link do Figma]() - Layout da Aplicação.

Sinta-se à vontade para explorar e expandir este projeto, adicionando novas funcionalidades e melhorias. Divirta-se desenvolvendo e aproveite a experiência do Food Explorer!