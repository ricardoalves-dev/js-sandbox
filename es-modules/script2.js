function hello(name) {
  return `Hello ${name}!`;
}

function goodBye(name) {
  return `Goodbye ${name}!`;
}

// Caso haja mais de alguma coisa para ser exportada, exporta-se um obj diretamente
export { hello, goodBye };
