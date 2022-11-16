import React, {useEffect, useState} from 'react'
import './index.css'
import Credit from '../../icons/credito.png'
import Divida from '../../icons/divida.png'
import Saldo from '../../icons/saldo.png'
import Score from '../../icons/score.png'

export default function BalanceBox(){
    useEffect(() =>{

    })
    const [score, setscore] = useState<number>(0)
    const [saldo, setsaldo] = useState<number>(0)
    const [divida, setdivida] = useState<number>(0)
    const [credit, setcredit] = useState<number>(0)

    return(
        <div className='balance'>
            <div className='box'>
                <div className='info'>
                    <h1>R$ {score}</h1>
                    <h3>Score</h3>
                </div>
                <div className='icone'>
                    <img alt='imag-icon' src={Score} />
                </div>
            </div>
            <div  id='saldo'className='box'>
                <div className='info'>
                    <h1>R$ {saldo}</h1>
                    <h3>Saldo</h3>
                </div>
                <div className='icone'>
                    <img alt='imag-icon' src={Saldo} />
                </div>
            </div>
            <div className='box'>
                <div className='info'>
                    <h1>R$ {divida}</h1>
                    <h3>Dívida</h3>
                </div>
                <div className='icone'>
                    <img alt='imag-icon' src={Divida} />
                </div>
            </div>
            <div className='box'>
                <div className='info'>
                    <h1>R$ {credit}</h1>
                    <h3>A Receber</h3>
                </div>
                <div className='icone'>
                    <img alt='imag-icon' src={Credit} />
                </div>
            </div>
        </div>
    )
}