import { CreateClientDto } from "../dto/CreateClientDto";
import { SaveClientService } from "../services/SaveClientService";

export class SaveClientUseCase {
    constructor(private saveClientService: SaveClientService){}

    async execute(client: CreateClientDto) : Promise<any> {
        return await this.saveClientService.run(client);
    }
}