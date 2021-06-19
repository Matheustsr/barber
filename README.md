## :page_with_curl: Sobre
Este repositório contém um API REST em Node.js como back-end, uma aplicação em ReactJS como front-end e um app mobile em React Native, todos utilizando TypeScript.

Essa é a aplicação GoBarber, que é uma plataforma de agendamento de serviços para proprietários de barbearias ou salões de beleza. Nessa aplicação o usuário consegue ter acesso a todos os prostadores de serviços cadastrados através de um aplicativo mobile, com isso usuário consegue escolher um prestador para marcar seu agendamento.

Já o prestador de serviço, através de um interface Web, consegue ter acesso a todos os seus horários, podendo ver todos os que estão ocupados quanto os que estão disponíveis.

**Node.js**: é uma API REST que faz todo o CRUD da aplicação, persistência de dados, tratativa de exceções e que serve dados tanto ao front-end quanto ao mobile.

**ReactJS**: é uma página Web no qual o prestador de serviço tem acesso a todo o seu calendário de agendamentos.

**React Native**: é um aplicativo em que o usuário tem acesso a todos os prestadores de serviço cadastrados no App, com isso ele pode fazer um agendamento que o prestador de preferência.

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Docker**](https://www.docker.com/) rodando um container PostgreSQL.
- Um dispositivo ou emulador iOS ou Android

## :rocket: Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/MatheusPires99/gobarber-2.0 gobarber

  # Entrar no diretório:
  $ cd gobarber
```

## :gear: Iniciando back-end
```bash
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Rodar as migrations:
  $ yarn typeorm migration:run

  # Rodar a aplicação:
  $ yarn dev:server
```

## :computer: Iniciando front-end
```bash
  # Entrar no diretório do front-end:
  $ cd frontend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn start
```

## :iphone: Iniciando mobile
```bash
  # Entrar no diretório do mobile:
  $ cd mobile

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn ios ou yarn android 
```

Feito com muito ☕ por Matheus V. 👋🏻 [Get in touch!](https://github.com/Matheustsr)
