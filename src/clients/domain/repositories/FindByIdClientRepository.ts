import { Client } from "../model/Client";

export interface FindByIdClientRepository {
    handle(id: string): Promise<Client[]>;
}