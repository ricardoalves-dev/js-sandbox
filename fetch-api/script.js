// Maneira mais moderna de fazer requisições em JS
// fetch já retorna uma Promise

// Ao fazer o fetch, o primeiro .then trás um objeto do tipo Response
// Para acessar o data propriamente dito, é necessário fazer um return com
// o conteúdo desejado 

// Fazendo fetch de um arquivo json
fetch('./movies.json').then(response => {
  console.log(response);
  return response.json()}).then(data => console.log(data));

// Fazendo fetch de um arquivo txt
fetch('./test.txt').then(response => {
  console.log(response);
  return response.text()}).then(data => console.log(data));

// Fazendo fetch de uma URL
fetch('https://api.github.com/users/ricardoalves-dev').then(response => {
  console.log(response);
  return response.json()}).then(data => console.log(data));