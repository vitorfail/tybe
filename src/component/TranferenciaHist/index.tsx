import React, { ReactElement, useEffect, useState } from 'react'
import Axios from '../../Axios'
import { Contexto } from '../../context'
import Grafico from '../Grafico'
import './index.css'
export default function TranferenciaHistconst(){
    const  {recaregarComponent} = React.useContext(Contexto)
    const recarregar =recaregarComponent
    const [janeiro, setjaneiro] = useState<number>(0)
    const [fevereiro, setfevereiro] = useState<number>(0)
    const [marco, setmarco] = useState<number>(0)
    const [abril, setabril] = useState<number>(0)
    const [maio, setmaio] = useState<number>(0)
    const [junho, setjunho] = useState<number>(0)
    const [julho, setjulho] = useState<number>(0)
    const [agosto, setagosto] = useState<number>(0)
    const [setembro, setsetembro] = useState<number>(0)
    const [outubro, setoutubro] = useState<number>(0)
    const [novembro, setnovembro] = useState<number>(0)
    const [dezembro, setdezembro] = useState<number>(0)
    const [ id, setid] = useState<number>(0)
    interface Json{
        id:number,
        debitedAccountId:string,
        creditedAccountId:string,
        value:string,
        createdAt:string,
        updatedAt:string,
        AccountId:null,
    }
    const configData = (d:string) => {
        if(d ==="Nenhum"){
            return ""
        }
        else{
            var data = new Date(d)
            var data_formatada = data.getDate()+'/'+data.getMonth()+'/'+data.getFullYear()
            return data_formatada    
        }
    }
    const [ list, setlist] = useState<Array<Json>>([])
    useEffect(() => {
        const load = async () =>{
            Axios.post('api/historico')
            .then(res => {
                if(res.data !== 'USER_ERROR'){
                    if(res.data.historico !== "ERROR"){
                        if(res.data.historico !== 0){
                            setid(res.data.historico.id)
                            setlist(res.data.historico.dados)
                        }
                        else{
                            setlist([{AccountId:null, id:1, debitedAccountId:"", createdAt:"" ,value: "", creditedAccountId:"Nenhum", updatedAt:"Nenhum"}])
                        }
                    }
                }
                
            })
        }
        load()
    },[])
    function determinar_tipo_transferencia(d:string){
        if(d === 'Nenhum'){
            return "Nenhum"
        }
        else{
            if(parseInt(d) === id){
                return 'Recebido'
            }
            else{
                return "Pago"
            }    
        }
    }
    return(
        <div className='tranfer'>
            <div className="historico">
                <div className='etiqueta'>
                    <h3>Lista de tranfer??ncias</h3>
                </div>
                <div className='titulos'>
                    <h3 className="valor">Valor</h3>
                    <h3 className="tipo">Tipo</h3>
                    <h3 className="data">Data</h3>
                </div>
                <div className="dados">
                    {list.map((item, index) => (
                        <div key={index} className="row">
                            <h3 className='valor'>R$ {item.value}</h3>
                            <h3 className='tipo' id={determinar_tipo_transferencia(item.creditedAccountId)}>{determinar_tipo_transferencia(item.creditedAccountId)}</h3>
                            <h3 className='data'>{configData(item.updatedAt.toString())}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='planilha'>
                <Grafico faturamento_mes={list} ></Grafico>
            </div>
        </div>
    )
}