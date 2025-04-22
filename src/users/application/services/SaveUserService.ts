import { Key } from "readline";
import { User } from "../../domain/models/users";
import { Roles } from "../../domain/value-object/roles";
import { SaveUserCollectionFirestore } from "../../infrastructure/pesistences/SaveUserColletionFirestore";
import { CreateUserDTO } from "../dto/createUser.dto";
import { v4 as uuidv4 } from 'uuid';
import { KeyOperator } from "../../../shared/key-operator/KeyOperator";
import { stat } from "fs";
import { FindUserByEmailColletionFirestore } from "../../infrastructure/pesistences/FindUserByEmailColletionFirestore";


export class SaveUserService {
    constructor(
        private saveUserRepository: SaveUserCollectionFirestore,
        private findByEmailRepository: FindUserByEmailColletionFirestore,
        private keyOperator: KeyOperator
    ) {}
    
    async createUsers(payload: CreateUserDTO): Promise<any> {
        const userExist = await this.findByEmailRepository.handle(payload.email);
        console.log(userExist.length)

        if (userExist.length > 0)  return {
            success: false,
            message: 'User already exists',
            status: 400,
        }
        
        const user = new User(
            uuidv4(),
            payload.name,
            payload.email,
            await this.keyOperator.encrypt(payload.password),
            new Roles(payload.rol).value,
            payload.active,
            new Date(),
            new Date()
        );
        await this.saveUserRepository.handle(user);
        return {
            success: true,
            message: 'User created successfully',
            status: 201,
        }
       
    }
}