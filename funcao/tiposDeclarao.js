// function declaration
// pode usar antes de declarar
console.log(soma (3,2))

function soma (x,y) {
  return x + y
}

// function expression
// não pode usar antes de declarar -> not defined
const sub = function(x,y) {
  return x - y
}

// named function expression
// não pode usar antes de declarar -> not defined 
const mult = function mult(x,y) {
  return x * y
}
