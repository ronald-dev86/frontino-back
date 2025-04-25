import { Request, Response } from "express";
import { CreateClientDto } from "../../application/dto/CreateClientDto";
import { SaveClientUseCase } from "../../application/use-case/SaveClientUseCase";
import { SaveUserService } from "../../../users/application/services/SaveUserService";
import { SaveClientService } from "../../application/services/SaveClientService";
import { SaveClientCollectionFirebase } from "../persistences/SaveClientCollectionFirebase";

export class SaveClientController {

    saveClientUseCase:SaveClientUseCase
    constructor(){
        const saveClientRepository = new SaveClientCollectionFirebase()
        const saveClientService =  new SaveClientService(saveClientRepository)
        this.saveClientUseCase = new SaveClientUseCase(saveClientService)

        this.run = this.run.bind(this)
    }

    async run(req:Request, res:Response) : Promise<any> {

        try {
            const payload = req.body as CreateClientDto
            console.log(payload)
            const done = await this.saveClientUseCase.execute(payload)
            res.status(done.status).json(done)

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    }
}