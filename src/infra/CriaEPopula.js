import ClientesDAO from "../DAO/ClientesDAO.js";
import LivrosDAO from "../DAO/LivrosDAO.js";
import MusicasDAO from "../DAO/MusicasDAO.js"
import PapelariaDAO from "../DAO/PapelariaDAO.js";
import InformaticaDAO from "../DAO/InformaticaDAO.js";

const cliente = {
    nome: "Heloísa Maria Matos",
    email: "heloisa@email.com",
    telefone: "11993456832",
    cpf: "42836438755"
};

const livro = {
    titulo:"Memórias postumas de Brás Cubas",
	autor:"Machado de Assis",
	genero:"Romance",
	valor:"12"
};

const produto = {
    tipo: "cd",
    gênero: "funk",
    artista: "Anitta",
    preço: "80"
};

const papelaria = {
    codigo: "478161",
    nome: "Papel Sulfite A4 Amarelo 100 folhas",
    marca: "Chamequinho",
    descricao: "Papel Sulfite Amarelo A4 75g 210mmx297mm Chamequinho 100 folhas",
    preco: "7.20"
};

const informatica = {
    tipo_produto: "Celular",
    nome_produto: "Moto G 60",
    marca_produto: "Motorola",
    modelo_produto: "602C",
    valor_produto: "2000",
    qtdeEmEstoque_produto: "7"
};

try {
    const tabelaClientes = await ClientesDAO.createTableUsuarios()
    const criadaClientes = await ClientesDAO.inserirCliente(cliente)

    const tabelaLivros = await LivrosDAO.createTableLivros();
    const criadaLivros = await LivrosDAO.inserirLivro(livro)

    const tabelaMusicas = await MusicasDAO.createTableMusicas()    
    const criadaMusicas = await MusicasDAO.inserirProdutoMusical(produto)

    const tabelaPapelaria = await PapelariaDAO.createTablePapelaria()    
    const criadaPapelaria = await PapelariaDAO.inserirProduto(papelaria)

    const tabelaMusicas = await MusicasDAO.createTableMusicas()
    const criadaMusicas = await MusicasDAO.inserirProdutoMusical(produto)

    const tabelaPapelaria = await PapelariaDAO.createTablePapelaria()
    const criadaPapelaria = await PapelariaDAO.inserirProduto(papelaria)

    const tabelaInformatica = await InformaticaDAO.criarTabelaInformatica()
    const criadaInformatica = await InformaticaDAO.inserirProduto(informatica)
} catch (e) {
    console.log(e)
}; 