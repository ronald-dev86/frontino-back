export class RolesEnum {
    static ADMIN = 'admin'
    static USER = 'user'
    static GUEST = 'guest'
}
export class Roles {
    private roles = [RolesEnum.ADMIN, RolesEnum.USER, RolesEnum.GUEST]
    constructor(
        private  rol: string
    ){
        if(!this.isValidRol(rol)){
            throw new Error('Invalid rol')
        }
    }

    private isValidRol(rol:string): boolean {
        return this.roles.includes(rol.toString())   
    }

    get value(): string {
        return this.rol
    }
}