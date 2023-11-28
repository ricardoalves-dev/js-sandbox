const Queue = require('./Queue.js');
const queue = new Queue;

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.length());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());