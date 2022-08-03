import Database from "../infra/Database.js";

class PapelariaDAO {
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (error)=>{
            if(error){
                console.log(error)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    };

    static createTable(){
        this.activePragma()

        const query = `
        CREATE TABLE IF NOT EXISTS papelaria(
            codigo INTEGER PRIMARY KEY,
            nome VARCHAR,
            marca VARCHAR,
            descricao VARCHAR,
            preco VARCHAR
        )
        `
        return new Promise((resolve, reject)=>{
            Database.run(query, (error)=>{
                if(error){
                    reject(error.message)
                } else {
                    resolve("Tabela de papelaria criada com sucesso!")
                }
            })
        })
    };

    static inserirProduto(produto){
        const query = `INSERT INTO papelaria (codigo, nome, marca, descricao, preco) VALUES (?,?,?,?,?)`

        return new Promise((resolve, reject)=>{
            Database.run(query, ...Object.values(produto), (error)=>{
                if(error){
                    reject(error.message)
                } else {
                    resolve({Sucesso: "Produto cadastrado com sucesso!"})
                }
            })
        })
    };

    static listarTodosOsProdutos(){
        const query = `SELECT * FROM papelaria`
        return new Promise((resolve, reject) => {
            Database.all(query, (error, result) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async listarProdutoPorCodigo(codigo) {
        const query = `SELECT * FROM papelaria WHERE codigo = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, codigo, (error, result) => {
                if(error) {
                    reject(error.message);
                } else {
                    resolve(result)
                }
            })
        })
    };

    static async atualizaProdutoPorCodigo(body, codigo) {
        const query = `UPDATE papelaria SET (codigo, nome, marca, descricao, preco) = (?, ?, ?, ?,?) WHERE codigo = ?`;

        return new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(body), codigo], (error) => {
                if(error) {
                    reject(error.message);
                } else {
                    resolve(`Produto de código ${codigo} atualizado com sucesso`, {codigo, body})
                }
            })
        })
    };

    static async deletaProdutoPorCodigo(codigo) {
        const query = `DELETE FROM papelaria WHERE codigo = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, codigo, (error, result) => {
                if(error) {
                    reject(error.message);
                } else {
                    resolve({Sucesso: `Produto de codigo ${codigo} foi deletado com sucesso!`})
                }
            })
        })
    };
}

export default PapelariaDAO