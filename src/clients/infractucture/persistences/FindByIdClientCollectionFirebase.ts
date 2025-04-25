import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { FindByIdClientRepository } from "../../domain/repositories/FindByIdClientRepository";
import { Client } from "../../domain/model/Client";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";

export class FindByIdClientCollectionFirebase extends CollectionFirebase implements FindByIdClientRepository {
    constructor() {
        super('clients');
    }
    async handle(id: string): Promise<Client[]>{
        const snapshot = await this.collection.get(id);
        const clients =  snapshot.docs.map((doc: any) => { 
        const clientData = new TimestampFormatFirestoreResponse(doc.data());
            return { id: doc.id, ...clientData.Item };  
        });
        return clients as Client[]
    }
}