import { DeleteClientColletionFirebase } from "../../infractucture/persistences/DeleteClientColletionFirebase";

export class DeleteClienteService {
    constructor(private deleteClientRepository: DeleteClientColletionFirebase){}

    async run(id: string) : Promise<any> {
        await this.deleteClientRepository.handle(id)
        return {
            status: 201,
            message: "Client deleted successfully",
            success: true
        };
    }
}