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
