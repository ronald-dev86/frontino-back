import { GasCylinderRefill } from "../model/GasCylinderRefill";


export interface UpdateGasCylinderRepository {
    handle(payload: GasCylinderRefill, id: string): Promise<void>
}