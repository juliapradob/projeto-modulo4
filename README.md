<h1 align="center"> API Livraria </h1>

## Sobre a API

A API REST com tema Livraria foi desenvolvida com Javascript, Node.JS e o framework Express, como projeto final para o módulo IV de back-end do curso de Densenvolvimento Web Full Stack da Resilia.

## Objetivo

Desenvolver uma API REST com 5 entidades organizadas no padrão MVC que devem efetuar todas as operações CRUD. 

## Tecnologias

- [X] Javascript(ES6)
- [X] Node.JS 16.x LTS
- [X] npm
- [X] Express
- [X] Nodemon
- [X] Dotenv
- [X] SQLite3
- [X] Path
- [X] URL
- [X] CORS
- [X] Jest
- [X] Insomnia/Postman 

## Inicializando

Primeiro, deve-se clonar este repositório a partir do terminal com o comando abaixo:

```
https://github.com/juliapradob/projeto-modulo4.git
```
Acessar a pasta da aplicação, caso não esteja nela

```
cd projeto-modulo4
```
Instalar as dependências necessárias e criar pasta node_modules

```
npm install
```

## Dependências
As depedências necessárias instaladas para este projeto foram a Express, Dotenv, SQLite3, Path, URL e CORS, que devem ser visualizadas no arquivo package.json.
 
 ```javascript
 "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "path": "^0.12.7",
    "sqlite3": "^5.0.10",
    "url": "^0.11.0"
  }
 ```
 
 ### Dependências de desenvolvimento
 
 As dependências instaladas para o ambiente de desenvolvimento foram Nodemon e Jest.
 
 ```javascript
 "devDependencies": {
    "jest": "^28.1.3",
    "nodemon": "^2.0.19"
  }
 ```
 
 ## Iniciar a aplicação
 
 Para iniciar a aplicação através do terminal, utilize o comando abaixo:
 
 ```
 npm start
 ```
 A seguinte mensagem aparecerá no terminal após a inicialização:
 
 ![image](https://user-images.githubusercontent.com/79461028/182654178-d3eaf28b-c071-49aa-8647-e074c375195f.png)
 
 ## Entidades
 
 No total são 5 entidades presentes nesta API onde todas já contém ao menos 1 item disponível em suas respectivas tabelas na Database criados através do arquivo `CriaEPopula.js`. 
 Caso a Database seja deletada, basta executar o arquivo de `CriaEPopula.js` com o seguinte comando no terminal:
 
 ```
 node ./src/infra/CriaEPopula.js
 ```
 Para acessar as rotas deve-se utilizar o método HTTP GET e a URL base fornecida, que é `http://localhost:port` na qual port é o número da porta fornecida na constante port, que por base nesta 
 aplicação é 3000, ou seja, a URL base é `http://localhost:3000`.
 
 ### Entidade Clientes
 
 A entidade clientes está disponível na rota **'/clientes'**, seguindo a URL base fornecida `http://localhost:3000/clientes`. O modelo JSON para 
 o corpo da requisição desta entidade segue abaixo:
 
 ```json
 {
     "id": 1,
     "nome": "Heloísa Maria Matos",
     "email": "heloisa@email.com",
     "telefone": "11993456832",
     "cpf": "42836438755"
 }
 ```
 
 ### Entidade Informática
 
 A entidade informática está disponível na rota **'/informatica'**, seguindo a URL base fornecida `http://localhost:3000/informatica`. O modelo JSON para 
 o corpo da requisição desta entidade segue abaixo:
 
 ```json
 {
    "id_produto": 1,
    "tipo_produto": "Celular",
    "nome_produto": "Moto G 60",
    "marca_produto": "Motorola",
    "modelo_produto": "602C",
    "valor_produto": "2000",
    "qtdeEmEstoque_produto": "7"
 }
 ```
 
 ### Entidade Livros
 
 A entidade livros está disponível na rota **'/livros'**, seguindo a URL base fornecida `http://localhost:3000/livros`. O modelo JSON para 
 o corpo da requisição desta entidade segue abaixo:
 
 ```json
 {
     "id": 1,
     "titulo": "Memórias postumas de Brás Cubas",
     "autor": "Machado de Assis",
     "genero": "Romance",
     "valor": 12
 }
 ```
 ### Entidade Música
 
 A entidade música está disponível na rota **'/musica'**, seguindo a URL base fornecida `http://localhost:3000/musica`. O modelo JSON para 
 o corpo da requisição desta entidade segue abaixo:
 
 ```json
 {
     "id": 1,
     "tipo": "cd",
     "gênero": "funk",
     "artista": "Anitta",
     "preço": "80"
 }
 ```
 
 ### Entidade Papelaria
 
 A entidade papelaria está disponível na rota **'/papelaria'**, seguindo a URL base fornecida `http://localhost:3000/papelaria`. O modelo JSON para 
 o corpo da requisição desta entidade segue abaixo:
 
 ```json
 {
     "codigo": 478161,
     "nome": "Papel Sulfite A4 Amarelo 100 folhas",
     "marca": "Chamequinho",
     "descricao": "Papel Sulfite Amarelo A4 75g 210mmx297mm Chamequinho 100 folhas",
     "preco": "7.20"
 }
 ```
 
 ## Rotas CRUD
 
A partir da URL base pode-se executar as operações CRUD(Create, Read, Update e Delete) com os métodos HTTP: POST, GET, PUT e DELETE. Abaixo exemplos das
operações com a entidade Livros.
 
 ### Método GET (Read)
 
 Para visualizar os registros faça uma requisição HTTP do tipo GET com a URL da entidade desejada.
 
 `http://localhost:3000/livros`
 
 O método deve retornar todos os registros da entidade no formato JSON, como representado no modelo de cada entidade.
 
 Para filtrar os registros a partir de um ID específico, basta adicionar o "/(número do id)" ao final da URL.
 
 `http://localhost:3000/livros/1`
 
 ### Método POST (Create)
 
 Para adicionar um novo registro faça uma requisição HTTP do tipo POST com a URL da entidade desejada.
 
 `http://localhost:3000/livros`
 
 ### Método PUT (Update)
 
 Para atualizar um registro faça uma requisição HTTP do tipo PUT com a URL da entidade desejada e o ID do registro. 
 
 `http://localhost:3000/livros/1`
 
 Nota-se que para o método PUT todo o corpo do registro deve ser utilizado, alterando apenas o campo que deseja atualizar.
 
 ### Método DELETE (Delete)
 
 Para deletar um registro faça uma requisição HTTP do tipo DELETE com a URL da entidade desejada e o ID do registro. 
 
 `http://localhost:3000/livros/1`
 
 
<i>Caso aconteça algum erro em alguma das requisições, uma mensagam de `ERRO` será exibida com o tipo de erro apresentado</i>.

Para derrubar o servidor e deixar o terminal livre novamente execute o comando `CTRL + C`, e caso seja necessário digite `S` para confirmar a operação.

![image](https://user-images.githubusercontent.com/79461028/182672924-fb76aac3-d477-45a3-b3c9-2e444e38bb75.png)

## Testes unitários

A partir do framework Jest utilizado como dependência de desenvolvimento nesta aplicação, testes unitários podem ser realizados para verificar as validações
criadas na pasta `services` quanto aos tipos (String, Number, Boolean...) que podem ser aceitos ao realizar requisições de criação e atualização de registros.
Os testes encontrados na pasta `test` podem ser executados no terminal com o seguinte comando:

```
npm run test
```
Caso todos os testes sejam bem-sucedidos, a seguinte mensagem deve aparecer no terminal:

![image](https://user-images.githubusercontent.com/79461028/182672313-5f535afa-9f99-4276-9575-18c797ddec0e.png)

### Autores

* **Camila Reis** - [cxavier6](https://github.com/cxavier6)
* **Gabriella Rodrigues** - [Gabriella-Rodrigues](https://github.com/Gabriella-Rodrigues)
* **Julia Prado** - [juliapradob](https://github.com/juliapradob)
* **Karina Silva** - [Kahrinita](https://github.com/Kahrinita)
* **Vitor Augusto** - [VitorAam](https://github.com/VitorAam)



 
