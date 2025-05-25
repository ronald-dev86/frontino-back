import { DeleteGasBillService } from "../service/DeleteGasBillService";

export class DeleteGasBillUseCase {
    constructor(private deleteGasBillService: DeleteGasBillService) {}

    async execute(id: string): Promise<any> {
        return await this.deleteGasBillService.run(id);
    }
}