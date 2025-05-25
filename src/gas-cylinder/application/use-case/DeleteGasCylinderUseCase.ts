import { DeleteGasCylinderService } from "../service/DeleteGasCylinderService";

export class DeleteGasCylinderUseCase {
    constructor(private deleteGasCylinderService: DeleteGasCylinderService) {}
    async execute(id: string): Promise<any> {
        return await this.deleteGasCylinderService.run(id);
    }   
}