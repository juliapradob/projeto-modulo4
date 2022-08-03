import InformaticaMetodos from "../DAO/informaticaMetodos.js"
import InformaticaModels from "../model/informaticaModels.js"

class InformaticaController {
    //Código para inserir produto no banco de dados
    static rotas (app) {
        
        app.post("/inserir", async (req, res)=> {

            const produto = new InformaticaModels (...Object.values(req.body))
            const resposta = await InformaticaMetodos.inserirProduto(produto)

            res.status(200).send(resposta)
        })

        app.get("/produtos", async (req, res)=>{

            const resposta = await InformaticaMetodos.visualizarDatabaseCompleto ();
            res.status(200).send(resposta)
        })

    }

}

export default InformaticaController