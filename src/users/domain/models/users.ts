import { Roles } from "../value-object/roles";

export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public rol: string,
        public active: boolean,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ){}
}