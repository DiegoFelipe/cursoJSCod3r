const saudacao = 'opa' // contexto léxico

function exec() {
  const saudacao = 'Faaala' // contexto léxico 2
  return saudacao
}


  const cliente = {
    nome: 'diego',
    idade: 27,
    peso: 70,
    endereco : {
      rua: '38a',
      numero: 123
    }
  }
console.log(saudacao)
console.log(exec())
console.log(cliente)
