import { CreateGasCylinderDto } from "../dto/CreateGasCylinder.dto";
import { SaveGasCylinderService } from "../service/SaveGasCylinderService";


export class SaveGasCylinderUseCase {
  constructor(private saveGasCylinderService: SaveGasCylinderService) {}
  async execute(payload: CreateGasCylinderDto): Promise<any> {
    return await this.saveGasCylinderService.run(payload);
  }
}