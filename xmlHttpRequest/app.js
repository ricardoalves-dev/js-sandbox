// Maneira antiga de fazer requisições HTTP

// Instancia o objeto
const request = new XMLHttpRequest();

// No método open() é informado qual o verbo HTTP e qual URL da requisição (pode ser API ou caminho de arquivo)
request.open('GET', './movies.json');

// Necessário configurar a propriedade onreadystatechange para que a resposta seja tratada
// readyState tem 5 possíveis valores:
// 0: requisição não iniciada
// 1: conexão estabelecida com servidor
// 2: requisição recebida
// 3: processando requisição
// 4: requisição finalizada e resposta pronta
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    data.forEach((element) => {
      createListItem(element);
    });
  }
};

function createListItem(item) {
  const li = document.createElement('li');
  li.textContent = `Movie: ${item.title} - PT-BR-Title: ${item['pt-br-title']}`;
  document.querySelector('.list').appendChild(li);
}

// Para enviar a requisição, utiliza-se o método send()
request.send();
