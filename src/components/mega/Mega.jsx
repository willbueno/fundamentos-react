import './Mega.css'
import React, { useState } from "react"

export default props => {

    function generateNumber(min, max, numbers) {
        const randomNumber = parseInt(Math.random() * (max + 1 - min) + min)

        return numbers.includes(randomNumber) ? generateNumber(min, max, numbers) : randomNumber
    }

    function generateMega(qty) {
        const numbers = Array(qty)
            .fill(0)
            .reduce(nums => {
                const newNumber = generateNumber(1, 60, nums)
                return [...nums, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numbers
    }

    const [quantity, setQuantity] = useState(props.quantity || 6)
    const initialNumbers = Array(quantity).fill(0)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className='Mega'>
            <h2>Mega-Sena</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantidade de numeros: </label>
                <input
                    min={6}
                    max={17}
                    type="number"
                    value={quantity}
                    onChange={e => {
                        setQuantity(+e.target.value)
                        setNumbers(generateMega(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumbers(generateMega(quantity))}>
                Gerar numeros
            </button>
        </div>
    )
}