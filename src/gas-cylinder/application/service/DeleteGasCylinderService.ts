import { DeleteGasCylinderRepository } from "../../domain/repositories/DeleteGasCylinderRepository";

export class DeleteGasCylinderService {

    constructor(private deleteGasCylinderRepository: DeleteGasCylinderRepository) {}
    
    async run(id: string): Promise<void>{
        await this.deleteGasCylinderRepository.handle(id);
    }
}