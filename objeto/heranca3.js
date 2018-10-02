const pai = { nome: 'Diego', idade: 20}

// Outro jeito de se fazer herança
const filha = Object.create(pai)
filha.nome = 'Ana'

console.log(filha.nome, filha.idade)
