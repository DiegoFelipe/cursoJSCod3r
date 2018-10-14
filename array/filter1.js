// o filter serve pra pegar um array original e transformá-lo em um menor (filtrá-lo)
const produtos = [
  { nome: 'Notebook', preco: 2599, fragil: true},
  { nome: 'Ipad Pro', preco: 5679, fragil: true},
  { nome: 'Copo de vidro', preco: 299, fragil: true},
  { nome: 'Copo plástico', preco: 2, fragil: false}
]

//const prodCaro = function({preco}) {  return preco > 300 }
//const prodCaro = produto => produto.preco > 300
const prodCaro = ({preco}) => preco > 300
//const prodFragil = function({fragil}) { return fragil == true }
const prodFragil = ({fragil}) => fragil


//console.log(produtos.filter(prodCaro))
console.log(produtos.filter(prodFragil))
