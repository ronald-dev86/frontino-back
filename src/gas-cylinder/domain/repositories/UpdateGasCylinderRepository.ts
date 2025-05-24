import { GasCylinder } from "../../../clients/domain/value-object/GasCylinder";

export interface UpdateGasCylinderRepository {
    handle(payload: GasCylinder, id: string): Promise<void>
}