import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";
import { Client } from "../../domain/model/Client";
import { FindAllClientsRepository } from "../../domain/repositories/FindAllClientsRepository";

export class FindAllClientsCollectionFirebase extends CollectionFirebase implements FindAllClientsRepository {
    constructor(){
        super("clients")
    }
    async handle(): Promise<Client[]>{
        const snapshot = await this.collection.get();
        const clients =  snapshot.docs.map((doc: any) => { 
            const clientData = new TimestampFormatFirestoreResponse(doc.data());
            return { id: doc.id, ...clientData.Item };  
        });
        return clients as Client[]
    }
}