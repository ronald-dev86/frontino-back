import {  Request, Response } from 'express';
import { ResetPasswordUseCase } from '../../application/use-cases/ResetPasswordUseCase';
import { ResetPasswordService } from '../../application/services/ResetPasswordService';
import { FindUserByEmailColletionFirestore } from '../../../users/infrastructure/pesistences/FindUserByEmailColletionFirestore';
import { UpdateUserColletionFirebase } from '../../../users/infrastructure/pesistences/UpdateUserColletionFirebase';
import { KeyOperator } from '../../../shared/key-operator/KeyOperator';
import { FindByTokenAuthColletionFirebase } from '../persistences/FindByTokenAuthColletionFirebase';
import { ResetPasswordDTO } from '../../application/dto/ResetPassword.dto';

export class ResetPasswordController {
    private resetPasswordUseCase:ResetPasswordUseCase
    constructor() {
        const findByTokenAuthRepository =  new FindByTokenAuthColletionFirebase()
        const findByIdEmailRepository=  new FindUserByEmailColletionFirestore()
        const updateUserRepository = new UpdateUserColletionFirebase()
        const keyOperator = new KeyOperator()
        const resetPasswordService = new ResetPasswordService(
            findByTokenAuthRepository,
            findByIdEmailRepository,
            updateUserRepository,
            keyOperator
        )
        this.resetPasswordUseCase = new ResetPasswordUseCase(resetPasswordService)
        this.run = this.run.bind(this);
    }

    async run(req: Request, res: Response) {
        try {
            const payload  = req.body as ResetPasswordDTO
            const done = await this.resetPasswordUseCase.execute(payload)
            res.status(done.status).json(done)
        } catch (error) {
            
        }
    }
}