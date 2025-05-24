export interface findByIdMemberRepository {
    handle(id: string): Promise<any>;
}