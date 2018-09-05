const imprimirSoma = function (a,b) {
  console.log(a+b)
}

imprimirSoma(3,3)

// arrow function
const soma = (a,b) => {
  return a+b
}

console.log(soma(2,4))

// arrow function com retorno implícito
const sub = (a,b) => a-b

console.log(sub(4,2))
