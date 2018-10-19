const alunos =[
  {nome: 'João', nota: 7.6, bolsista: false},
  {nome: 'Maria', nota: 9.6, bolsista: true},
  {nome: 'Pedro', nota: 3.4, bolsista: false},
  {nome: 'Tiago', nota: 8.4, bolsista: true},
]

const todosBolsistas = alunos.map(a => a.bolsista).reduce((acumulador, bolsista) => acumulador && bolsista)
const algumBolsista = alunos.map(a => a.bolsista).reduce((acumulador, bolsista) => acumulador || bolsista)

console.log(todosBolsistas)
console.log(algumBolsista)
