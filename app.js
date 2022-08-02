import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import Clientes from "./src/controllers/Clientes.js";
// import Musicas from "./src/controllers/Clientes.js";
// import Livros from "./src/controllers/Livros.js";
// import Informatica from "./src/controllers/Informatica.js";
// import Papelaria from "./src/controllers/Papelaria.js";

dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.use(express.json());
app.use(cors());

Clientes.rotas(app);
// Musicas.rotas(app);
// Livros.rotas(app);
// Informatica.rotas(app);
// Papelaria.rotas(app);