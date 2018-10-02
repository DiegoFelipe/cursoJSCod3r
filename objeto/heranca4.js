function meuObjeto() {}

const obj1 = new meuObjeto()
const obj2 = new meuObjeto()

//console.log(obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function() { console.log(`Olá, meu nome é ${this.nome}`) }

obj1.nome = 'asd'
obj1.falar() // Olá, meu nome é asd
