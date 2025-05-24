export class Member{
    constructor(
        public id: string,
        public IdClient: string,
        public name: string,
        public lastname: string,
        public email: string,
        public phone: string,
        public address: string,
        public meterSerial: string,
        public active: boolean
    ){}
}