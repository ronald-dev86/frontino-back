export class GasBill {

    constructor(
        public id: string, 
        public idMember: string, 
        public time: Date,
        public quantity: number) {
       
    }
}