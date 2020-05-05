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

### Aulas 01 - 07 : Ambiente inicial e conceitos
### Aulas 08 - 17 : Cadastro de autenticaçāo de usuários

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

-src<br>

--***pages***<br>
---***Dashboard***<br>
----index.js<br>
---***Profile***<br>
----index.js<br>
---***SignIn***<br>
----index.js<br>
---***SignUp***<br>
----index.js<br>

--***routes***<br>
---index.js<br>

--***services***<br>
---history.js<br>

### FIM - codigo: https://github.com/peguimasid/GoBarber-Web/commit/b0d9325c198b4f98e34d015184414e3420b9ff25


## Aula 03 - Configurando Reactotron

Vamos configurar o Reactotron na nossa aplicacao para os console.log aparecerem la.

Vamos precisar do pacote:`yarn add reactotron-react-js`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/1dd31c280853ca9acd058e47256b523a039933ad

## Aula 04 - Rotas Privadas

Vamos fazer com que usuarios que nao estejam autenticados nao consigam acessar determinadas rotas, e vamos criar rotas privadas, ou seja, que so quem esta autenticado consegue acessar.

Fizemos toda essa logica dentro do arquivo `Route.js` dentro da pasta `routes`

Fizemos uma autenticacao somente para testar, somente os usuarios que tem o signed como `true` conseguem acessar as rotas `Profile` e `Dashboard`, caso contrario elas sao redirecionadas para o login

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/5744de56feeff61fe4d90a398f5a96eae48c1d15

## Aula 05 - Layouts por página

Vamos criar layouts prontos para evitar a repeticao de CSS, entao teremos telas pra quem esta logado e tela pra que nao esta logado, dois tipos diferentes de tela.

Entao vamos ter duas: ***auth*** e ***default***, auth sera o tipo de tela so p quem esta autenticado e default é para todos, como fundo da tela, tipo de letra e etc

Vamos utilizar: `yarn add styled-components`

Agora se formos em `src > routes > Route.js` e mudarmos o valor de `signed` para `true` ou `false` o estilo ira mudar entre esses dois valores.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/043e9d2f245b892b0d367f5fe058d1c2b9b047f5

## Aula 06 - Estilos globais

Vamos definir estilos globais na aplicacao, ou seja, estilos que se aplicam a todos os componentes.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/4f64dca6420ed63215da595bf0d9956b57be5d76

## Aula 07 - Utilizando Root Import

Vamos configurar um carinha na nossa aplicaçāo que faz com que a gente nao tenha que ficar navegando entre os arquivos com `../../` pois é cansativo, ao inves disso, em qualquer arquivo que a gente estiver dentro da nossa aplicaçāo basta a gente usar assim: `~/pages/Main` que ele vai iniciar da pasta `src`.

Para isso vamos precisar: `yarn add customize-cra react-app-rewired babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D`

***Nāo esquece de mudar os script no package.json igual ta no commit***

Depois inicie novamente o servidor com `yarn start`

Arquivos novos na raiz:

 - `config-overrides.js`<br>
 - `jsconfig.json`<br>

 ### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/c978c53003980eac0b4f240d17fd64e85d4e1042
 ### Resolvendo bug que dara quando iniciar o servidor novamente: https://github.com/peguimasid/GoBarber-Web/commit/cd744f2bf474485f66f5eb95cef4f196c1c7c7ba (só tirar a virgula do lado de "~/*": ["*"])

 ## Aula 08 - Estilizaçāo da autenticaçāo

Vamos estilizar a pagina de ***Login*** e a pagina de ***Cadastro***

***Imagem:*** [logo.svg](https://skylab.rocketseat.com.br/api/files/1581704670044-attachment.svg)

Vamos precisar: `yarn add polished`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/b4d0bd3bff9525ff4562a43a4807ffd0ae8cb38f

## Aula 09 - Utilizando Unform

Por padrāo no react para pegarmos um valor de um input temos que monitorar alteracoes nele e armazenar o valor dessas alterações num estado, mas para facilitar, vamos usar uma biblioteca para formularios performaticos.

Vamos precisar: `yarn add @rocketseat/unform`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/c0c3f82c5b763577a43c7b892f1424b15cb6cc53

## Aula 10 - Validando dados do formulário

Vamos impedir que o usuario clique em login ou crie uma conta sem que tenha preenchido os campos do formulário:

Vamos precisar: `yarn add yup`

o nome que damos a validaçāo tem que ser o mesmo que demos no input `<input name="senha">`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/b98a3fd9bab6cc17d17a36b17676dcd95e78eeda


## Aula 11 - Configurando store (Redux)

Vamos configurar agora o ***Redux*** pois depois vamos configurar a autenticaçāo, e o nosso ***Token JWT*** deve ser acessivel por toda a aplicaçāo, ou seja, vamos utlizar o ***Redux*** para isso.

Vamos precisar: `yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer`

Novas pastas e arquivos:

-src<br>

--***store***<br>
---***modules***<br>
----***auth***<br>
-----actions.js<br>
-----reducer.js<br>
-----sagas.js<br>

----rootReducer.js<br>
----rootSaga.js<br>

---index.js<br>
---createStore.js<br>

Reactotron > State > ***+*** > 'auth' = mostra o valor de INITIAL_STATE

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/536eb3f46525b73d6df9e30eb27e9c5524ee0783

## Aula 11 - Autenticaçāo

Vamos fazer a autenticaçāo do usuario, usando a [api que contruimos no modulo de ReactJS](https://github.com/peguimasid/GoBarber-backend-pt2) e permitir que eles se loguem na aplicaçāo.

Vamos precisar: `yarn add axios`

Essa aula tem bastante código mas normalmente para autenticaçāo JWT é sempre a mesma coisa.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/fc67432237bfc2774060d7a03f93350df87454be

## Aula 12 - Armazenando perfil

Vamos armazenar os dados do usuario como ***email***, ***nome*** e para isso vamos criar um novo modulo/reducer dentro de `store > modules` chamado `user` para armazenarmos esses dados.

***Reactotron***: state > ***+*** > 'user' --> veremos os dados armazenados.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/c755996d87c873bfe5bd22b69531b838977491ee

## Aula 13 - Persisitindo autenticaçāo

Vamos persistir a autenticaçāo do usuario armazenando dados de autenticaçāo no storage do navegador para quando ele der F5 ou desligar o computador o login nao precisar ser feito novamente.

Vamos precisar: `yarn add redux-persist`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/c4eab69ad5924c7b09ef2f91c695e40b8ccd9fe3

## Aula 14 - Loading da autenticaçāo

Quando clicarmos em ***Acessar*** vai mudar o texto do botāo para ***Carregando...*** para mostrar que esta sendo feito

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/150517e6c403838e4bf171404e3323d05e07315e

## Aula 15 - Exibindo toasts

Quando o usuario errar a senha, usuario nao existir ou algum erro do tipo vamos exibir error com o toastify

Vamos precisar: `yarn add react-toastify`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/fb989080f569d3b56d23eab7b750550ed109135d

## Aula 16 - Cadastro na aplicaçāo

Vamos fazer o cadastro dos prestadores de servico na aplicacao.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/00e8f0613e44f150cb3a6bb9f5f16e51e6dd5efd

Esta escrito nao funcionando pois tem um erro no schema de validaçāo no ***signUp***
onde so tem que mudar de `nome` para `name`

## Aula 17 - Requisições autenticadas

Vamos enviar o token de autenticaçāo pelas requisições que fizermos a ***API*** para podermos fazer acesso as rotas que necessitam do token ***JWT***.

Se lembrarmos la no Backend definimos um ***middleware*** onde só quem tivesse o ***Bearer Token*** nos Headers poderia acessar a maioria das rotas da nossa aplicaçāo.

Quando fazemos o login ele automaticamente coloca o token la, o que fizemos nessa aula foi apenas persistir esse token mesmo se dermos F5 pegando ele da action `persist/REHYDRATE`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/b88aaca39c99e2cad247dee26209bafec6552149

## Aula 18 - Configurando Header

Vamos configurar o Header da nossa aplicaçāo(navbar).

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/d5abfd031d7a8ed5b31842a2572c96bfc2b13f36

## Aula 19 - Estilizando notificações

Vamos exibir as notificações de forma estatica para depois podermos usar a api e exibir de forma dinamica(aula 20).

Vamos precisar: `yarn add react-icons react-perfect-scrollbar`

O perfect scrollbar ajuda a fazer scrolls de listas muito grandes de forma muito facil.

configuraçāo dele:
`src > styles > global.js` <br>
`src > components > Notifictions > index.js` <br>
`src > components > Notifictions > styles.js` <br>

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/93ddd972e0359a52afa6be2beb43cb8994bc3105

## Aula 20 - Notificações

Vamos listar as notificações agora de acordo com a api.

Vamos precisar: `yarn add date-fns@next`

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/f10478b85e661b317cbd6bb16a751075a0ccc9ba

## Aula 21 - Página de perfil

Vamos estilizar a pagina de perfil(`profile`) para na proxima aula podermos implementar o metodo de atualizar com os novos dados que ele colocar la.

Ja pegamos os valores de nome e email do usuario e preeenchemos o input automaticamente usando o `useSelector` do react-redux e acessando o estado de profile.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/d0e2b11fb3639ac175e19b7b5037d122d66f65c4

## Aula 22 - Atualizando perfil

Vamos fazer com que quando o usuario mude o email ou nome, esses dados sejam editados no banco de dados.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/2ccf6431c4a4fe2b80423e4203fe041a22a05598

## Aula 23 - Foto de perfil

Vamos mostrar a foto de perfil e poder atualizar ela escolhendo uma nova dos arquivos do nosso computador.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/f9c6a2f71bf5ac254beb778402ed8eca45a7f088

## Aula 24 - Dados do Header

Vamos no Header da aplicaçāo colocar agora a foto de perfil e o nome de forma dinâmica.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/03af70aa2a9ee3731bdf054e20865be3743d7f73

## Aula 25 - Logout da aplicaçāo

Já temos o botao ***Sair do GoBarber*** mas agora vamos fazer ele funcionar, redirecionando a gente para a tela de login.

### FIM - código: https://github.com/peguimasid/GoBarber-Web/commit/d99249607a155bf9a1ceca6a6061a065cd514999
