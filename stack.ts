export class Stack {
    num: number[] = [];

    constructor() {

    }
    add(num1: number) {
        return this.num.push(num1);
    }

    remove(): number {
        return this.num.pop();
    }

    nElement(): number {
        return this.num.length;
    }

    clear() {
        this.num.splice(0, this.num.length);
    }
    top(): number {
        let lastNumber: number = 0;
        for (let i = 0; i < this.num.length; i++) {
            lastNumber = this.num[i];
        }
        return lastNumber;
    }

    toString(): string {
        return `Elements of List: ${this.num} | Element on Top: ${this.top()} | Number of Elements: ${this.nElement()} `
    }

}