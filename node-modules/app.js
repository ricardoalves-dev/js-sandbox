// Modulos são arquivos js que podem ser importados/exportados em outros arquivos js
// É possível exportar/importar variaveis, classes e metodos
// É possível ainda importar packages de terceiros através do NPM

// Importando uma variavel
const message = require('./utils.js');

// Importando um metodo
const helloWorld = require('./utils2.js');

// Importando vários métodos
const {hello, goodbye} = require('./utils3.js');

// Importando uma classe
const Person = require('./utils4.js');
const personObj = new Person('Ricardo');

console.log(message);
console.log(helloWorld());
console.log(hello('Ricardo'));
console.log(goodbye('Ricardo'));
console.log(personObj.name);