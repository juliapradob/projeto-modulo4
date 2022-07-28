import express from "express";
import * as dotenv from "dotenv";
import Papelaria from "./src/controllers/Papelaria.js";
import PapelariaDAO from "./src/DAO/PapelariaDAO.js"


dotenv.config()

const port = process.env.PORT || 3000 //acessa a variável de ambiente cujo nome é PORT
const app = express()

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

PapelariaDAO.createTable() 

app.use(express.json())

Papelaria.rotas(app)
