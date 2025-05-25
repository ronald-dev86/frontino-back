import { FindGasCylinderByIdAndTimeRepository } from "../use-case/FindGasCylinderByIdAndTimeUseCase";

export class FindGasCylinderByIdAndTimeService {
   constructor(private findGasCylinderByIdAndTimeRepository: FindGasCylinderByIdAndTimeRepository) {};
   run(id: string, time: string): Promise<any> {
       return this.findGasCylinderByIdAndTimeRepository.handle(id, time);
   }
}




