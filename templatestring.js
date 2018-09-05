const nome = 'diego'
const template = `
Olá
${nome}!
`
console.log(template)

// expressoes

console.log(`1+1=${1+1}`)

// arrow function
let up = text => text.toUpperCase()

console.log(`Olá, ${up('diego')}`)
