const pessoa = {
  nome: 'diego',
  idade: 20,
  peso: 72
}

// Imprime as chaves do objeto
console.log(Object.keys(pessoa))
//console.log(Object.values(pessoa ))
//console.log(Object.entries(pessoa))

/*
loga a chave : valor
Object.entries(pessoa).forEach( e => {
  console.log(`${e[0]} : ${e[1]}`)
})*/


/*
ou com destructuring:

Object.entries(pessoa).forEach( ([chave, valor]) => {
  console.log(`${chave} : ${valor}`)
})*/

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '16/08/1991'
})


console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
// 'concatena objetos js' e sobreescreve o último valor, como abaixo no caso do atributo a
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)

// congela o objeto, não deixa ser mudado
Object.freeze(obj)
//obj.c = 123123
console.log(obj)
