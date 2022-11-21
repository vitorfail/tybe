import './ModalPag.css'
import React,{useState} from 'react'
import { Contexto } from '../../context'
import Axios from '../../Axios'
import Exit from '../../Exit'
import Transferencia from '../../icons/transferencia.png'

export default function ModalPag(){
    const {modalPag, setmodalPag, setavisoMensagem, setavisoPag, setloading} = React.useContext(Contexto)
    const [usuario, setusuario] = useState<string>('')
    const [valor, setvalor] = useState<string>('')
    function mascara_valor(e:string){
        var c = e.replace(/\D/g, "")
        c = c.replace(/(\d)(\d{2})$/, "$1,$2")
        c = c.replace(/(?=(\d{3})+(\D))\B/g, ".")
        setvalor("R$ "+c) 
    }
    function pagar(){
        setloading(true)
        var preco = parseFloat(((valor.replace('R$ ', '')).replace('.', '')).replace(',', '.'))
        Axios.post('api/pagamento', {userpay:usuario, valor:preco})
        .then(res => {
            if(res.data !== "USER_ERROR"){
                console.log(res.data.resultado)
                if(res.data.resultado === 'MONEY-LOW'){
                    setloading(false)
                    setavisoMensagem('Você não tem dinheiro suficiente para realizar essa transação')
                    setavisoPag(true)    
                }
                else{
                    if(res.data.resultado === 'Not found'){
                        setloading(false)
                        setavisoMensagem('O usuário que você tentou tranferir não existe. Verifique o nome e tende denovo')
                        setavisoPag(true)    
                    }
                    else{
                        if(res.data.resultado === 1){
                            setloading(false)
                            setavisoMensagem('Trasação realizada com sucesso')
                            setavisoPag(true)
                            setmodalPag(false)
                        }            
                    }    
                }
            }
            else{
                setloading(false)
                alert('Seu usário não está autenticado estamos levando vo^ce de volta para o login')
                Exit()
            }
        })
        .catch(erro =>{
            setloading(false)
            setavisoMensagem('Houve algum problema na internet. A trnafêrencia não foi efetivada. Verifique sua conexão e tene denovo')
            setavisoPag(true)
        })
    }
    return(
        <div className={modalPag?'modal-pag show': 'modal-pag'}>
            <div className="aviso">
                <img src={Transferencia} alt="" />
                <h2>Tranferências</h2> 
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