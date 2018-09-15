// uma função que retorna um objeto
// sempre rertorna um novo objeto

// factory simples
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
  return {
    nome: nome,
    preco: preco
  }
}

console.log(criarProduto('coca',2))

let prod2 = criarProduto('roupa',11)
console.log(prod2)
