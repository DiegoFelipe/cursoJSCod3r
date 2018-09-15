class Pessoa {
  constructor(nome) {
    this.nome = nome // o this faz nome ser public
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`) // não precisa usar this
  }
}

const p2 = new criarPessoa('Mariazinha')
p2.falar()
