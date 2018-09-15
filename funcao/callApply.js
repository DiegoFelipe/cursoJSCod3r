function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 20
console.log(produto.getPreco())
console.log(produto.getPreco())

const carro = { preco: 490000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
