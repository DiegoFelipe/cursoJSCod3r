const alunos =[
  {nome: 'João', nota: 7.6, bolsista: false},
  {nome: 'Maria', nota: 9.6, bolsista: true},
  {nome: 'Pedro', nota: 3.4, bolsista: false},
  {nome: 'Tiago', nota: 8.4, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  return acumulador + atual
})

const resultado2 = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual)

console.log(resultado2)
