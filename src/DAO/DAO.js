import { DataBase } from "sqlite3";
import DataBase from "../infra/DataBase.js";

class DAO {
    static async ativaChavesEstrangeiras() {
        const query = 'PRAGMA foreign_keys = ON';

        DataBase.run(query, error => {
            if (error)
                console.log(error.message);
            else
                console.log('Chaves estrangeiras ativadas com sucesso.');
        });
    }

    static async createTable(query) { 
        return new Promise((resolve, reject) => {
            DataBase.run(query, (e) => {
                if(e) {
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso!")
                }
            })
        })
    }

    static async inserir(entidade, query) {
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {
            DataBase.run(query, [...body], (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Cadastrado com sucesso!"})
                }
            })
        })
    }

    static async listarTodos(query) {
        return new Promise((resolve, reject) => {
            DataBase.all(query, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async listarPorId(id, query) {
        return new Promise((resolve, reject) => {
            DataBase.get(query, id, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async atualizaPorId(entidade, id, query) {
        const body = Object.values(entidade)
        return new Promise((resolve, reject) => {
            DataBase.run(query,[...body, id], (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({Error: false, message: `Registro de id ${id} atualizado com sucesso`})
                }
            })
        })
    }

    static async deletaPorId(id, query) {
        return new Promise((resolve, reject) => {
            DataBase.run(query, id, (e) => {
                if (e){
                    reject(e.message)
                } else {
                    resolve({erro: false, message: `Registro com Id ${id} deletado com sucesso`})
                }
            })
        })
    }
}

export default DAO