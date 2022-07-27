class Clientes {
    static rotas(app) { 
        app.get("/clientes", async (req, res) => {
            const response = await ClientesDAO.listarTodosClientes()
            res.status(200).json(response)
        });

        app.get("/clientes:id", async (req, res) => {
            try {
                const cliente = await ClientesDAO.listarClientePorId(req.params.id)
                if (!cliente) { // refatorar isso
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
                    const response = await ClientesDAO.atualizarPorId(cliente, req.params.id)
                    res.status(201).json(response) 
                }
            } catch (e) {
                res.status(400).json({Error: "Cliente não foi atualizado"})
            }  
        });

        app.delete("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesDAO.deletarClientePorId(req.params.id)
                if (!cliente) { // refatorar isso
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