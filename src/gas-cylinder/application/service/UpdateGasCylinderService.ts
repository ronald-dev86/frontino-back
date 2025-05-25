
import { GasCylinderRefill } from "../../domain/model/GasCylinderRefill";
import { UpdateGasCylinderRepository } from "../../domain/repositories/UpdateGasCylinderRepository";
import { UpdateGasCylinderDto } from "../dto/UpdateGasCylinder.dto";

export class UpdateGasCylinderService {
    constructor(private updateGasCylinderRepository: UpdateGasCylinderRepository) {}

    async run(payload: UpdateGasCylinderDto, id: string): Promise<void> {
        const gasCylinder =  new GasCylinderRefill(
            id,
            payload.idGasCylinder,
            payload.idClient,
            payload.fillingPorcentage || 0,
            payload.fillingTime || new Date(),
            payload.urlVoucher || ''
        );
        await this.updateGasCylinderRepository.handle(gasCylinder, id);
    }
}