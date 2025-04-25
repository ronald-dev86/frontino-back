import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { Client } from "../../domain/model/Client";
import { UpdateClientRepository } from "../../domain/repositories/UpdateClientRepository";

export class UpdateClientCollectionFirebase extends CollectionFirebase implements UpdateClientRepository{
    constructor(){
        super("clients")
    }
    async handle(id: string, client: Client): Promise<void>{
        await this.collection.doc(id).update({...client});
    }
}