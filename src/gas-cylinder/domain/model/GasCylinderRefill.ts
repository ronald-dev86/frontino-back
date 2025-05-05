export class GasCylinderRefill{
    constructor(
        public id: string, 
        public idDasCylinder: string, 
        public idClient: string,
        public fillingPorcentage: number,
        public fillingTime  : Date,
        public urlVoucher: string
    ){}
}