export class GasCylinderRefill{
    constructor(
        public id: string, 
        public idGasCylinder: string, 
        public idClient: string,
        public fillingPorcentage: number,
        public fillingTime  : Date,
        public urlVoucher: string
    ){}
}