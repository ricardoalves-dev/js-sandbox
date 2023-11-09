class Person {
  constructor(firstName, lastName) {
    // A convenção indicava que isso se tratava de um "campo privado", apesar de não bloquear o seu acesso
    this._firstName = firstName;
    this._lastName = lastName;
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Usa-se a palavra get, seguido do nome. Na classe isso é um método
  get firstName() {
    return this.capitalize(this._firstName);
  }

  // Usa-se a palavra set, seguido do nome. Na classe isso é um método
  set firstName(value) {
    this._firstName = this.capitalize(value);
  }

  get lastName() {
    return this.capitalize(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalize(value);
  }
}

const p = new Person('ricardo', 'alves');
// Apesar de serem métodos na classe, ao utilizar se comportam como se fossem um atributo. Não preciso invocar eles como método passando o ()
console.log(p.firstName + ' ' + p.lastName);

p.firstName = 'ricardooooo';
p.lastName = 'alvesssss';
console.log(p.firstName + ' ' + p.lastName);
