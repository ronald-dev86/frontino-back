import { FindInIdsMembersRepository } from "../../domain/repositories/FindInIdsMembersRepository";

export class FindInIdsMembersService {
   constructor(private findInIdsMembersRepository: FindInIdsMembersRepository) {}

    async run(idsMembers: string[]): Promise<any> {
        return await this.findInIdsMembersRepository.handle(idsMembers);
    }
}