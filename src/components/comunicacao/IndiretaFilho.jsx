import React from "react"

export default props => {
    const qc = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (70 - 50) + 50)
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                FILHO
            </div>
            <button onClick={_ => qc('Joao', gerarIdade(), gerarNerd())}>
                Fornecer informacoes
            </button>
        </div>
    )
}