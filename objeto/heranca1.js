const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 234
}

console.log(ferrari.__proto__); // acessa o objeto pai
console.log(ferrari.__proto__ === Object.prototype) // true
