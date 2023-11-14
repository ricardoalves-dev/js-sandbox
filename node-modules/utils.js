const message = {
  id: 1,
  text: 'Hello World',
};

// A palavra chave para exportar algo é module.exports
// Abaixo temos um exemplo de como exportar uma variável
module.exports = message;

// Também poderia ser exportado diretamente como abaixo:
/*
module.exports = {
  id: 1,
  text: 'Hello World',
};
*/