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
    console.log(tabela);

    const criadaClientes = await ClientesDAO.inserirCliente(cliente)
    console.log(criada)

    const tabelaLivros = await LivrosDAO.createTableLivros();
    console.log(tabelaLivros)

    const criadaLivros = await LivrosDAO.inserirLivro(livro)
    console.log(criadaLivros)

    const tabelaMusicas = await MusicasDAO.createTableMusicas()
    console.log(tabelaMusicas);
    
    const criadaMusicas = await MusicasDAO.inserirProdutoMusical(produto)
    console.log(criadaMusicas)

    const tabelaPapelaria = await PapelariaDAO.createTablePapelaria()
    console.log(tabelaPapelaria);
    
    const criadaPapelaria = await PapelariaDAO.inserirProduto(papelaria)
    console.log(criadaPapelaria)

    const tabelaInformatica = await InformaticaDAO.criarTabelaInformatica()
    console.log(tabelaInformatica);
    
    const criadaInformatica = await InformaticaDAO.inserirProduto(informatica)
    console.log(criadaInformatica)
} catch (e) {
    console.log(e)
}; 