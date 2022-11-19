import React, { ReactElement, useEffect, useState } from 'react'
import Axios from '../../Axios'
import './index.css'
export default function TranferenciaHist(){

    interface Json{
        id:number,
        debitedAccountId:number,
        creditedAccountId:number,
        value:string,
        createdAt:string,
        updatedAt:string,
        AccountId:null,
    }
    const configData = (d:string) => {
        var data = new Date(d)
        var data_formatada = data.getDate()+'/'+data.getMonth()+'/'+data.getFullYear()
        return data_formatada
    }
    const [ list, setlist] = useState<Array<Json>>([])
    useEffect(() => {
        const load = async () =>{
            Axios.post('api/historico')
            .then(res => {
                if(res.data !== 'USER_ERROR'){
                    if(res.data.historico !== "ERROR"){
                        setlist(res.data.historico)
                    }
                }
                
            })
        }
        load()
    },[])
    return(
        <div className='tranfer'>
            <div className="historico">
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
        </div>
    )
}