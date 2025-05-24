export interface FindInIdsMembersRepository {
    handle(idsMembers: string[]): Promise<any>
}