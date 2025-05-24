export interface FindGasCylinderByIdAndTimeRepository {
    handle(id: string, time: string): Promise<any>;
}




