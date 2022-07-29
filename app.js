import express from "express";
import * as dotenv from "dotenv";
import Clientes from "./src/controllers/Clientes.js";
import ClientesDAO from "./src/DAO/ClientesDAO.js";
import Musicas from "./src/controllers/Musicas.js";
import MusicasDAO from "./src/DAO/MusicasDAO.js";

dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());

Clientes.rotas(app);
Musicas.rotas(app); 
