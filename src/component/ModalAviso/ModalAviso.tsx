import './ModalAviso.css'
import React,{useState} from 'react'
import { Contexto } from '../../context'

export default function ModalAviso(){
    const {modalAviso, setmodalAviso} = React.useContext(Contexto)
    return(
        <div className={modalAviso?'modal-aviso show': 'modal-aviso'}>
            <div className="aviso">
                <p>Parabéns, agora você pode acessar nosso aplicativo. Obrigado e aproveito o serviço!</p>
                <button onClick={() => setmodalAviso(false)}>OK</button>
            </div>
        </div>
    )
}