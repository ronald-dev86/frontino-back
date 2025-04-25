import { Agent } from "../value-object/Agent";
import { GasCylinder } from "../value-object/GasCylinder";

export class Client {
    constructor(
        public id: string,
        public name: string,
        public agent: Agent,
        public active: string,
        public phone: boolean,
        public type:string,
        public idUser: string,
        public membership: string,
        public gasCylinders?: GasCylinder[],
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ) {}
}