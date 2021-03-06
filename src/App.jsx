import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contator from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className='Cards'>
                <Card titulo="#13 - Desafio Mega-Sena" color="#B9006E">
                    <Mega />
                </Card>

                <Card titulo="#12 - Contador" color="#424242">
                    <Contator numeroInicial={10} />
                </Card>

                <Card titulo="#11 - Componente controlado (Input)" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#10 - Comunicacao indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 - Comunicacao direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 - Renderizacao condicional" color="#982395">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <UsuarioInfo usuario={{ email: 'fernando@gmail.com' }} />
                </Card>

                <Card titulo="#07 - Desafio Tabela" color="#3A9AD9">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repeticao" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

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