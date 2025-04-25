import { Client } from "../../domain/model/Client";
import { SaveClientCollectionFirebase } from "../../infractucture/persistences/SaveClientCollectionFirebase";
import { CreateClientDto } from "../dto/CreateClientDto";
import { v4 as uuidv4 } from 'uuid';

export class SaveClientService {
    constructor(private saveClientRepository: SaveClientCollectionFirebase){}

    async run(client: CreateClientDto) : Promise<any> {
       const arrayGasCylinders = client.gasCylinders?.map(gasCylinder => ({
           ...gasCylinder,
           glMaxLts: Math.round(gasCylinder.glMax * 3.78541),
           id: uuidv4()
       }));
        const clientData = new Client(
            uuidv4(),
            client.name,
            client.agent,
            client.active,
            client.phone,
            client.type,
            client.idUser,
            client.membership,
            arrayGasCylinders 
        );
        await this.saveClientRepository.handle(clientData);
        return {
            status: 201,
            message: "Client saved successfully",
            success: true
        };
    }
}