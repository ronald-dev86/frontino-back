import { FindByTimeAndMemberService } from "../service/FindByTimeAndMemberService";

export class FindByTimeAndMemberUseCase{

    constructor(private findByTimeAndMemberService: FindByTimeAndMemberService) {}

    async execute(time: Date, idMember: string): Promise<any> {
        return await this.findByTimeAndMemberService.run(time, idMember);
    }
}