import { Member } from "../model/Member";

export interface SaveMemberRepository {
    handle(payload: Member): Promise<void>;
}