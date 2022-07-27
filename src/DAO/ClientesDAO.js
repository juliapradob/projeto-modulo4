import Database from "../infra/Database.js";

class ClientesDAO {
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

        const query = `
        CREATE TABLE IF NOT EXISTS clientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )
        `
        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela CLIENTES criada com sucesso!")
                }
            })
        })
    };

    static inserirCliente(cliente){
        const query = `INSERT INTO clientes (nome, email, telefone) VALUES (?,?,?)`

        return new Promise((resolve, reject)=>{
            Database.run(query, ...Object.values(cliente), (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Cliente cadastrado com sucesso!"})
                }
            })
        })
    };

    static async listarTodosClientes() {
        const query = `SELECT * FROM clientes`;

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

    static async listarClientePorId(id) {
        const query = `SELECT * FROM clientes WHERE id = ?`;

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

    static async atualizarClientePorId(body, id) {
        const query = `UPDATE clientes SET (nome, email, telefone) = (?, ?, ?) WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(body), id], (e) => {
                if(e) {
                    console.log(e.message)
                    reject(e.message);
                } else {
                    resolve("Cliente atualizado com sucesso")
                }
            })
        })
    };

    static async deletarClientePorId(id) {
        const query = `DELETE FROM clientes WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, id, (e) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve("Cliente deletado com sucesso")
                }
            })
        })
    };
}

export default ClientesDAO