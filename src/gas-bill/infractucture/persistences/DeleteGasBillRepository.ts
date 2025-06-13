import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { DeleteGasBillRepository } from "../../domain/repositories/DeleteGasBillRepository";

export class DeleteGasBillCollectionFirebase extends CollectionFirebase implements DeleteGasBillRepository {
    constructor() {
        super("gas-bills"); 
    }
    async handle(id: string): Promise<void>{
        await this.collection.doc(id).delete();
    }
}