import React, { ReactElement, useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2' 
import Axios from '../../Axios'
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
            <div className='planilha'>
            <Bar
                    data={{labels: ["Janeiro", "Fevereiro", "Março", "Abril", 
                        "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    datasets: [{
                    label: "Faturamento mensal: R$",
                    data: [janeiro, fevereiro, marco, abril, 
                        maio, junho, julho, agosto, 
                        setembro, outubro, novembro, dezembro],
                    backgroundColor: ['rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(201, 203, 207, 0.7)',
                    'rgba(101, 253, 227, 0.7)',
                    'rgba(221, 103, 127, 0.7)',
                    'rgba(21, 83, 207, 0.7)',
                    'rgba(221, 73, 27, 0.7)',
                    'rgba(81, 43, 127, 0.7)'],
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 2
                }]}}
                
                />
            </div>
        </div>
    )
}