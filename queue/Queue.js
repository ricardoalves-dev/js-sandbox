
class Queue{
  #queue;
  #count;
  constructor(){
    this.clear();
  }

  enqueue(value){
    this.#queue[this.#count] = value;
    this.#count++;
  }

  dequeue(){

    if(this.isEmpty()){
      return undefined;
    }

    const element = this.#queue[0];

    for (let i = 0; i < this.#queue.length - 1; i++) {
      this.#queue[i] = this.#queue[i + 1];      
    }

    this.#count--;
    this.#queue.length = this.#count;

    return element;
  }

  peek(){
    return this.#queue[this.#count];
  }

  length(){
    return this.#count;
  }

  isEmpty(){
    return this.#count === 0;
  }

  clear(){
    this.#count = 0;
    this.#queue = [];
  }
}

module.exports = Queue;