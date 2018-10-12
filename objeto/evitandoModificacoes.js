// Object.preventExtensions - não permite que sejam adicionados novos atributos ao Object
const produto = Object.preventExtensions({
  nome: 'qualquer',
  preco: 1.99,
  tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))
produto.nome = 'Borracha'
//produto.descricao = 'Uma borracha' // nao vai criar
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) // quando sela não pode mais adicionar, remover atributos, mas pode mudar os valores
console.log(Object.isSealed(pessoa))

// pessoa.sobrenome = 'souza' //vai dar erro nao pode
//delete pessoa.nome

pessoa.idade = 29
console.log(pessoa)

// Object.freeze
// não pode mudar nada, nem valores
