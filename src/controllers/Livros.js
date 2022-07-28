import { Database } from "../infra/Database.js";
import LivroModel from "../models/LivroModel.js";
import LivrosDAO from "../DAO/LivrosDAO.js";
import ValidacoesService from "../services/ValidacoesService.js";

class Livros {
    static rotas(app){
        app.get("/livros", (req, res) => {
            const response = DatabaseMetodos.listarTodosLivros()
            res.status(200).json(response)
        })
    

    app.get("/livros/:id", (req, res) => {
        if(filtraLivro){
            
        }
    })

    app.post("/livros", (req,res) => {
        const isValid = ValidacoesService.validaLivro(req.body.nome)
        if(isValid){
            const livro = new LivroModel((Object.value(req.body)))
            const response = DatabaseMetodos.inserirLivro(livro)
            res.status(201).json(response)
        } else {
            res.status(400).send('Erro')
        }
    })

    app.delete("/livros/:id", (req, res)=>{
        if(ValidacoesService.validaId(req.params.id, Database.Livros)){
            const livro = DatabaseMetodos.deletaLivroPorId(req.params.id)
            res.status(200).json(livro)
        } else {
            res.status(404).json({Error: "Livro não encontrado"})
        }
    })

}
}

export default Livros