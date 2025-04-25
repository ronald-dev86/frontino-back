import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { Client } from "../../domain/model/Client";
import { SaveClientRepository } from "../../domain/repositories/SaveClientRepository";

export class SaveClientCollectionFirebase extends CollectionFirebase implements SaveClientRepository {

    constructor(){
        super("clients");
    }
    async handle(client: Client): Promise<void>{
        await this.collection.doc(client.id).set({...client});
    }
}