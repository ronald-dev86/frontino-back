import { SaveGasCylinderRepository } from "../../domain/repositories/SaveGasCylinderRepository";
import { CreateGasCylinderDto } from "../dto/CreateGasCylinder.dto";


export class SaveGasCylinderService {
    constructor(private saveGasCylinderRepository: SaveGasCylinderRepository) {}

    run(payload: CreateGasCylinderDto): Promise<void> {
        return this.saveGasCylinderRepository.handle({...payload, id: '', idGasCylinder: ''});
    }
}