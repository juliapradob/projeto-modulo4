import ClienteModel from "../models/ClienteModel.js";
import ClientesDAO from "../DAO/ClientesDAO.js";
import ValidacoesCliente from "../services/ValidacoesCliente.js";


class Clientes {
    static rotas(app) { 
        app.get('/', (req, res)=>{
            res.send(`
            <h2>API Livraria</h2>
            <p>Acesse o repositório <a href="https://github.com/juliapradob/projeto-modulo4">https://github.com/juliapradob/projeto-modulo4</a> para mais informações</p>
            `)
        });

        app.get("/clientes", async (req, res) => {
            try {
                const clientes = await ClientesDAO.listarTodosClientes()
                if (clientes.length === 0) {
                    throw new Error("O database está vazio")
                }
                res.status(200).json({"result": clientes})
            } catch (e) {
                res.status(404).json(e.message)
            }
        });

        app.get("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesDAO.listarClientePorId(req.params.id)
                if (!cliente) { 
                    throw new Error("Usuário não encontrado para esse Id")
                }
                res.status(200).json(cliente)
            } catch (e) {
                res.status(404).json(e.message)
            }
        });

        app.post("/clientes", async (req, res) => {
            const clienteIsValid = ValidacoesCliente.clienteIsValid(...Object.values(req.body))
            try {
                if (clienteIsValid) {
                    const cliente = new ClienteModel(...Object.values(req.body))
                    const response = await ClientesDAO.inserirCliente(cliente)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch(e) {
                res.status(400).json(e.message)
            }            
        });

        app.put("/clientes/:id", async (req, res) => {
            const clienteIsValid = ValidacoesCliente.clienteIsValid(...Object.values(req.body))
            
            try {
                if (clienteIsValid) {
                    const cliente = new ClienteModel(...Object.values(req.body))
                    const response = await ClientesDAO.atualizarClientePorId(req.params.id, cliente)
                    res.status(201).json(response) 
                } else {
                    console.log("deu ruim")
                }
            } catch (e) {
                res.status(400).json({Error: "Cliente não foi atualizado"})
            }  
        });

        app.delete("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesDAO.deletarClientePorId(req.params.id)
                if (!cliente) { 
                    throw new Error("Cliente não encontrado para esse Id")
                }
                res.status(200).json(cliente)
            } catch (e) {
                res.status(404).json(e.message)
            }
        });
    };
};

export default Clientes