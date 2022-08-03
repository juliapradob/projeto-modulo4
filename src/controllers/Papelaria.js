import PapelariaModel from "../models/PapelariaModel.js";
import PapelariaDAO from "../DAO/PapelariaDAO.js";
import ValidacoesPapelaria from "../services/ValidacoesPapelaria.js";

class Papelaria {
    static rotas(app) { 
        
        app.get('/papelaria', async (req, res) => {
            try {
                const response = await PapelariaDAO.listarTodosOsProdutos()
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json(error.message)
            }
        });

        app.get('/papelaria/:codigo', async (req, res) => {
            try {
                const produto = await PapelariaDAO.listarProdutoPorCodigo(req.params.codigo)
                if (!produto) {
                    throw new Error(`Produto de código ${req.params.codigo} não foi encontrado!`);
                }
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });

        app.post("/papelaria", async (req, res) => {
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
                res.status(400).json({Error: "Produto não foi cadastrado, verifique se produto já existe!"})
            }            
        });

        app.put("/papelaria/:codigo", async (req, res) => {
            const produtoIsValid = ValidacoesPapelaria.isValid(...Object.values(req.body))
            try {
                if (produtoIsValid) {
                    const produto = new PapelariaModel(...Object.values(req.body))
                    const response = await PapelariaDAO.atualizaProdutoPorCodigo(req.params.codigo, produto)
                    res.status(200).json(response) 
                } else {
                    throw new Error("Revise o corpo da requisição")
                }
            } catch (error) {
                res.status(400).json({Error: "Produto não foi atualizado"})
            }  
        });

        app.delete("/papelaria/:codigo", async (req, res) => {
            try {
                const produto = await PapelariaDAO.deletaProdutoPorCodigo(req.params.codigo)
                if (!produto) { 
                    throw new Error("Produto não encontrado para este código")
                }
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });
    };
};

export default Papelaria