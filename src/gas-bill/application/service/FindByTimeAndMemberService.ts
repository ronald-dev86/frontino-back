import { FindByTimeAndMemberRepository } from "../../domain/repositories/FindByTimeAndMemberRepository";

export class FindByTimeAndMemberService {
    constructor(private findByTimeAndMemberRepository: FindByTimeAndMemberRepository) {}
    async run(time: Date, idMember: string): Promise<any>{
        return await this.findByTimeAndMemberRepository.handle(time, idMember);
    }
}