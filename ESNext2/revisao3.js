// ES8: Object.values = pega todos os valores de um objeto
// Object.entries = pega todas as chaves e valores e colocar em um array

const obj2 = { a: 1, b: 2, c:3 };
console.log(Object.values(obj2))
console.log(Object.entries(obj2))
console.log('asasd')

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    console.log(this.nome)
  }
}

pessoa.ola()


// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au au'
  }
}

console.log(new Cachorro().falar())
