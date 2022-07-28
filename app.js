import express from "express";
import * as dotenv from "dotenv";

import Livros from "./src/controllers/Livros.js"
import LivrosDAO from "./src/DAO/LivrosDAO.js";



dotenv.config()

const port = process.env.PORT || 3000 //acessa a variável de ambiente cujo nome é PORT
const app = express()

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.use(express.json())

LivrosDAO.crateTable();
Livros.rotas(app);
