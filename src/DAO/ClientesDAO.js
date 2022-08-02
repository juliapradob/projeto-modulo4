import DAO from "./DAO.js"

class ClientesDAO extends DAO {

    static async createTableUsuarios() {
        const query = `
        CREATE TABLE IF NOT EXISTS clientes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR,
            cpf VARCHAR
        )
        `
        const response = await this.createTable(query)
        return response
    };

    static async inserirCliente(cliente){
        const query = `INSERT INTO clientes (nome, email, telefone, cpf) VALUES (?,?,?,?)`
        const response = await this.inserir(cliente, query)
    };

    static async listarTodosClientes() {
        const query = `SELECT * FROM clientes`;
        const response = await this.listarTodos(query)
        return response
    };

    static async listarClientePorId(id) {
        const query = `SELECT * FROM clientes WHERE id = ?`;
        const response = await this.listarPorId(id, query)
        return response
    };

    static async atualizarClientePorId(body, id) {
        const query = `UPDATE clientes SET (nome, email, telefone, cpf) = (?, ?, ?, ?) WHERE id = ?`;
        const response = this.atualizaPorId(id, query)
        return response
    };

    static async deletarClientePorId(id) {
        const query = `DELETE FROM clientes WHERE id = ?`;
        const response = this.deletaPorId(id, query)
        return response
    };
}

export default ClientesDAO