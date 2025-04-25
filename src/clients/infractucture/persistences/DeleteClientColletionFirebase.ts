import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { DeleteClienteRepository } from "../../domain/repositories/DeleteClientRepository";

export class DeleteClientColletionFirebase extends CollectionFirebase implements DeleteClienteRepository {

    constructor(){
        super("clients")
    }

    async handle(id: string): Promise<void> {
        try {
            await this.collection.doc(id).delete();
        } catch (error) {
            console.error("Error fetching documents: ", error);
            throw new Error("Error fetching documents from Firestore");
        }
    }
    
}