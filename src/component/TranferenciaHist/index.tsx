import React, { ReactElement, useEffect, useState } from 'react'
import Axios from '../../Axios'
import Bara from '../Bara'
import './index.css'
export default function TranferenciaHistconst(){
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
                            setlist(res.data.historico)
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
    return(
        <div className='tranfer'>
            <div className="historico">
                <div className='etiqueta'>
                    <h3>Lista de tranferências</h3>
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
                            <h3 className='tipo'>{item.creditedAccountId}</h3>
                            <h3 className='data'>{configData(item.updatedAt.toString())}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='planilha'>
                <Bara janeiro={janeiro} fevereiro={fevereiro} marco={marco} abril={abril} maio={maio} junho={junho} julho={julho} agosto={agosto} setembro={setembro} outubro={outubro} novembro={novembro} dezembro={dezembro} ></Bara>
            </div>
        </div>
    )
}