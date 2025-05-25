import { GasBill } from "../../domain/model/GasBill";
import { UpdateGasBillRepository } from "../../domain/repositories/UpdateGasBillRepository";
import { UpdateGasBillDto } from "../dto/UpdateGasBill.dto";


export class UpdateGasBillService {
    constructor(private updateGasBillRepository: UpdateGasBillRepository) {}

    async run(payload: UpdateGasBillDto, id: string): Promise<void> {
        const gasBill =  new GasBill(
            id,
            payload.idMember || '',
            payload.time || new Date(),
            payload.quantity || 0
        )
        return await this.updateGasBillRepository.handle(gasBill, id);
    }
}   




