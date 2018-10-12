const avo = { attr1 : 'a'}
// HERANÇA
const pai = { __proto__: avo, attr2: 'b', attr3: '3'}
const filho = { __proto__: pai, attr3: 'c'}

console.log(filho.attr1, filho.attr2)


console.log(filho.attr3)
