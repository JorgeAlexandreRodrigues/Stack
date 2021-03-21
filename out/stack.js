"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.num = [];
    }
    Stack.prototype.add = function (num1) {
        return this.num.push(num1);
    };
    Stack.prototype.remove = function () {
        return this.num.pop();
    };
    Stack.prototype.nElement = function () {
        return this.num.length;
    };
    Stack.prototype.clear = function () {
        this.num.splice(0, this.num.length);
    };
    Stack.prototype.top = function () {
        var lastNumber = 0;
        for (var i = 0; i < this.num.length; i++) {
            lastNumber = this.num[i];
        }
        return lastNumber;
    };
    Stack.prototype.toString = function () {
        return "Elements of List: " + this.num + " | Element on Top: " + this.top() + " | Number of Elements: " + this.nElement() + " ";
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map