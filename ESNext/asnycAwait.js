// serve pra fazer partes de umas função assíncrona síncrona

const retornaDepois5Segundos = numero => {
    return new Promise(resolve => {
        setTimeout( _ => {
            resolve(numero)
        }, 5000)
    })
}

async function adiciona50Mais(valor) {
    const a = retornaDepois5Segundos(20)
    const b = retornaDepois5Segundos(30)
    return valor + await a + await b
}


adiciona50Mais(10).then(result => console.log(result))