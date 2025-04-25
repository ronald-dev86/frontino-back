import { Request, Response } from "express";
import { FindAllClientsService } from "../../application/services/FindAllClientsService";
import { FindAllClientsUseCase } from "../../application/use-case/FindAllClientsUseCase"
import { FindAllClientsCollectionFirebase } from "../persistences/FindAllClientsCollectionFirebase";

export class FindAllClientsController {
    FindAllClientsUseCase: FindAllClientsUseCase
    constructor(){
        const findAllClientsRepository = new FindAllClientsCollectionFirebase()
        const findAllClientsService = new FindAllClientsService(findAllClientsRepository);
        this.FindAllClientsUseCase = new FindAllClientsUseCase(findAllClientsService);
        this.run = this.run.bind(this);
    }

    async run(req: Request, res: Response) : Promise<any> {
       try {
            const done = await this.FindAllClientsUseCase.execute();
            res.status(done.status).json(done);
       } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
       }
    }
}