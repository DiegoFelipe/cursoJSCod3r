import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Saudacao from './componentes/Saudacao'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'

ReactDOM.render(<Primeiro/>, document.getElementById('root'))
ReactDOM.render(<BomDia nome = "diego" idade = {27}/>, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
        <BoaTarde nome="diego" />
        <BoaNoite nome="diego" />
    </div>
, document.getElementById('root'))
