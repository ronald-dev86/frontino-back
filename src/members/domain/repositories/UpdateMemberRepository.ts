import { Member } from "../model/Member";

export interface UpdateMemberRepository {
    handle(payload: Member, id: string): Promise<void>
}