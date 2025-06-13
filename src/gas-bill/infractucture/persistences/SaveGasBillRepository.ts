import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { GasBill } from "../../domain/model/GasBill";
import { SaveGasBillRepository } from "../../domain/repositories/SaveGasBillRepository";


export class SaveGasBillColletionFirebase extends CollectionFirebase implements SaveGasBillRepository {
    constructor() {
        super("gas-bills");
    }
    async handle(payload: GasBill): Promise<void>{
        await this.collection.add(payload);
    }
}