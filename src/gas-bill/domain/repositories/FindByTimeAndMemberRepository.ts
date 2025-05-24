export interface FindByTimeAndMemberRepository {
    handle(time: Date, idMember: string): Promise<any>;
}