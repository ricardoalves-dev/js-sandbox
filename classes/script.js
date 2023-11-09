// Palavra class seguida do nome da classe, em maiúsculo por convenção
class Pessoa {
  // Método construtor vem explicitamente declarado com a palavra constructor
  constructor(name, gender, birthdayDate) {
    this.name = name;
    this.gender = gender;
    this.birthdayDate = birthdayDate;
  }

  // Métodos de uma classe não precisam da declaração function
  getAge() {
    return Math.floor(
      (new Date() - this.birthdayDate) / (1000 * 60 * 60 * 24 * 365.25)
    );
  }

  // Métodos estáticos são declarados desta forma...
  static sampleStaticMethod() {
    console.log('This is a static method');
  }
}

const p = new Pessoa('Ricardo', 'M', new Date('12/15/1992'));
console.log(p.getAge());

const p2 = new Pessoa('Lucas', 'M', new Date('06/06/2022'));
console.log(p2.getAge());

// Chamada método estático
Pessoa.sampleStaticMethod();

// Exemplo de Herança, usa-se a palavra extends
class PessoaFisica extends Pessoa {
  constructor(name, gender, birthdayDate, CPF) {
    // chamada do construtor do pai, sempre sendo o primeiro comando no construtor do filho
    super(name, gender, birthdayDate);
    this.CPF = CPF;
  }
}

const pf = new PessoaFisica(
  'Cristiano Ronaldo',
  'M',
  new Date('12/15/1992'),
  '080.080.123-12'
);
console.log(pf.getAge());
