// array em js é um objeto
let aprovados = new Array('Bia','Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Diego']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paula'

aprovados.push('Patrícia')
console.log(aprovados.length)

aprovados[5]= 'Rafael'
console.log(aprovados) // [ 'Bia', 'Carlos', 'Diego', 'Paula', 'Patrícia', , , , , 'Rafael' ]
console.log(aprovados.sort()) // ordena por ordem alfabetica

delete aprovados[1] // coloca undefined nessa possição
console.log(aprovados[1])
console.log(aprovados)

aprovados.splice(1,1)
console.log(aprovados)

aprovados.splice(0,0,"Bianca","Emanuel")
console.log(aprovados)
