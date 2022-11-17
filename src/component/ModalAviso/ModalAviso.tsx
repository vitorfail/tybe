import './ModalAviso.css'
import React,{useState} from 'react'

export default function ModalAviso(){
    return(
        <div className={'modal-aviso'+}>
            <div className="aviso">
                <p>Parabéns, agora você pode acessar nosso aplicativo. Obrigado e aproveito o serviço!</p>
                <button>OK</button>
            </div>
        </div>
    )
}