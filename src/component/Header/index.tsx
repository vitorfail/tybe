import './index.css'
import React from 'react'
import List from '../../icons/list.png'

export default function Header(props: any | (() => any)){
    return(
        <div className='header'>
            <img alt='lista' src={List}></img>
            <div className='icon_name'>
                <h3>Olá, {props.nome}</h3>
                <div className='icon_letra'></div>
            </div>
        </div>
    )
}