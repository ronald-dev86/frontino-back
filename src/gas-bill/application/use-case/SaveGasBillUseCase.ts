import { CreateGasBillDto } from "../dto/CreateGasBill.dto";
import { SaveGasBillService } from "../service/SaveGasBillService";


export class SaveGasBillUseCase {

    constructor(private saveGasBillService: SaveGasBillService) {}
    async execute(payload: CreateGasBillDto): Promise<any> {
        return await this.saveGasBillService.run(payload);
    }

}