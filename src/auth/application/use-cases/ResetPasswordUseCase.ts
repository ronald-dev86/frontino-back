import { ResetPasswordDTO } from "../dto/ResetPassword.dto";
import { ResetPasswordService } from "../services/ResetPasswordService";

export class ResetPasswordUseCase {
    constructor(
        private resetPasswordService:ResetPasswordService
    ) {}
    async execute(payload:ResetPasswordDTO):Promise<any> {
        return await this.resetPasswordService.run(payload)
    }
}