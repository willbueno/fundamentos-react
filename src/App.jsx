import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Familia from './components/basicos/Familia'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className='Cards'>
                <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                    <Familia sobrenome='Silva'>
                        <FamiliaMembro nome='Pedro' />
                        <FamiliaMembro nome='Ana' />
                        <FamiliaMembro nome='Gustavo' />
                    </Familia>
                </Card>

                <Card titulo="#04 - Exemplo de Card" color="#FA6900">
                    <Aleatorio min={0} max={10} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situacao Aluno"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>

                <Card titulo="#01 - Primeiro componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}