// Não é um tipo padrão do JS, mas é possível implementar algo parecido...
class Stack{
  #array;
  constructor(){
    this.clear();    
  }

  push(value){
    this.#array.push(value);
  }

  pop(){
    this.#array.pop();
  }

  peek(){
    return this.#array[this.#array.length - 1];
  }

  length(){
    return this.#array.length;
  }

  isEmpty(){
    return this.#array.length === 0;
  }

  clear(){
    this.#array = [];
  }
}

module.exports = Stack;