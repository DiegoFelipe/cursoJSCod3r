import React from 'react'

export default props =>
    <div>
        <h1> {props.nome} {props.sobrenome} </h1>
        <h2>Filhos</h2>
        <ul>
            {/*{props.children}*/} {/* Se fosse um componente de classe seria this.props.children*/}
            {React.cloneElement(props.children, {...props})}
        </ul>
    </div>