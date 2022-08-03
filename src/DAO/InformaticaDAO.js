import DAO from "./DAO.js"

class InformaticaDAO extends DAO {
    static async criarTabelaInformatica() {
        const query = `
        CREATE TABLE IF NOT EXISTS informatica(
            id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo_produto VARCHAR,
            nome_produto VARCHAR,
            marca_produto VARCHAR,
            modelo_produto VARCHAR,
            valor_produto VARCHAR,
            qtdeEmEstoque_produto VARCHAR
            ) `
        const response = await this.createTable(query)
        return response
    };

    static async inserirProduto(produto) {
        const query = `INSERT INTO informatica
        (tipo_produto,
        nome_produto,
        marca_produto,
        modelo_produto,
        valor_produto,
        qtdeEmEstoque_produto)
        VALUES (?,?,?,?,?,?)`
        const response = await this.inserir(produto, query)
        return response
    };
        
    static async visualizarDatabaseCompleto(){
        const query = `SELECT * FROM informatica`
        const response = await this.listarTodos(query)
        return response
    };

    
    static async listarProdutoPorId(id) {
        const query = `SELECT * FROM informatica WHERE id = ?`;
        const response = await this.listarPorId(id, query)
        return response
    };

    static async atualizarProdutoPorId(id, body) {
        const query = `UPDATE informatica SET (nome, email, telefone, cpf) = (?, ?, ?, ?) WHERE id = ?`;
        const response = this.atualizaPorId(body, id, query)
        return response
    };

    static async deletarInformaticaPorId(id) {
        const query = `DELETE FROM informatica WHERE id = ?`;
        const response = this.deletaPorId(id, query)
        return response
    };
}

export default InformaticaDAO