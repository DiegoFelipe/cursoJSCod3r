import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Saudacao from './componentes/Saudacao'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'

import Pai from './componentes/Pai'
import Pai2 from './componentes/Pai2'
import Filho from './componentes/Filho'

ReactDOM.render(<Primeiro/>, document.getElementById('root'))
ReactDOM.render(<BomDia nome = "diego" idade = {27}/>, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
        <BoaTarde nome="diego" />
        <BoaNoite nome="diego" />
        <Pai nome="Paulo" sobrenome="Silva" />

        <Pai2 nome="Diego" sobrenome="Felipe">
            <Filho nome="João" sobrenome="Felipe" />
            <Filho nome="Marcos" sobrenome="Felipe" />
            <Filho nome="Laila" sobrenome="Souza" />
        </Pai2>
    </div>
, document.getElementById('root'))
