function getChampions(pathOrUrl) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', pathOrUrl);
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        this.status === 200
          ? resolve(JSON.parse(request.responseText))
          : reject('Alguma coisa deu errado');
      }
    };

    setTimeout(() => {
      request.send();
    }, 2000);
  });
}

const demaciaPromise = getChampions('./demacia.json');
const ioniaPromise = getChampions('./ionia.json');
const noxusPromise = getChampions('./noxus.json');

Promise.all([demaciaPromise, ioniaPromise, noxusPromise])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
