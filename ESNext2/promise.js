function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase) // so aceita 1 parâmetro 
    }, segundos * 1000)
  })
}

falarDepoisDe(2, 'asdasdas')
.then((frase) => frase.concat('!!!'))
.then((outraFrase) => console.log(outraFrase))
