// os comandos abaixo devem ser executados no terminal

// O node permite executar codigo JS fora do navegador, portanto ele não tem acesso ao objeto window nem document

// O init é responsável por iniciar um projeto node. Este comando cria automaticamente o arquivo package.json que é o arquivo que contém as dependências do projeto
// npm init

// O npm install instala a biblioteca de terceiros escolhida e adiciona a mesma no objeto dependencies do package.json
// Além disso, cria a pasta node_modules que contém todas os arquivos necessários para as dependencias funcionarem corretamente
// A pasta node_modules não deve ser versionada, logo deve estar presente em um gitignore. Ela é criada ao fazer o comando npm install quando alguém for executar o projeto
// npm install axios

// Após instalada, pode ser importada normalmente
const axios = require('axios');

async function getPost(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(res);
}

// Caso faça sentido que uma biblioteca seja instalada apenas em desenvolvimento, pode-se executar o comando npm install -D nomedabiblioteca
// Fazendo isso ela será instalada e adicionada automaticamente ao objeto dev dependecies do package.json
// Ex: npm install -D nodemon

// No package.json existe o objeto scripts. Qualquer script que não seja o start deve ser chamado assim: npm run nomedoscript Ex: npm run serve
// O start pode ser chamado fazendo npm start