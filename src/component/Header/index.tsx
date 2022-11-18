import './index.css'
import React from 'react'
import { Contexto } from '../../context'

export default function Header(props: any | (() => any)){
    const {setmodalPag} = React.useContext(Contexto)
    return(
        <div className='header'>
            <div className='img'></div>
            <button onClick={() => setmodalPag(true)}>Pagamento</button>
            <div className='icon_name'>
                <h3>Olá, {props.nome}</h3>
                <div className='icon_letra'></div>
            </div>
        </div>
    )
}