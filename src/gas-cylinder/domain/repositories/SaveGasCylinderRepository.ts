import { GasCylinder } from "../../../clients/domain/value-object/GasCylinder";

export interface SaveGasCylinderRepository {
    handle(payload: GasCylinder): Promise<void>
}