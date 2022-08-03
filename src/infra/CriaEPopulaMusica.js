import MusicasDAO from "../DAO/MusicasDAO.js"

const produto={
    tipo: "cd",
    gênero: "funk",
    artista: "Anitta",
    preço: "80"
}
try {
    const tabela = await MusicasDAO.createTable()
    console.log(tabela);

    const criada = await MusicasDAO.inserirProdutoMusical(produto)
    console.log(criada)
} catch (e) {
    console.log(e)
};

