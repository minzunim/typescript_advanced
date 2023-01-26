"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(capacity = 4) {
        this.capacity = capacity;
        this.storage = [];
    }
    push(item) {
        if (this.size() === this.capacity) {
            throw Error("stack is full");
        }
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.size() - 1];
    }
    size() {
        return this.storage.length;
    }
}
const numberStack = new Stack();
// numberStack.push(1);
// numberStack.push(2);
// numberStack.push(3);
// numberStack.push(100);
// console.log(numberStack.peek()); // 100
// console.log(numberStack.size()); // 4
// numberStack.push(101); // ❌ Error: stack is full
