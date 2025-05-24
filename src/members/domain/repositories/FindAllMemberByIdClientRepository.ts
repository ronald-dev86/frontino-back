export interface FindAllMemberByIdClientRepository {
    handle(idClient: string): Promise<any>;
}