// Basicamente existem 2 tipos de modulos:
//    1 - CommonJS Modules (usado pelo node/back)
//    2 - Es Modules (usado pelo front)
// Os dois fazem o mesmo papel mas a importação/exportação são diferentes...

function helloWorld() {
  return 'Hello World';
}

// Diferente do CommonJS, não é preciso fazer module.exports = ....
// Usa-se a palavra export diretamente. Caso exista apenas uma coisa pra exportar, adiciona a palavra default
export default helloWorld;
