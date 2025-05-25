import { FindInIdsMembersService } from "../service/FindInIdsMembersService";

export class FindInIdsMembersUseCase {

    constructor(private findInIdsMembersService: FindInIdsMembersService) {}

    async execute(idsMembers: string[]): Promise<any> {
        return await this.findInIdsMembersService.run(idsMembers);
    }
    
}