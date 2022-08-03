import InformaticaDAO from "../DAO/InformaticaDAO";

const informatica = {
    tipo_produto: "Celular",
    nome_produto: "Moto G 60",
    marca_produto: "Motorola",
    modelo_produto: "602C",
    valor_produto: "2000",
    qtdeEmEstoque_produto: "7"
};

try {
    const tabelaInformatica = await InformaticaDAO.criarTabelaInformatica()
    console.log(tabelaInformatica);
    
    const criadaInformatica = await InformaticaDAO.inserirProduto(informatica)
    console.log(criadaInformatica)
} catch (e) {
    console.log(e)
}; 