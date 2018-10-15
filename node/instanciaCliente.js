const contadorA = require('/home/diego-felipe/repositorios/cursoJSCod3r/node/instanciaUnica.js')
const contadorB = require('/home/diego-felipe/repositorios/cursoJSCod3r/node/instanciaUnica.js')

const contadorC = require('/home/diego-felipe/repositorios/cursoJSCod3r/node/instanciaNova.js')()
const contadorD = require('/home/diego-felipe/repositorios/cursoJSCod3r/node/instanciaNova.js')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)
console.log(contadorB.valor)

contadorC.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)
