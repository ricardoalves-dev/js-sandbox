// Uso comum com callbacks

class App {
  constructor() {
    this.serverName = 'localhost';
  }

  getServerName() {
    console.log(this);
    alert(this.serverName);
  }
}

const app = new App();
// Neste caso apresenta o valor correto
app.getServerName();

// Neste caso apresenta undefined
// Como getServerName foi passado como callback, 'this' se refere ao botão e não a instância da classe
document.querySelector('button').addEventListener('click', app.getServerName);

// Para resolver, é necessário fazer o bind
// O bind vai indicar qual objeto deve ser retornado quando utilizada a palavra 'this' dentro do método
// Como passei a instância appComBind no método bind, ao usar a palavra 'this' dentro de getServerName quando ela é passada como callback, esse objeto é que será retornado
const appComBind = new App();
document
  .querySelector('.bindado')
  .addEventListener('click', appComBind.getServerName.bind(appComBind));
