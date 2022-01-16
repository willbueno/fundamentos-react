import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="#04 - Exemplo de Card">
                <Aleatorio min={0} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parametro">
                <ComParametro
                    titulo="Situacao Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro component">
                <Primeiro></Primeiro>
            </Card>
        </div>
    )
}