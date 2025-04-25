import { Client } from "../model/Client";

export interface FindAllClientsRepository {
    handle(): Promise<Client[]>
}