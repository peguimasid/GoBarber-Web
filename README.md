<h1 align="center">
  <img src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="200px" />
</h1>

<h3 align="center">
  :rocket: [Bootcamp GoStack#10] GoBarber Web
</h3>

<br>

<!-- <p align="center">
  <img alt="RocketShoes" src="./src/assets/rocketshoes.png" width="90%">
</p> -->

Nesse módulo faremos diferente, a cada aula eu explicarei o que fiz e deixarei o commit da das mudanças no final da aula, ai voce poderá olhar o que mudei e nao tera tanto código nas explicações.

Lembrando que a aplicaçāo Web é apenas para pestadores de servicos e a mobile para usuarios.

## Aula 01 - Estrutura básica

Criamos um projeto do zero deixando apenas um Hello World na tele assim como ensinei na [Aula 2 de React](https://github.com/peguimasid/React-Part-2), e configuramos tambem o ESLInt, Prettier e .editorconfig

## Aula 02 - Configurando Rotas

Vamos nessa aula criar as rotas da nossa aplicaçāo, teremos as rotas ***SignUp*** para cadastro de usuario, ***SignIn*** para login, ***Dashboard*** para mostrar os horarios ocupados e disponiveis do prestador de servicos, e ***Profile*** para alterar dados no perfil do prestador de servicos.

Para isso vamos instalar dois pacotes:

- `yarn add react-router-dom` <br>
- `yarn add history` <br>

Config de pastas:

-src

--***pages***
---***Dashboard***
----index.js
---***Profile***
----index.js
---***SignIn***
----index.js
---***SignUp***
----index.js

--***routes***
---index.js

--***services***
---history.js

### FIM - codigo: https://github.com/peguimasid/GoBarber-Web/commit/b0d9325c198b4f98e34d015184414e3420b9ff25


## Aula 03 - Configurando Reactotron

Vamos configurar o Reactotron na nossa aplicacao para os console.log aparecerem la.

Vamos precisar do pacote:`yarn add reactotron-react-js`

### FIM - código:
