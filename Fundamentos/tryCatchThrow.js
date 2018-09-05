function tratarErroELancar(erro) {
  throw new Error('erro de processamento o atributo name nao foi encontrado')
  //throw 'message'
}

function gritar(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch(e) {
    tratarErroELancar(e)
  } finally { // o finally é executando sempre
    console.log('final')
  }
}

const obj = { name: 'Roberto'}
gritar(obj)
