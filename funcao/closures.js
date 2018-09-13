// Closures
// escopo criado quando a função é definida
// esse escopo permite á funcão acessar e manipular variáveis externas á função

const x = 'global'

function fora() {
  const x = 'local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
