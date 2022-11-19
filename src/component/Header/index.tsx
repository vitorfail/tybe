import './index.css'
import React, {useState} from 'react'
import { Contexto } from '../../context'
import Exit from '../../Exit'

export default function Header(props: any | (() => any)){
    function exibirmenu(){
        if(miniMenu){
            setminiMenu(false)
        }
        else{
            setminiMenu(true)
        }
    }
    const [miniMenu, setminiMenu] = useState<boolean>(false)
    const {setmodalPag} = React.useContext(Contexto)
    return(
        <div className='header'>
            <div className={miniMenu?'mini-menu show':'mini-menu'}>
                <h3 onClick={() => setmodalPag(true)}>Tranferência</h3>
                <h3 onClick={() => Exit()}>Sair</h3>
            </div>
            <div className='img' onClick={() => exibirmenu()}></div>
            <button onClick={() => setmodalPag(true)}>Pagamento</button>
            <div className='icon_name'>
                <h3>Olá, {props.nome}</h3>
                <div className='icon_letra'></div>
            </div>
        </div>
    )
}