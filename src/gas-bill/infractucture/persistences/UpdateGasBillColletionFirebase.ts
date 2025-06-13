import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase"
import { GasBill } from "../../domain/model/GasBill"
import { UpdateGasBillRepository } from "../../domain/repositories/UpdateGasBillRepository";


export class UpdateGasBillColletionFirebase extends CollectionFirebase implements UpdateGasBillRepository {
    constructor() {
        super("gas-bills")
    }
    async handle(payload: GasBill, id: string): Promise<void>{
        await this.collection.doc(id).update({...payload});
    }
}   




