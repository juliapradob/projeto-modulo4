import MusicaModel from "../models/MusicaModel.js"
import MusicasDAO from "../DAO/MusicasDAO.js"
import ValidacoesMusica from "../services/ValidacoesMusica.js"
class Musicas {
    static rotas(app){
        app.get("/musica", async (req, res) => {
            try {
                const produtos = await MusicasDAO.listarTodosProdutosMusicais()
                if (produtos.length === 0) {
                    throw new Error("o database está vazio")
                }
                res.status(200).json(produtos)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });

        app.get("/musica/:id", async (req, res) => {
            try {
                const produto = await MusicasDAO.listarProdutoMusicalPorId(req.params.id)
                if (!produto) {
                    throw new Error("produto não encontrado para esse id")
                }
                res.status(200).json(produto)
            } catch (error) {
                res.status(404).json(error.message)
            }
        });

        app.post("/musica", async (req, res) => {
            const produtoIsValid=ValidacoesMusica.validaProduto(...Object.values(req.body))
            try {
                if (produtoIsValid) {
                    const produto = new MusicaModel(...Object.values(req.body))
                    const response = await MusicasDAO.inserirProdutoMusical(produto)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição com problema, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        });

        app.put("/musica/:id", async (req , res) => {
            const produtoIsValid = ValidacoesMusica.validaProduto(...Object.values(req.body))
            try {
                if (produtoIsValid) {
                    const produto = new MusicaModel(...Object.values(req.body))
                    const response = await MusicasDAO.atualizarProdutoMusicalPorId(produto, req.params.id)
                    res.status(201).json(response)
                }
            } catch (error) {
                res.status(400).json({error: "Produto não foi atualizado"})
            }
        });

        app.delete("/musica/:id", async (req, res) => {
            try {
                const produto = await MusicasDAO.deletarProdutoMusicalPorId(req.params.id)
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
export default Musicas