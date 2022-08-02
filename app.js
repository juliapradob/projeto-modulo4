import express from "express";
import CriarEntidade from "./src/DAO/criarEntidade.js";
import InformaticaController from "./src/controller/informaticaController.js";

const app = express ();
const porta = 3000

app.listen (porta, ()=>{ console.log (`Servidor rodando no endereço http://localhost:${porta}`) 
})
app.use(express.json())

CriarEntidade.criarTabelaInformatica ()
InformaticaController.rotas (app)