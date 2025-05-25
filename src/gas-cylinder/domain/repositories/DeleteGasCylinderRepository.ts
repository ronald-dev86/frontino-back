export interface DeleteGasCylinderRepository {
    handle(id: string): Promise<void>;
}