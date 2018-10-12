const pai = { nome: 'Diego', idade: 20}

// Outro jeito de se fazer herança
const filha = Object.create(pai)
filha.nome = 'Ana'

console.log(filha.nome, filha.idade)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

//filha2.nome = 'asdasd'
console.log(`${filha2.nome} tem ${filha2.idade} anos`)

// Imprime todos os atributos do objeto
for (let key in filha2) {
    console.log(key)
}
