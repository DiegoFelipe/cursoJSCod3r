function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo',1)
const aula2 = new Aula('Encerramento',2)

console.log(aula1, aula2)

// Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj._proto_ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo aula 3', 3)
console.log(aula3)
