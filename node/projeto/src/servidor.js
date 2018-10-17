const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('/home/diego-felipe/repositorios/cursoJSCod3r/node/projeto/src/bancodeDados.js')

app.get('/produtos', (req, res, next) => {
    // res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON automaticamente
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req,res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
