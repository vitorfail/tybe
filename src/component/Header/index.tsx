import './index.css'
import React from 'react'
import List from '../../icons/list.png'

export default function Header(){
    return(
        <div className='header'>
            <img alt='lista' src={List}></img>
            <div className='icon'></div>
        </div>
    )
}