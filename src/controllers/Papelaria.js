import PapelariaModel from "../models/PapelariaModel.js";
import PapelariaDAO from "../DAO/PapelariaDAO.js";
import Database from "../infra/Database.js";
import ValidacoesPapelaria from "../services/ValidacoesPapelaria.js";

class Papelaria {
    static rotas(app) { 
        
        app.get('/produtos', async (req, res) => {
            try {
                const response = await PapelariaDAO.listarTodosOsProdutos()
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.get('/produtos/:codigo', async (req, res) => {
            try {
                const response = await PapelariaDAO.listarProdutoPorCodigo(req.params.codigo)
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.post("/produtos", async (req, res) => {
            const produtoIsValid = ValidacoesPapelaria.isValid(...Object.values(req.body))
            try {
                if (produtoIsValid) {
                    const produto = new PapelariaModel(...Object.values(req.body))
                    const response = await PapelariaDAO.inserirProduto(produto)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição inválida, revise os itens do produto!")
                }
            } catch(error) {
                res.status(400).json(error.message)
            }            
        });

        app.put("/produtos/:codigo", async (req, res) => {
            const produtoIsValid = ValidacoesPapelaria.isValid(...Object.values(req.body))
            
            try {
                if (produtoIsValid) {
                    const produto = new PapelariaModel(...Object.values(req.body))
                    const response = await PapelariaDAO.atualizaProdutoPorCodigo(produto, req.params.codigo)
                    res.status(201).json(response) 
                }
            } catch (error) {
                res.status(400).json(error.message)
            }  
        });

        app.delete("/produtos/:codigo", async (req, res) => {
            try {
                const response = await PapelariaDAO.deletaProdutoPorCodigo(req.params.codigo)
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json(error.message)
            }
        })
    };
};

export default Papelaria