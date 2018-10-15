const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Diego',
        nota: 10
    }, {
        nome: 'Felipe',
        nota: 5
    }]
},{
    nome: 'Turma2',
    alunos: [{
        nome: 'Pedro',
        nota: 4
    }, {
        nome: 'Tiago',
        nota: 8
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

let notas = escola.map(getNotasDaTurma)
console.log(notas)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

let notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
