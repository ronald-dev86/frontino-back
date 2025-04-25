import { Client } from "../model/Client";

export interface SaveClientRepository {
    handle(client: Client): Promise<void>;
}