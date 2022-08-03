import InformaticaDAO from "../DAO/InformaticaDAO.js"
import InformaticaModel from "../models/InformaticaModel.js"

class Informatica {
    static rotas (app) {
        
        app.post("/inserir", async (req, res)=> {
            const produto = new InformaticaModel (...Object.values(req.body))
            const resposta = await InformaticaDAO.inserirProduto(produto)

            res.status(200).send(resposta)
        })

        app.get("/produtos", async (req, res)=>{
            const resposta = await InformaticaDAO.visualizarDatabaseCompleto();
            res.status(200).send(resposta)
        })
    }
}

export default Informatica