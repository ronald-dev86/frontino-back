import { Request, Response } from "express";
import { UpdateClientDto } from "../../application/dto/UpdateClientDto";
import { UpdateClientUseCase } from "../../application/use-case/UpdateClientUseCase";
import { UpdateClientService } from "../../application/services/UpdateClientService";
import { UpdateClientCollectionFirebase } from "../persistences/UpdateClientCollectionFirebase";
import { FindByIdClientCollectionFirebase } from "../persistences/FindByIdClientCollectionFirebase";

export class UpdateClientController {
    updateClientUseCase: UpdateClientUseCase
    constructor(){
        const findbyIdClientRepository = new FindByIdClientCollectionFirebase()
        const updateClientRepository = new UpdateClientCollectionFirebase()
        const updateClientService = new UpdateClientService(findbyIdClientRepository,updateClientRepository)
        this.updateClientUseCase = new UpdateClientUseCase(updateClientService);

        this.run = this.run.bind(this);
    }

    async run(req: Request, res: Response) : Promise<any> {
        try {
            const payload = req.body as UpdateClientDto;
            const id = req.params.id as string;
            const done = await this.updateClientUseCase.execute(id, payload);
            res.status(done.status).json(done);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}