import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'

const tag = <strong>Ola React</strong>

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
)