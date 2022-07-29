import MusicaModel from "../models/MusicaModel.js"
import MusicasDAO from "../DAO/MusicasDAO.js"
class Musicas {
    static rotas(app){
        app.get("/", (req,res)=>{
            res.send(`<h2>API Livraria</h2>
            <p>Acesse o repoistório <a href="https://github.com/juliapradob/projeto-modulo4%22%3Ehttps://github.com/juliapradob/projeto-modulo4</a> para mais informações</p>`)
        })

        app.get("/produto_musical", async (req,res)=>{
            try {
                res.status(200).json()
            } catch (error) {
                res.status(404).json(error.message)
            }
        })
        app.get("/produto_musical/:id", async (req,res)=>{
            try {
                res.status(200).json()
            } catch (error) {
                res.status(404).json(error.message)
            }
        })
        app.post("/produto_musical", async (req,res)=>{
            try {
                res.status(201).json()
            } catch (error) {
                res.status(400).json(error.message)
            }
        })
        app.put("/produto_musical/:id", async (req,res)=>{
            try {
                res.status(201).json()
            } catch (error) {
                res.status(400).json({error: "cliente não foi atualizado"})
            }
        })
        app.delete("/produto_musical/:id", async (req,res)=>{
            try {
                res.status(200).json()
            } catch (error) {
                res.status(404).json(error.message)
            }
        })
    }
}