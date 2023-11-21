// Material de apoio: https://medium.com/trainingcenter/iterators-em-javascript-880adef14495

// Um objeto é um iterator quando ele consegue acessar um item por vez de uma coleção enquanto mantém a posição atual rastreada
// Um iterator é um objeto que oferece o método next(), o qual retorna o próximo item da sequência. Esse método retorna um obj com duas propriedaes: done e value

const app = {
  teams: ['Real Madrid', 'Barcelona', 'Man Utd', 'Milan'],
  nextIndex: 0,
  next: function () {
    return this.nextIndex < this.teams.length
      ? {
          value: this.teams[this.nextIndex++],
          done: false,
        }
      : { done: true };
  },
};

console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());

// No entanto, desta forma ele não é iterável...
//for (const team of app) {
//  console.log(team);
//}

// Para ser iterável, é necessário implementar o Symbol.iterator
const appI = {
  teams: ['Real Madrid', 'Barcelona', 'Man Utd', 'Milan'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? {
              value: this.teams[nextIndex++],
              done: false,
            }
          : { done: true };
      },
    };
  },
};

for (const team of appI) {
  console.log(team);
}
