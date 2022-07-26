import express from "express";
import * as dotenv from "dotenv";
import Clientes from "./src/controllers/Clientes.js"
import Livros from "./src/controllers/Livros.js"
import Papelaria from "./src/controllers/Papelaria.js"
import Informatica from "./src/controllers/Informatica.js"
import Musica from "./src/controllers/Musica.js"

dotenv.config()

const port = process.env.PORT || 3000 //acessa a variável de ambiente cujo nome é PORT
const app = express()

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.use(express.json())

Clientes.rotas(app)
Livros.rotas(app)
Papelaria.rotas(app)
Informatica.rotas(app)
Musica.rotas(app)