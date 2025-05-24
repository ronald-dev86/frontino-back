export interface DeleteGasBillRepository {
    handle(id: string): Promise<void>;
}