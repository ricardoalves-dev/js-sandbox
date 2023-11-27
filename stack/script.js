const Stack = require('./Stack.js');
const stack = new Stack();

console.log(stack);
stack.push(5);
stack.push(7);
stack.push(21);
console.log(stack.peek());