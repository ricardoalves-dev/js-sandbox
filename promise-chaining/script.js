// Criando a promise
// setTimeout apenas para simular um processo assíncrono...
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    error
      ? reject('Você não pode saber meu nome')
      : resolve('Meu nome é Ricardo Jose Alves');
  }, 2000);
});

// É possível linkar vários then entre si. São executados em sequência e é possível passar parâmetros entre eles usando o return
// Quando há um catch seguido de um then, esse then é executado tanto se a promise for bem sucedida ou não
p.then((name) => {
  console.log(name);
  const nameArray = name.split(' ');
  return nameArray[4];
})
  .then((middleName) => {
    console.log(`Meu nome do meio é ${middleName}`);
    return middleName;
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log('Esse then executa independente do erro ou não!');
  });
