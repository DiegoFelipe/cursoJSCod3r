
  class Avo {
    constructor(sobrenome) {
      this.sobrenome = sobrenome
    }

  }

  class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
      super(sobrenome)
      this.profissao = profissao
    }
  }

  class Filho extends Pai {
    constructor(sobrenome, profissao, idade = 15) {
      super('Silva', profissao)
      this.idade = idade
    }
  }

  let filho = new Filho('asd')
  console.log(filho )
