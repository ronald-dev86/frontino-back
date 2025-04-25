import { DeleteClienteService } from "../services/DeleteClienteService";

export class DeleteClienteUseCase {
    constructor(private deleteClienteService: DeleteClienteService){}

    async execute(id: string) : Promise<any> {
        return await this.deleteClienteService.run(id);
    }
}