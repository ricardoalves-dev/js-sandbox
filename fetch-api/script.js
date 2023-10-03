// Maneira mais moderna de fazer requisições em JS
// fetch já retorna uma Promise

// Ao fazer o fetch, o primeiro .then trás um objeto do tipo Response
// Para acessar o data propriamente dito, é necessário fazer um return com
// o conteúdo desejado

// Fazendo fetch de um arquivo json
fetch('./movies.json')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data));

// Fazendo fetch de um arquivo txt
fetch('./test.txt')
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => console.log(data));

// Fazendo fetch de uma URL
fetch('https://api.github.com/users/ricardoalves-dev')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data));

// Fazendo fetch de uma URL passando o método, header e o body
// após a URL é passado um objeto contendo o método, o body e o header
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Meu novo Post',
    body: 'Esse é o conteúdo do meu novo post.',
  }),
  headers: {
    'Content-Type': 'application/json',
    token: '123456ABCDEF',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// ********** LIDANDO COM ERROS ********** //

// Por padrão um catch no fetch detecta apenas erro de falha de conexão
fetch('https://httpstat.us/404')
  .then((response) => response)
  .then(() => console.log('Em caso de erro isso não devia executar'))
  .catch((error) => console.log(`Houve um erro na requisição: ${error}`));

// Para tratar erros numa requisição é necessário testar o retorno já no primeiro then (onde vem o objeto response)
// Por padrão um catch no fetch detecta apenas erro de falha de conexão
fetch('https://httpstat.us/404')
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  })
  .then(() => console.log('Em caso de erro isso não devia executar'))
  .catch((error) => console.log(`Houve um erro na requisição: ${error}`));
