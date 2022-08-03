import DAO from "./DAO.js"
class PapelariaDAO extends DAO {
    
    static async createTablePapelaria(){
        const query = `
        CREATE TABLE IF NOT EXISTS papelaria(
            codigo INTEGER PRIMARY KEY,
            nome VARCHAR,
            marca VARCHAR,
            descricao VARCHAR,
            preco VARCHAR
        )
        `
        const response = await this.createTable(query)
        return response
    };

    static async inserirProduto(produto){
        const query = `INSERT INTO papelaria (codigo, nome, marca, descricao, preco) VALUES (?,?,?,?,?)`
        const response = await this.inserir(produto, query)
        return response
    };

    static async listarTodosOsProdutos(){
        const query = `SELECT * FROM papelaria`
        const response = await this.listarTodos(query)
        return response
    }

    static async listarProdutoPorCodigo(codigo) {
        const query = `SELECT * FROM papelaria WHERE codigo = ?`;
        const response = await this.listarPorId(codigo, query)
        return response
    };

    static async atualizaProdutoPorCodigo(codigo) {
        const query = `UPDATE papelaria SET (nome, marca, descricao, preco) = (?, ?, ?, ?) WHERE codigo = ?`;
        const response = await this.atualizaPorId(codigo, query)
        return response
    };

    static async deletaProdutoPorCodigo(codigo) {
        const query = `DELETE FROM papelaria WHERE codigo = ?`;
        const response = await this.deletaPorId(codigo, query)
        return response
    };
}

export default PapelariaDAO