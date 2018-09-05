function rand({ min = 0, max = 1000}) { // aqui está sendo feito o destruturing no recebimento dos parâmetros
  const valor = Math.random() * (max-min) + min
  return Math.floor(valor)
}

const obj = {min: 50, max: 678}
console.log(rand(obj))
