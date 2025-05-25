import { FindGasCylinderByIdAndTimeService } from "../service/FindGasCylinderByIdAndTimeService";

export class FindGasCylinderByIdAndTimeUseCase {
    constructor(private findGasCylinderByIdAndTimeService: FindGasCylinderByIdAndTimeService) {}

    async execute(id: string, time: string): Promise<any> {
        return await this.findGasCylinderByIdAndTimeService.run(id, time);
    }
}




