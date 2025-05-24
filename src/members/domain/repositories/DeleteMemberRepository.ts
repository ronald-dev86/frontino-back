export  interface DeleteMemberRepository {
    handle(id: string): Promise<void>
}