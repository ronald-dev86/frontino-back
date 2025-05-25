import { UpdateGasCylinderDto } from "../dto/UpdateGasCylinder.dto";
import { UpdateGasCylinderService } from "../service/UpdateGasCylinderService";


export class UpdateGasCylinderUseCase {
   constructor(private updateGasCylinderService: UpdateGasCylinderService) {}
   async execute(payload: UpdateGasCylinderDto, id: string): Promise<any> {
       return await this.updateGasCylinderService.run(payload, id);
   }
}