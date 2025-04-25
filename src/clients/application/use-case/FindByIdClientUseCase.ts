import { FindByIdClientService } from "../services/FindByIdClientService";

export class FindByIdClientUseCase {
    constructor(private findByIdClientService: FindByIdClientService){}

    async execute(id: string) : Promise<any> {
        return await this.findByIdClientService.run(id);
    }
}