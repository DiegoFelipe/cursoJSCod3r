// serve para uma transformação no array
// trasnformar em outro array com a mesma quantidade de elementos, mas mudando os dados
// o resultado do map vai gerar um outro array com o mesmo tamanho do original

const nums = [1,2,3,4,5]

let num2 = nums.map((item) => { return item * 2 })
console.log(num2)

const soma10 = e => e + 10
const triplo = e => e * 3

let num10 = nums.map(soma10).map(triplo)
console.log(num10)
