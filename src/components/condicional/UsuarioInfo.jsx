import React from "react"
import If from './if'

export default props => {
    const usuario = props.usuario || {}
    const testRender = usuario && usuario.nome

    return (
        <div>
            <If test={testRender}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If test={!testRender}>
                Seja bem vindo <strong>Amigao</strong>!
            </If>
        </div>
    )
}