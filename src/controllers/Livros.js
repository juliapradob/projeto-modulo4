import LivrosModel from "../models/LivrosModel.js";
import LivrosDAO from "../DAO/LivrosDAO.js";
import ValidacoesLivro from "../services/ValidacoesLivro.js";

class Livros {
    static rotas(app){
        app.get("/livros", async (req, res) => {
            try{
                const livros = await LivrosDAO.listarTodosOsLivros()
                if (!livros.length) {
                    throw new Error("Não há livros no database");
                }
                res.status(200).json({"total":`${livros.length} cadastrados`, "result": livros});
            } catch (error) {
                res.status(404).json(error.message);
            }
        });

        app.get("/livros/:id", async (req, res) => {
            try {
                const livro = await LivrosDAO.listarLivroPorId(req.params.id);
                if (!livro) {
                    throw new Error(`Livro de id ${req.params.id} não encontrado`);
                }
                res.status(200).json(livro);
            } catch (error) {
                res.status(404).json(error.message);
            }
        });

        app.post("/livros", async (req, res) => {
            const livroValido = ValidacoesLivro.livroValido(...Object.values(req.body));
            try {
                if(livroValido){
                    const livro = new LivrosModel(...Object.values(req.body));
                    const response = await LivrosDAO.inserirLivro(livro);
                    res.status(201).json(response);
                } else {
                    throw new Error("Livro não foi cadastrado, revise as informações.");
                }
            } catch (error) {
                res.status(400).json(error.message);
            }
        });

        app.put("/livros/:id", async (req, res) => {
            const livroValido = ValidacoesLivro.livroValido(...Object.values(req.body));

            try {
                if(livroValido) {
                    const livro = new LivrosModel(...Object.values(req.body));
                    const response = await LivrosDAO.atualizarLivroPorId(livro, req.params.id);
                    res.status(201).json(response);
                }
            } catch (error) {
                res.status(400).json({Error: "Erro na atualização do livro"});
            }
        })

        app.delete("/livros/:id", async (req, res)=>{
            try {
                const livro = await LivrosDAO.deletarLivro(req.params.id);
                if(!livro) {
                    throw new Error(`Livro de id ${req.params.id} não encontrado`);
                }
                res.status(200).json(livro);
            } catch (error) {
                res.status(404).json(error.message);
            }
        });

    };
};

export default Livros