function getPreco({preco}) {
  return preco
}

Array.prototype.map2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 23.45}',
  '{"nome": "Kit de lápis", "preco": 53.45}',
  '{"nome": "Caneta", "preco": 36.45}',
]

let precos = carrinho.map2(JSON.parse).map2(getPreco)
console.log(precos)
