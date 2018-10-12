const pilotos = ['Diego','Felipe','Souza']
pilotos.pop() // remove o último elemento do array : 'Souza'

console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array : 'Diego'
console.log(pilotos)

pilotos.unshift('Diego') // add no primeiro indice
console.log(pilotos)

pilotos.splice(2,0,"Massa") // no indice 2 apaga nenhum e add massa
console.log(pilotos)

pilotos.splice(2,1)
console.log(pilotos)

const pilotos2 = pilotos.slice(2) // cria umnovo array, com base no outro a partir do indice especificado
console.log(pilotos2)

const pilotos3 = pilotos.slice(1,4)
console.log(pilotos3 )
