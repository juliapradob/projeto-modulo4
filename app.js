import express from "express";
import * as dotenv from "dotenv";
import Clientes from "./src/controllers/Clientes.js";
import ClientesDAO from "./src/DAO/ClientesDAO.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());

Clientes.rotas(app);