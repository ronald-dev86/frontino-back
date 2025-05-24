export interface FindAllGasCylinderByIdClientRepository {
    execute(idClient: string): Promise<any>;
}