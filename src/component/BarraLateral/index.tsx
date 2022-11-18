import React from "react";
import './index.css'
import Logo from '../../icons/ng.png'
import Exit from '../../Exit'
import { useHistory } from "react-router-dom";

export default function BarraLateral(){
    const history = useHistory()
    function sair(){
        localStorage.removeItem('token_jwt');
        history.push('/')
    }
    return(
        <div className="barra--lateral">
            <div className="logo">
                <img alt='log' src={Logo}></img>
                <h2>NG.CASH</h2>
            </div>
            <ul>
                <a href="#">Home</a>
                <a href="#" onClick={() => sair()}>Sair</a>
            </ul>
        </div>
    )
}