class Stack {
  constructor() {
    this.items = [];
  }

  push(elements) {
    this.items.push(elements);
  }

  pop() {
    if (this.items.length == 0) return "underflow";
    return this.items.pop();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str = str + this.items[i] + "";
    return str;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack());

console.log(stack.pop());
console.log(stack.printStack());
