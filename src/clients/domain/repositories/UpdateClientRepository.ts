import { Client } from "../model/Client";

export interface UpdateClientRepository {
    handle(id: string, client: Client): Promise<void>;
}