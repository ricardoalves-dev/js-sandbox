// São criados como abaixo:
const sym1 = Symbol();
const sym2 = Symbol('teste');
const sym3 = Symbol('teste2');
const sym4 = Symbol('teste2');

// Symbol é um dos tipos primitivos
console.log(typeof sym1);

// Symbol são únicos, mesmo se eu criar 2 symbols com o mesmo texto imbutido, eles serão diferentes:
console.log(sym2 === sym4);

// Geralmente são usados como identificador único de objetos:
const pessoa = {
  //id: 1, Em vez de fazer assim, se usa o symbol. Para colocar uma variável como key, deve usar os [] abaixo...
  [Symbol('id')]: 1,
  nome: 'João',
  email: 'joao@gmail.com',
};

// Não é possível mudar o id fazendo pessoa.id por exemplo
// Ao tentar fazer isso, vai ser criada uma nova propriedade chamada id...
pessoa.id = 5;
console.log(pessoa);

// Também não é possível mostrar o symbol da forma abaixo:
// Se tentar, recebo o valor undefined porque como dito, cada Symbol é único
console.log(pessoa['nome']);
console.log(pessoa[Symbol('id')]);

// Symbols não sao iteráveis nem enumeráveis o que significa que não aparecem caso seja feito um for
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

for (let key in pessoa) {
  console.log(key);
}

// O método abaixo permite ver um array contendo os symbols de um obj
console.log(Object.getOwnPropertySymbols(pessoa));

// Outro método de criar um Symbol é usando o Symbol.for()
// Diferente da primeira forma, 2 symbols distintos são criados, mesmo se eu passar uma mesma string
// Nessa forma, se eu passar 2 string iguais, primeiro é checado se existe algum symbol com essa string. Se sim, retorna o mesmo symbol, se não, cria um novo
const symTeste = Symbol.for('cristiano ronaldo');
const symTeste2 = Symbol.for('cristiano ronaldo');
console.log(symTeste === symTeste2);

// Symbols criados usando o .for() podem usar o método abaixo, retornando a string usada para criar o mesmo
console.log(Symbol.keyFor(symTeste));
// Se não foi criado com o .for(), é retornado undefined
console.log(Symbol.keyFor(sym1));
