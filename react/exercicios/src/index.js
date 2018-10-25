import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

ReactDOM.render(<Primeiro/>, document.getElementById('root'))
ReactDOM.render(<BomDia nome = "diego" idade = {27}/>, document.getElementById('root'))
