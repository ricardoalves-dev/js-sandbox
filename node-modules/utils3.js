function hello(name){
  return `Hello ${name}!`
}

function goodbye(name){
  return `Goodbye ${name}!`
}

// Exportando mais de um método
module.exports = {
  hello,
  goodbye,
}