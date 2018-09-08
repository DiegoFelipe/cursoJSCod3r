const pessoa = {
  saudacao: 'bom dia',
  falar() {
    console.log(this.saudacao) // se tirar o this aqui dá erro
  }
}

pessoa.falar() // assim funciona
const falar = pessoa.falar
//falar() // aqui o this mudou, dá erro

const falarDePessoa = pessoa.falar.bind(pessoa) // aqui 'salva' o this e funciona abaixo
falarDePessoa()
