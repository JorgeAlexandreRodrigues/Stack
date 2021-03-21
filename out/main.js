"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var stack1 = new stack_1.Stack();
stack1.add(10);
stack1.add(20);
stack1.add(30);
stack1.add(40);
stack1.add(50);
console.log(stack1.toString());
console.log(stack1.remove());
console.log(stack1.toString());
//# sourceMappingURL=main.js.map