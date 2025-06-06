import { Agent } from "../../domain/value-object/Agent"
import { GasCylinder } from "../../domain/value-object/GasCylinder"

export interface UpdateClientDto{
    id: string,
    name?: string,
    agent?: Agent,
    active?: string,
    phone?: boolean,
    type?:string,
    idUser: string,
    membership?: string,
    gasCylinders?: GasCylinder[],
}