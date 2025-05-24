import { Reading } from "./Reading";

export class GasService{
    constructor(
        public medidorSerial: string,
        public readings: Reading[]
    ){}
}