const pessoa = {
  nome: 'ana',
  idade: 5,
  endereco: {
    logradouro: 'rua abc',
    numero: 1000
  }
}

const { nome, idade } = pessoa // aqui foram criada as var nome e idade usadas abaixo
console.log(nome, ' tem ', idade, ' anos.')

const { nome: n, idade: i } = pessoa // cria a variável n com o valor de nome, mesma coisa de acima
console.log(n, ' tem ', i, ' anos.')

const { endereco: { logradouro, numero } } = pessoa // aqui não vai fazer o destructing em endereço
console.log(nome, ' mora em ', logradouro, ' n', numero)
