import ClientesDAO from "../DAO/ClientesDAO.js";

const cliente = {
    nome: "Heloísa Maria Matos",
    email: "heloisa@email.com",
    telefone: "11993456832",
    cpf: "42836438755"
};

try {
    const tabela = await ClientesDAO.createTable()
    console.log(tabela);

    const criada = await ClientesDAO.inserirCliente(cliente)
    console.log(criada)
} catch (e) {
    console.log(e)
}; 