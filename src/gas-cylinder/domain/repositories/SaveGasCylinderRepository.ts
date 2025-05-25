import { GasCylinderRefill } from "../model/GasCylinderRefill";


export interface SaveGasCylinderRepository {
    handle(payload:GasCylinderRefill ): Promise<void>
}