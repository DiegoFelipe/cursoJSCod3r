const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
  [function() {}, 'Função'],
  [{}, 'objeto'],
  [123, 'número']
])

chavesVariadas.forEach((val, chav) => console.log(val, chav))
