// a função pode ser tratada como um dado - high order function
// se nao retorna nada na função, ela retorna undefined

function func1() {

}

// é possível salvar uma função dentro de uma variável
const funcao2 = function () {

}

// tbm pode salvar em array
// so funcao anonima pode ser executada
const arrayfuncao = [function (a, b) {
    return a + b
}, func1, funcao2, () => 'olá fake']
console.log(arrayfuncao[0](2, 2))

// tbm pode ser salvo dentro de uma propriedade de um objeto
const obj = {}
obj.falar = function () {
    return 'asdsad'
}
console.log(obj.falar())

// pode ser passada como parametro
function executaFuncoes(funcao) {
    funcao()
}

executaFuncoes(_ => {
    console.log('heheue ')
})

// Uma função pode retornar e conter outra função
function soma(a,b) {
    return function(c) {
        console.log(a + b +c)
    }
}

soma(2,3)(5)