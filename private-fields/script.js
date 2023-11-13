class Wallet {
  // Atributos privados são criados fora do construtor e com # iniciando os mesmos
  // Realmente funcionam como private, não possibiltando acesso a qualquer coisa externa a classe
  #balance;
  #transactions;

  constructor() {
    this.#balance = 0;
    this.#transactions = [];
  }

  deposit(amount) {
    this.#balance += amount;
    this.#saveTransaction('deposit', amount);
  }

  withdraw(amount) {
    this.#balance -= amount;
    this.#saveTransaction('withdraw', amount);
  }

  // Para um método privado, seguimos o mesmo padrão...
  #saveTransaction(type, amount) {
    this.#transactions.push({
      type: type,
      amount: amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(150);
wallet.withdraw(50);

console.log(wallet.balance);
console.log(wallet.transactions);
