import { FindAllClientsController } from "../../infractucture/controllers/FindAllClientsController";
import { FindAllClientsCollectionFirebase } from "../../infractucture/persistences/FindAllClientsCollectionFirebase";

export class FindAllClientsService {
    constructor(private findAllClientsRepository:FindAllClientsCollectionFirebase){}

    async run() : Promise<any> {

        const users =  await this.findAllClientsRepository.handle()
        return {
            status: 200,
            message: "Clients fetched successfully",
            success: true,
            data: users
        }
    }
}