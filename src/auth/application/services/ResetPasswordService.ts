import { KeyOperator } from "../../../shared/key-operator/KeyOperator";
import { User } from "../../../users/domain/models/users";
import { FindUserByIdColletionFirebase } from '../../../users/infrastructure/pesistences/FindUserByIdColletionFirebase';
import { UpdateUserColletionFirebase } from "../../../users/infrastructure/pesistences/UpdateUserColletionFirebase";
import { FindByTokenAuthColletionFirebase } from "../../infrastruture/persistences/FindByTokenAuthColletionFirebase";
import { ResetPasswordDTO } from "../dto/ResetPassword.dto";


export class ResetPasswordService {
    constructor(
        private findByTokenAuthRepository:FindByTokenAuthColletionFirebase,
        private findUserByIdRepository: FindUserByIdColletionFirebase,
        private UpdateUserRepository: UpdateUserColletionFirebase,
        private keyOperator: KeyOperator
    ) {}

    async run(payload:ResetPasswordDTO): Promise<any> {
        const { newPassword, oldPassword, token } = payload;
        const authPasswordUpdate = await this.findByTokenAuthRepository.handle(token)

        if(authPasswordUpdate.length == 0 ) return {
            success:false,
            message:"Token not found",
            status:404
        }
        const userPersistence = await this.findUserByIdRepository.handle(authPasswordUpdate[0].idUser)

        if(userPersistence.length === 0 ) if(authPasswordUpdate.length == 0 ) return {
            success:false,
            message:"user not found",
            status:404
        }
      
        const user = new User(
            userPersistence[0].id,
            userPersistence[0].name,
            userPersistence[0].email,
            await this.keyOperator.encrypt(newPassword),
            userPersistence[0].rol,
            userPersistence[0].active,
            userPersistence[0].createdAt,
            new Date()
        )
        
        await this.UpdateUserRepository.handle(userPersistence[0].id,user);

        return {
            success: true,
            status: 201
        }
    }
}