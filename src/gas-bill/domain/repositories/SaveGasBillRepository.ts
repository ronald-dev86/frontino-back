import { GasBill } from "../model/GasBill";

export interface SaveGasBillRepository {
    handle(payload: GasBill): Promise<void>
}