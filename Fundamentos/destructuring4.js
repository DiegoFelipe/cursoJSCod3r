function rand([min = 0, max = 1000]) {
  if (min > max) {
      // o primeiro par é do destructuring o segundo significa criar um novo array
      // o objetivo é checar se o valor mínimo é maior que o máximo e se for trocar pq está errado
      [min, max] = [max, min]
  }
  const valor = Math.random() * (max-min) + min
  return Math.floor(valor)
}

console.log(rand([50,40]))
