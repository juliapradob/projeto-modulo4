import InformaticaDAO from "../DAO/InformaticaDAO.js"
import InformaticaModel from "../models/InformaticaModel.js"
import ValidacoesInformatica from "../services/ValidacoesInformatica.js"

class Informatica {
    static rotas(app) {         
        
        app.get("/informatica", async (req, res) => {
            try {
                const resposta = await InformaticaDAO.visualizarDatabaseCompleto();
                if (resposta.length === 0) {
                    throw new Error("o database está vazio")
                }
                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });

        app.get("/informatica/:id", async (req, res) => {
            try {
                const produto = await InformaticaDAO.listarProdutoPorId(req.params.id)
                if (!produto){
                    throw new Error("Produto não encontrado para esse id")
                } 
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });

        app.post("/informatica", async (req, res) => {
            const produtoIsValid = ValidacoesInformatica.validaProduto(...Object.values(req.body))
            try {
                if (produtoIsValid) {
                    const produto = new InformaticaModel(...Object.values(req.body))
                    const response = await InformaticaDAO.inserirProduto(produto)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição com problema, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        });

        app.put("/informatica/:id", async (req, res) => {
            const produtoIsValid = ValidacoesInformatica.validaProduto(...Object.values(req.body))
            try {
                if (produtoIsValid) {
                    const produto = new InformaticaModel(...Object.values(req.body))
                    const response = await InformaticaDAO.atualizarProdutoPorId(req.params.id, produto)
                    res.status(201).json(response)
                }
            } catch (error) {
                res.status(400).json({error: "Produto não foi atualizado", erro: error})
            }
        });

        app.delete("/informatica/:id", async (req, res) => {
            try {
                const produto = await InformaticaDAO.deletarInformaticaPorId(req.params.id)
                if(!produto) {
                    throw new Error("Produto não encontrado para este id")
                }
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });
    }
}

export default Informatica