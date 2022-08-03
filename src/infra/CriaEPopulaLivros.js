import LivrosDAO from "../DAO/LivrosDAO.js";

const livro = {
    titulo:"Memórias postumas de Brás Cubas",
	autor:"Machado de Assis",
	genero:"Romance",
	valor:"12"
};

try {
    const tabela = await LivrosDAO.crateTable();
    console.log(tabela)

    const criada = await LivrosDAO.inserirLivro(livro)
    console.log(criada)
} catch (error) {
    console.log(error)
};