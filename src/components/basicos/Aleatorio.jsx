import React from 'react'

export default props => {
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <h2>Valor aleatorio</h2>
            <p>
                <strong>Valor minimo: </strong> {min}
            </p>
            <p>
                <strong>Valor maximo: </strong> {max}
            </p>
            <p>
                <strong>Valor escolhido: </strong> {random}
            </p>
        </div>
    )
}