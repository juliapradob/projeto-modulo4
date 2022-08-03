import Database from "../infra/Database.js"


class InformaticaMetodos {
    static inserirProduto (produto) {
        const atividadeSQL = `INSERT INTO informatica
        (tipo_produto,
        nome_produto,
        marca_produto,
        modelo_produto,
        valor_produto,
        qtdeEmEstoque_produto)
        VALUES (?,?,?,?,?,?)`

        const body = Object.values(produto)
        return new Promise ((resolve, reject)=>{
            Database.run (atividadeSQL, ...body, (erro)=>{
                if (erro) {
                     reject ("Não foi possível cadastrar o produto")
                    }
                else {
                    resolve("Produto cadastrado com sucesso!")
                }
            })
        })
        }   
        
    static visualizarDatabaseCompleto(){
        const atividadeSQL = `SELECT * FROM informatica`
        return new Promise ((resolve, reject)=>{
            Database.all(atividadeSQL,(erro, resposta)=>{
                if (erro) { reject (erro.message)
                }
                else{
                    resolve (resposta)
                }
        })
        
    })
}
}
export default InformaticaMetodos