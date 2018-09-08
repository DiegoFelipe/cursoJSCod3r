function soma(a,b,c) {
  a = isNan(a) ? 1 : a
  b = isNan(b) ? 1 : b
  c = isNan(c) ? 1 : c
}

//padrão do es2015
function soma2 (a = 1,b = 1,c = 1) {
  return a+b+c
}
