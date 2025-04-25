import { FindByIdClientCollectionFirebase } from "../../infractucture/persistences/FindByIdClientCollectionFirebase";

export class FindByIdClientService {
    constructor(private findByIdClientRepository:FindByIdClientCollectionFirebase){}

    async run(id: string) : Promise<any> {
        const client = await this.findByIdClientRepository.handle(id);
        if(client.length === 0) return {
            status: 404,
            message: "Client not found",
            success: false
        }
        
        return {
            status: 200,
            message: "Client fetched successfully",
            success: true,
            data: client
        }
    }
}