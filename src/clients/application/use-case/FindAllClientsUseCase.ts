import { FindAllClientsService } from "../services/FindAllClientsService";

export class FindAllClientsUseCase {
    constructor(private findAllClientsService: FindAllClientsService){}

    async execute() : Promise<any> {
        return await this.findAllClientsService.run();
    }
}