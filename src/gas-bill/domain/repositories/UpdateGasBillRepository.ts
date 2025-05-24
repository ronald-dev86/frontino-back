import { GasBill } from "../model/GasBill";

export interface UpdateGasBillRepository {
    handle(payload: GasBill, id: string): Promise<void>
}   




