const alunos = [
    {nome: 'João', nota: 9.8},
    {nome: 'Maria', nota: 10},
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.lenght; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.lenght)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.lenght)
