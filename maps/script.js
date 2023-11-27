// Map funciona como uma estrutura de chave/valor, como o dictionary em Delphi
const people = new Map();

// Para adicionar um novo elemento usa-se o .set
people.set('000.000.000-00', 'Fulano');
people.set('111.111.111-11', 'Ciclano');
people.set('222.222.222-22', 'Beltrano');

// Como .get é possível obter um valor passando a chave
console.log(people.get('000.000.000-00'));
console.log(people.get('111.111.111-11'));

// É possível iterar pelas chaves e pelos valores
for (const person of people.values()) {
  console.log(person);
}

for (const person of people.keys()) {
  console.log(person);
}

// Para checar se uma chave existe usa-se o .has()
console.log(people.has('222.222.222-22'));
people.delete('222.222.222-22');
console.log(people.has('222.222.222-22'));
