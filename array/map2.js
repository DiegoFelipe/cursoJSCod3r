function getPreco({preco}) {
  return preco
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 23.45}',
  '{"nome": "Kit de lápis", "preco": 53.45}',
  '{"nome": "Caneta", "preco": 36.45}',
]

let precos = carrinho.map(JSON.parse).map(getPreco)
console.log(precos)
