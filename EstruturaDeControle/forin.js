const notas = [6,77,89,973,33,2456]
var i
for (i in notas) {
  console.log(notas[i])
}

const pessoa = {
  nome: 'ana',
  idade: 11,
  peso: 55
}
let atributo
for(atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
