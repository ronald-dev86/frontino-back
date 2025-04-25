import express from 'express';
import { AuthTokenMiddleware } from '../../../shared/middleware/AuthTokenMiddleware';
import { DeleteClienteController } from '../controllers/DeleteClienteController';
import { SaveClientController } from '../controllers/SaveClientController';
import { FindAllClientsController } from '../controllers/FindAllClientsController';
import { FindByIdClientController } from '../controllers/FindByIdController';
import { UpdateClientController } from '../controllers/UpdateClientController';
export class ClientRoute{
    path="/clients"
    public router = express.Router();

    saveClientController = new SaveClientController();
    findAllClientsController = new FindAllClientsController();
    finndByIdClientController = new FindByIdClientController();
    updateClientController = new UpdateClientController();
    deleteClientController = new DeleteClienteController();
    constructor(){
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.post(`${this.path}`, AuthTokenMiddleware, (req, res, next) => this.saveClientController.run(req, res));
        this.router.get(`${this.path}`, AuthTokenMiddleware, (req, res, next) => this.findAllClientsController.run(req, res));
        this.router.get(`${this.path}/:id`, AuthTokenMiddleware, (req, res, next) => this.finndByIdClientController.run(req, res));
        this.router.put(`${this.path}/:id`, AuthTokenMiddleware, (req, res, next) => this.updateClientController.run(req, res));  
        this.router.delete(`${this.path}/:id`, AuthTokenMiddleware, (req, res, next) => this.deleteClientController.run(req, res));
    }
}