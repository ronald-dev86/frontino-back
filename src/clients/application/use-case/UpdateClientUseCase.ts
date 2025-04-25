import { UpdateClientDto } from "../dto/UpdateClientDto";
import { UpdateClientService } from "../services/UpdateClientService";

export class UpdateClientUseCase {
    constructor(private updateClientService: UpdateClientService){}

    async execute(id: string, client: UpdateClientDto) : Promise<any> {
        return await this.updateClientService.run(id, client);
    }
}