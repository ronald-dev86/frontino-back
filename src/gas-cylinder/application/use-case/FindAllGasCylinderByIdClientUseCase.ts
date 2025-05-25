import { FindAllGasCylinderByIdClientService } from "../service/FindAllGasCylinderByIdClientService";

export class FindAllGasCylinderByIdClientUseCase {
    constructor(private findAllGasCylinderByIdClientService: FindAllGasCylinderByIdClientService) {}

    async execute(idClient: string): Promise<any> {
        return await this.findAllGasCylinderByIdClientService.run(idClient);
    }
}