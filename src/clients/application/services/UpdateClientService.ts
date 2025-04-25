import { FindUserByIdColletionFirebase } from "../../../users/infrastructure/pesistences/FindUserByIdColletionFirebase";
import { Client } from "../../domain/model/Client";
import { FindByIdClientCollectionFirebase } from "../../infractucture/persistences/FindByIdClientCollectionFirebase";
import { UpdateClientCollectionFirebase } from "../../infractucture/persistences/UpdateClientCollectionFirebase";
import { UpdateClientDto } from "../dto/UpdateClientDto";

export class UpdateClientService {
    constructor(
        private FindUserByIdRepository: FindByIdClientCollectionFirebase,
        private updateClientRepository: UpdateClientCollectionFirebase
    ){}

    async run(id: string, client: UpdateClientDto) : Promise<any> {

        const clientFound = await this.FindUserByIdRepository.handle(id);
        if(clientFound.length === 0) return {
            status: 404,
            message: "User not found",
            success: true,
            data:[]
        }
        let clientUpdate: Partial<Client> = {};
        for (const key in clientFound[0]) {
            if (Object.prototype.hasOwnProperty.call(clientFound[0], key)) {
                if(client[key as keyof UpdateClientDto] === undefined) {
                    clientUpdate = {...clientUpdate, [key]: clientFound[0][key as keyof Client]};
                    continue
                };
                clientUpdate = {...clientUpdate, [key]: client[key as keyof UpdateClientDto]};
            }
        }
                
                const payload = new Client(
                    id,
                    clientUpdate.name || clientFound[0].name,
                    clientUpdate.agent || clientFound[0].agent,
                    clientUpdate.active || clientFound[0].active,
                    clientUpdate.phone || clientFound[0].phone,
                    clientUpdate.type || clientFound[0].type,
                    clientUpdate.idUser || clientFound[0].idUser,
                    clientUpdate.membership || clientFound[0].membership
                )
        await this.updateClientRepository.handle(id, payload);
        return {
            status: 201,
            message: "Client updated successfully",
            success: true
        }
    }
}