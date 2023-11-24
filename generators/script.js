// Generator são usados para criarem iterators
// Sao funcções especiais que podem ser pausadas e retormadas posteriormente,
// permitindo a criação de iterator de forma mais fácil

// Declaração de um função generator
function* createTeamIterator(teams) {
  for (let index = 0; index < teams.length; index++) {
    // Yeld retorna o valor e pausa a execução do método até que seja chamado novamente
    yield teams[index];
  }
}

const teams = ['Real Madrid', 'Barcelona', 'Man Utd', 'Milan'];
const iterator = createTeamIterator(teams);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// São iteráveis
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

// Pode-se usar o spread operator
console.log(...createTeamIterator(teams));

// E pode ser destruturado
const [first, second] = createTeamIterator(teams);
console.log(first, second);

// Também posso criar a estrutura de dados dentro do metodo diretamente e depois iterar sobre ele
function* teams2() {
  const teams = ['Real Madrid', 'Barcelona', 'Man Utd', 'Milan'];
  for (let index = 0; index < teams.length; index++) {
    // Yeld retorna o valor e pausa a execução do método até que seja chamado novamente
    yield teams[index];
  }
}

for (const team of teams2()) {
  console.log(team);
}
