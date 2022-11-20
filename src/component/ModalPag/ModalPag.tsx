import './ModalPag.css'
import React,{useState} from 'react'
import { Contexto } from '../../context'
import Axios from '../../Axios'
import Exit from '../../Exit'

export default function ModalPag(){
    const {modalPag, setmodalPag, setavisoMensagem, setavisoPag} = React.useContext(Contexto)
    const [usuario, setusuario] = useState<string>('')
    const [valor, setvalor] = useState<string>('')
    function mascara_valor(e:string){
        var c = e.replace(/\D/g, "")
        c = c.replace(/(\d)(\d{2})$/, "$1,$2")
        c = c.replace(/(?=(\d{3})+(\D))\B/g, ".")
        setvalor("R$ "+c) 
    }
    function pagar(){
        var preco = parseFloat(((valor.replace('R$ ', '')).replace('.', '')).replace(',', '.'))
        Axios.post('api/pagamento', {userpay:usuario, valor:preco})
        .then(res => {
            if(res.data !== "USER_ERROR"){
                console.log(res.data.resultado)
                if(res.data.resultado === 'MONEY-LOW'){
                    console.log('passou aqui')
                    setavisoMensagem('Você não tem dinheiro suficiente para realizar essa transação')
                    setavisoPag(true)    
                }
                else{
                    if(res.data.resultado === 'Not found'){
                        setavisoMensagem('O usuário que você tentou tranferir não existe. Verifique o nome e tende denovo')
                        setavisoPag(true)    
                    }
                    else{
                        if(res.data.resultado === 1){
                            setavisoMensagem('Trasação realizada com sucesso')
                            setavisoPag(true)
                            setmodalPag(false)
                        }            
                    }    
                }
            }
            else{
                Exit()
            }
        })
        .catch(erro =>{
            setavisoMensagem('Houve algum problema na internet. A trnafêrencia não foi efetivada. Verifique sua conexão e tene denovo')
            setavisoPag(true)
        })
    }
    return(
        <div className={modalPag?'modal-pag show': 'modal-pag'}>
            <div className="aviso">
                <div className='entradas'>
                    <input value={usuario} onChange={(event) => setusuario(event.target.value)} placeholder='alguem' />
                    <label className='nome'>Usuário</label>
                </div>
                <div className='entradas'>
                    <input type="text" value={ valor} onChange={(event) => mascara_valor(event.target.value)}  placeholder='0,00' />
                    <label className='nome'>Valor(R$)</label>
                </div>
                <div className='botoes'>
                    <button className='cancel' onClick={() => setmodalPag(false)}>Cancelar</button>
                    <button className='ok' onClick={() => pagar()}>OK</button>
                </div>
            </div>
        </div>
    )
}