export interface DeleteGasCylinderRepository {
    delete(id: string): Promise<void>;
}