function Pessoa() {
  this.idade = 0;

  setInterval(function(){
    this.idade++ // aqui não aponta para o objeto pessoa, dá erro na primeira tentativa abaixo
    console.log(this.idade)
  }, 1000)
}

new Pessoa

// A primeira solução é amarra a função com bind
function Pessoa2() {
  this.idade = 0;

  setInterval(function(){
    this.idade++ // aqui não aponta para o objeto pessoa, dá erro na primeira tentativa abaixo
    console.log(this.idade)
  }.bind(this), 1000)// aqui faz funcionar
}


new Pessoa2
