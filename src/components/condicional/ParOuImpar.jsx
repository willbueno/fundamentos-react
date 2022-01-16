import React from "react"

export default props => {
    const isEven = props.numero % 2 === 0
    return (
        <div>
            {isEven ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
}