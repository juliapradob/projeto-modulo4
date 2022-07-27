import Database from "../infra/Database.js"
import ClienteModel from "../models/ClienteModel.js"
import ClientesDAO from "../DAO/ClientesDAO.js"

class Clientes {
    static rotas(app) { 
        app.get("/clientes", async (req, res) => {
            const response = await ClientesDAO.listarTodosClientes()
            res.status(200).json(response)
        })
    }
}
