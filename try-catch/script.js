try {
  x = pow2('s');
  console.log(x);
} catch (error) {
  console.log('Ocorreu um erro: ' + error);
}

function pow2(number) {
  if (isNaN(number)) {
    throw new Error(`${number} não é um número`);
  }

  return Math.pow(number, 2);
}
