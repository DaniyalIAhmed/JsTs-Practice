"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
exports.printData = printData;
/**
 * Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (paren) {
        this.stack.push(paren);
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    return Stack;
}());
exports.Stack = Stack;
function printData(data) {
    return function () { return console.log(data); };
}
function validBraces(str) {
    var stack = new Stack();
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if ((char === '(') || (char === '{') || (char === '[')) {
            stack.push(char);
        }
        else if ((char === ')') || (char === '}') || (char === ']')) {
            var preChar = stack.peek();
            if (preChar && ((preChar === '(' && char === ")") || (preChar === '{' && char === "}") || (preChar === '[' && char === "]"))) {
                stack.pop();
            }
            else {
                return printData("Invalid string");
            }
        }
    }
    return printData("Valid Parenthesis");
}
validBraces("[({})](]")();
