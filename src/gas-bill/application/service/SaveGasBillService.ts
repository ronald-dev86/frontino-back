
import { GasBill } from "../../domain/model/GasBill";
import { CreateGasBillDto } from "../dto/CreateGasBill.dto";
import { SaveGasBillRepository } from "../../domain/repositories/SaveGasBillRepository";

export class  SaveGasBillService {
   constructor(private saveGasBillRepository: SaveGasBillRepository) {}

   async run(payload: CreateGasBillDto): Promise<void> {
      const gasBill = new GasBill("",payload.idMember, payload.time, payload.quantity);
      return await this.saveGasBillRepository.handle(gasBill);
   }
}