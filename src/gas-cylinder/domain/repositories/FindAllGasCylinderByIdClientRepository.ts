export interface FindAllGasCylinderByIdClientRepository {
    handle(idClient: string): Promise<any>;
}