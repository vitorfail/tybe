import './AvisoPag.css'
import React,{useState} from 'react'
import { Contexto } from '../../context'


export default function AvisoPag(){
    const {avisoPag, setavisoPag, avisoMensagem} = React.useContext(Contexto)
    return(
        <div className={avisoPag?'aviso-pag show': 'aviso-pag'}>
            <div className="aviso">
                <p>{avisoMensagem}</p>
                <button onClick={() => setavisoPag(false)}>OK</button>
            </div>
        </div>
    )
}