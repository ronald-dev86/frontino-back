import { UpdateGasBillDto } from "../dto/UpdateGasBill.dto";
import { UpdateGasBillService } from "../service/UpdateGasBillService";

export class UpdateGasBillUseCase {
    constructor(private updateGasBillService: UpdateGasBillService) {}
    async execute(payload: UpdateGasBillDto, id: string): Promise<any> {
        return await this.updateGasBillService.run(payload, id);
    }
}   




