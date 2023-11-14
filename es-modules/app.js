// Pra importar usa-se como abaixo...
import helloWorld from './script.js';

// Para importar mais de um, faz-se o destructure como abaixo:
import { hello, goodBye } from './script2.js';

// Importação de classe...
import Person from './script3.js';

const person1 = new Person('Ricardo');

console.log(helloWorld());
console.log(hello('Ricardo'));
console.log(goodBye('Ricardo'));
console.log(person1.name);
