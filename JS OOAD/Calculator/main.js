class Calculator{
    set(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    add(){
        return this.num1 + this.num2;
    }
    sub(){
        return this.num1 - this.num2;
    }
    mul(){
        return this.num1 * this.num2;
    }
    div(){
        if(this.num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return this.num1 / this.num2;
    }
    modulo(){
        if(this.num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return this.num1 % this.num2;
    }
}

let calc = new Calculator();
calc.set(5, 3);
console.log(`Addition: ${calc.add()}`);
console.log(`Subtraction: ${calc.sub()}`);
console.log(`Multiplication: ${calc.mul()}`);
console.log(`Division: ${calc.div()}`);
console.log(`Modulo: ${calc.modulo()}`);