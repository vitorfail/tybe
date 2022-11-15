import React from "react";
import './index.css'
import Logo from '../../icons/ng.png'

export default function BarraLateral(){
    return(
        <div className="barra--lateral">
            <div className="logo">
                <img alt='log' src={Logo}></img>
                <h2>NG.CASH</h2>
            </div>
            <ul>
                <a>Home</a>
                <a>Transferência</a>
            </ul>
        </div>
    )
}