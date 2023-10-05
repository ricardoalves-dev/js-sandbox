fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data));

// É uma alternativa ao .then
// Torna um processo assíncrono em síncrono
// Tem que usar a palavra async no método para sinalizar que deve ser executado como síncrono
// e usar a palavra await para que a compilação aguarde o resultado para prosseguir.
// É mais legível

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}

// Exemplo usando arrow function
const getPostsArrow = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
};

getPosts();
getPostsArrow();
