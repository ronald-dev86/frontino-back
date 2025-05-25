import { DeleteGasBillRepository } from "../../domain/repositories/DeleteGasBillRepository";

export class DeleteGasBillService {
    constructor(private deleteGasBillRepository: DeleteGasBillRepository) {}
    async run(id: string): Promise<any>{
        return await this.deleteGasBillRepository.handle(id);
    }
}