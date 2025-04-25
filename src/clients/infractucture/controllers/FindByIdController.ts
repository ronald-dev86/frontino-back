import { Request, Response } from "express";
import { FindByIdClientService } from "../../application/services/FindByIdClientService";
import { FindByIdClientUseCase } from "../../application/use-case/FindByIdClientUseCase"
import { FindByIdClientCollectionFirebase } from "../persistences/FindByIdClientCollectionFirebase";

export class FindByIdClientController {

    findByIdClientUseCase: FindByIdClientUseCase
    constructor(){
        const findByIdClientRepository =  new FindByIdClientCollectionFirebase();
        const findByIdClientService = new FindByIdClientService(findByIdClientRepository);
        this.findByIdClientUseCase = new FindByIdClientUseCase(findByIdClientService);
        this.run = this.run.bind(this);
    }

    async run(req: Request, res: Response) : Promise<any> {
        try {
            const id = req.params.id as string;
            const done = await this.findByIdClientUseCase.execute(id);
            res.status(done.status).json(done);
        
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}