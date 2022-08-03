import Database from "../infra/Database.js";



class CriarEntidade {

    static criarTabelaInformatica ()  {
        const arquivo = `      CREATE TABLE IF NOT EXISTS informatica(
            id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo_produto VARCHAR,
            nome_produto VARCHAR,
            marca_produto VARCHAR,
            modelo_produto VARCHAR,
            valor_produto VARCHAR,
            qtdeEmEstoque_produto VARCHAR
            ) `

        return new Promise ((resolve, reject )=> {
            Database.run (arquivo, (erro)=> {
                if (erro) { 
                    reject (erro.message)
                } else { resolve ("Tabela informática criada com sucesso")

                }
            })
        })
      
    }
} 
export default CriarEntidade 