import './AvisoPag.css'
import React,{useState} from 'react'
import { Contexto } from '../../context'


export default function AvisoPag(){
    const {avisoPag, setavisoPag, avisoMensagem, setrecaregarComponent} = React.useContext(Contexto)
    function reload(){
        setrecaregarComponent(true)
        setavisoPag(false)
    }
    return(
        <div className={avisoPag?'aviso-pag show': 'aviso-pag'}>
            <div className="aviso">
                <p>{avisoMensagem}</p>
                <button onClick={() => reload()}>OK</button>
            </div>
        </div>
    )
}