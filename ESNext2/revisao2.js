// Spred ou rest operator
function total (...numeros) {
  let total = 0
  numeros.forEach(n => total+= n)
  return total
}

console.log(total(1,2,3,4,5))
