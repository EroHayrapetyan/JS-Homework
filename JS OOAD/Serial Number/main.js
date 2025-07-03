class SerialNumber{
    static count = 0;
    constructor(){
        ++SerialNumber.count;
        this.serialNumber = SerialNumber.count;
    }
    getserialNumber(){
        return this.serialNumber;
    }
}

let serial1 = new SerialNumber();
let serial2 = new SerialNumber();

console.log(serial1.getserialNumber()); 
console.log(serial2.getserialNumber());
