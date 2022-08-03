import PapelariaDAO from "../DAO/PapelariaDAO.js";

const produto = {
    codigo: "478161",
    nome: "Papel Sulfite A4 Amarelo 100 folhas",
    marca: "Chamequinho",
    descricao: "Papel Sulfite Amarelo A4 75g 210mmx297mm Chamequinho 100 folhas",
    preco: "7.20"
};

try {
    const tabela = await PapelariaDAO.createTable()
    console.log(tabela);

    const criada = await PapelariaDAO.inserirProduto(produto)
    console.log(criada)
} catch (error) {
    console.log(error)
}; 