import React, { Fragment } from 'react'

export default (props) =>
    <Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h1>Você tem {props.idade} anos</h1>
    </Fragment>
