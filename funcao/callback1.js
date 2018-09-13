const fabricantes = ['mercedez','audi','ferrari']

function imprimir(nome, indice) {
  console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
