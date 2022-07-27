import Database from "..infra/Database.js";

class LivrosDAO {
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON";

        Database.run(pragma, (e)=>{
            if(e){
                console.log(e);
            } else {
                console.log("Chaves estrangeiras estão ativas");
            }
        })
    };

    static crateTable(){
        this.activePragma();


        const query = `
        CREATE TABLE IF NOT EXISTS livros(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR,
            autor VARCHAR,
            genero VARCHAR,
            valor INT
        )`;

        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message);
                } else {
                    resolve("Tabela 'livros' criada com sucesso!");
                }
            })
        })
    };

    static async listarTodosOsLivros() {
        const query = `SELECT * FROM livros`;


        return new Promise((resolve,reject)=>{
            Database.all(query, (e, result)=> {
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result);
                }
            })
        })
    };

    static async listarLivroPorId(id) {
        const query = `SELECT * FROM livros WHERE id = ?`

        return new Promise((resolve, reject)=>{
            Database.get(query, id, (e, result)=>{
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result);
                }
            })
        })
    };

    static inserirLivro(livro){
        const query = `INSERT INTO livros (titulo, autor, genero, valor) VALUES (?, ?, ?, ?)`

        return new Promise((resolve, reject)=>{
            Database.run(query, ...Object.values(livro), (e)=>{
                if(e){
                    reject(e.message);
                } else {
                    resolve({error: false, message: "O livro foi catalogado"});
                }
            })
        })
    };

    static async atualizarClientePorId(body, id) {
        const query = `UPDATE livros SET (titulo, autor, genero, valor) = (?, ?, ?, ?) WHERE id = ?`;

        return  new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(body), id], (e) => {
                if(e){
                    reject(e.message);
                } else {
                    resolve(`O livro de id ${id} foi atualizado!`, {id, body});
                }
            })
        })
    };

    static async deletarLivro(id) {
        const query = `DELETE FROM livros WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result);
                }
            })
        })
    };
}

export default LivrosDAO