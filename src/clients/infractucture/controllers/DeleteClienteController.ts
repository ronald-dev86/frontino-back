import { Request, Response } from "express";
import { DeleteClienteUseCase } from "../../application/use-case/DeleteClienteUseCase";
import { DeleteClienteService } from "../../application/services/DeleteClienteService";
import { DeleteClientColletionFirebase } from "../persistences/DeleteClientColletionFirebase";

export class DeleteClienteController {
    deleteClientUseCase:DeleteClienteUseCase
    constructor(){
        const deleteClientRepository = new DeleteClientColletionFirebase()
        const deleteClientService = new DeleteClienteService(deleteClientRepository);
        this.deleteClientUseCase = new DeleteClienteUseCase(deleteClientService);

        this.run = this.run.bind(this);
    }

    async run(req: Request, res: Response) : Promise<any> {
        try {
            const id = req.params.id as string;
            const done = await this.deleteClientUseCase.execute(id);
            res.status(done.status).json(done);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}