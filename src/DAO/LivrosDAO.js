import DAO from "./DAO.js";

class LivrosDAO extends DAO {
    static async createTableLivros() {
        const query = `
        CREATE TABLE IF NOT EXISTS livros(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR,
            autor VARCHAR,
            genero VARCHAR,
            valor INT
        )`;
        const response = await this.createTable(query)
        return response
    };

    static async inserirLivro(livro){
        const query = `INSERT INTO livros (titulo, autor, genero, valor) VALUES (?, ?, ?, ?)`
        const response = await this.inserir(livro, query)
        return response
    };

    static async listarTodosOsLivros() {
        const query = `SELECT * FROM livros`;
        const response = await this.listarTodos(query)
        return response
    };

    static async listarLivroPorId(id) {
        const query = `SELECT * FROM livros WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response
    };

    static async atualizarLivroPorId(id, body) {
        const query = `UPDATE livros SET (titulo, autor, genero, valor) = (?, ?, ?, ?) WHERE id = ?`;
        const response = this.atualizaPorId(body, id, query)
        return response
    };

    static async deletarLivroPorId(id) {
        const query = `DELETE FROM livros WHERE id = ?`;
        const response = await this.deletaPorId(id, query)
        return response
    };
}

export default LivrosDAO