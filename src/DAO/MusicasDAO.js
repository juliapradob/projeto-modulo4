import DAO from "./DAO.js";
class MusicasDAO extends DAO {
    
    static async createTableMusicas(){
        const query = 
        `CREATE TABLE IF NOT EXISTS produtosMusicais(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo VARCHAR,
            gênero VARCHAR,
            artista VARCHAR,
            preço VARCHAR
        )`
        const response = await this.createTable(query)
        return response
    };

    static async inserirProdutoMusical(produto){
        const query = `INSERT INTO produtosMusicais (tipo, gênero, artista, preço) VALUES (?,?,?,?)`
        const response = await this.inserir(produto, query)
        return response
    };

    static async listarTodosProdutosMusicais() {
        const query = `SELECT * FROM produtosMusicais`;
        const response = await this.listarTodos(query)
        return response
    };

    static async listarProdutoMusicalPorId(id) {
        const query = `SELECT * FROM produtosMusicais WHERE id = ?`;
        const response = await this.listarPorId(id, query)
        return response
    };

    static async atualizarProdutoMusicalPorId(id, body) {
        const query = `UPDATE produtosMusicais SET (tipo, gênero, artista, preço) = (?, ?, ?, ?) WHERE id = ?`;
        const response = this.atualizaPorId(body, id, query)
        return response
    };

    static async deletarProdutoMusicalPorId(id) {
        const query = `DELETE FROM produtosMusicais WHERE id = ?`;
        const response = await this.deletaPorId(id, query)
        return response
    };
}

export default MusicasDAO