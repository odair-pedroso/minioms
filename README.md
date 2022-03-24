
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.














# minioms-api
Aplicação para cadastro de clientes a ser utilizada na disciplina de APIs Rest com Node Js e Typescript da Unifacef.


# A solução


![Minioms-api drawio](https://user-images.githubusercontent.com/64381101/159826994-0f09f8cf-d926-4dcc-9db4-a5a066ab4b51.png)



# Contratos da API de clientes:

GET/v1/customers
{ 
  "id":"string",
  "name":"string",
  "cpf":"string",
  "cnpj":"string",
  "email":"string",
  "phone":"string",
  "createdDate": "LocalDateTime",
  "lastModifiedDate": "LocalDateTime"
}

POST/v1/customers
{
  "name": "string",
  "cpf": "string",
  "cnpj": "string",
  "email": "string",
  "phone": "string"
}

GET/v1/customers/{id}
{
  "id":"string",
  "name":"string",
  "cpf":"string",
  "cnpj":"string",
  "email":"string",
  "phone":"string",
  "createdDate": "LocalDateTime",
  "lastModifiedDate": "LocalDateTime"
}

DELETE/v1/customers/{id}

# Tecnologias utilizadas
NodeJs 14
Typescript 4
MySQL 2
Sequelize 6
Swagger ( endpoints com filtros por ID apresentam problema no swagger ( pode ser versão do swagger para Nest ) , mas todos os endpoints estão funcionando  plenamente via POSTMAN ).
NestJs 8

# Para subir a app
Criar um banco de dados local MYSQL chamado customer, ou alterar o arquivo app.module.ts para o endereço MYSQL correto.
Para subir a app:
## Installation

```bash
$ npm install
```

# watch mode
$ npm run start:dev

# Após subir a app ela ficará disponível em : http://localhost:3000

# swagger disponível em :
http://localhost:3000/api/



