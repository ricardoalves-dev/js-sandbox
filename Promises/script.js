// Promise é um objeto que representa um valor que pode ou não estar disponível em dado momento.
// Ela não bloqueia o fluxo do código
// Geralmente ela é criada passando-se alguma operação assíncrona no seu construtor como uma requisição HTTP

// Exemplo de criação de uma Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    error
      ? reject('Ocorreu um erro qualquer')
      : resolve('Tudo certo meu chapa!');
  }, 2000);
});

// Quando a promise for executada devemos:
//    usar then() para processar o que fazer em caso de sucesso
//    usar catch() para tratar erros que possam ter ocorrido
//    usar finally() para realizar algum processamento independente de sucesso ou erro
p.then((message) => console.log(message))
  .catch((errorMessage) => console.log(errorMessage))
  .finally(() => console.log('Executo independente de qualquer coisa'));

console.log('Olá do global scope!');
