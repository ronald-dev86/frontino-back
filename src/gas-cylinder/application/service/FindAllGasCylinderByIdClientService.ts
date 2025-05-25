import { FindAllGasCylinderByIdClientRepository } from "../../domain/repositories/FindAllGasCylinderByIdClientRepository";

export class FindAllGasCylinderByIdClientService {
    constructor(private findAllGasCylinderByIdClientRepository: FindAllGasCylinderByIdClientRepository) {}

    async run(idClient: string): Promise<any> {
        return await this.findAllGasCylinderByIdClientRepository.handle(idClient);
    }
    
}