import Database from "../infra/DataBase.js";
class MusicasDAO {
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (e)=>{
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    };

    static createTable(){
        this.activePragma()

        const query = 
        `CREATE TABLE IF NOT EXISTS produtosMusicais(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo VARCHAR,
            gênero VARCHAR,
            artista VARCHAR,
            preço VARCHAR
        )`
        
        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela Produtos Musicais criada com sucesso!")
                }
            })
        })
    };
    static inserirProdutoMusical(produto){
        const query = `INSERT INTO produtosMusicais (tipo, gênero, artista, preço) VALUES (?,?,?,?)`

        return new Promise((resolve, reject)=>{
            Database.run(query, ...Object.values(produto), (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Produto cadastrado com sucesso!"})
                }
            })
        })
    };

    static async listarTodosProdutosMusicais() {
        const query = `SELECT * FROM produtosMusicais`;

        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result)
                }
            })
        })
    };

    static async listarProdutoMusicalPorId(id) {
        const query = `SELECT * FROM produtosMusicais WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result)
                }
            })
        })
    };
    static async atualizarProdutoMusicalPorId(body, id) {
        const query = `UPDATE produtosMusicais SET (tipo, gênero, artista, preço) = (?, ?, ?, ?) WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(body), id], (e) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve("Produto atualizado com sucesso", {id, body})
                }
            })
        })
    };

    static async deletarProdutoMusicalPorId(id) {
        const query = `DELETE FROM produtosMusicais WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result)
                }
            })
        })
    };
}

export default MusicasDAO