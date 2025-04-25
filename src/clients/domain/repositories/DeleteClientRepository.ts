export interface DeleteClienteRepository {
    handle(id: string): Promise<void>;
}