export interface UpdateGasCylinderDto {
    idClient: string;
    idGasCylinder: string;
    fillingPorcentage?: number;
    fillingTime?: Date;
    urlVoucher?: string;
}