import React, {useState, useEffect} from 'react'
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2' 

export default function Grafico(props){

    const [janeiro, setjaneiro] = useState(0)
    const [fevereiro, setfevereiro] = useState(0)
    const [marco, setmarco] = useState(0)
    const [abril, setabril] = useState(0)
    const [maio, setmaio] = useState(0)
    const [junho, setjunho] = useState(0)
    const [julho, setjulho] = useState(0)
    const [agosto, setagosto] = useState(0)
    const [setembro, setsetembro] = useState(0)
    const [outubro, setoutubro] = useState(0)
    const [novembro, setnovembro] = useState(0)
    const [dezembro, setdezembro] = useState(0)
    const [lista, setlista] = useState(props.faturamento_mes)
    useEffect(() => {
        const load = async () => {
            if(lista.length > 0){

                if(lista.creditedAccountId !== "Nenhum"){
                    /*var janeiro_ =  0
                    var fevereiro_ =  0
                    var marco_ =  0
                    var abril_ =  0
                    var maio_ =  0
                    var junho_ =  0
                    var julho_ =  0
                    var agosto_ =  0
                    var setembro_ =  0
                    var outubro_ =  0
                    var novembro_ =  0
                    var dezembro_ =  0
                    for(var i = 0; lista.length;i++){
                        var data = new Date(lista[i].updatedAt)
                        if(data.getMonth() === 0){
                            janeiro_ = janeiro_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 1){
                            fevereiro_ = fevereiro_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 2){
                            marco_ = marco_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 3){
                            abril_ = abril_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 4){
                            maio_ = maio_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 5){
                            junho_ = junho_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 6){
                            julho_ = julho_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 7){
                            agosto_ = agosto_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 8){
                            setembro_ = setembro_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 9){
                            outubro_ = outubro_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 10){
                            novembro_ = novembro_ + parseFloat(lista[i].value)
                        }
                        if(data.getMonth() === 11){
                            dezembro_ = dezembro_ + parseFloat(lista[i].value)
                        }
        
                    }
                    setjaneiro(janeiro)
                    setfevereiro(fevereiro)
                    setmarco(marco)
                    setabril(abril)
                    setmaio(maio)
                    setjunho(junho)
                    setjulho(julho)
                    setagosto(agosto)
                    setsetembro(setembro)
                    setoutubro(outubro)
                    setnovembro(novembro)
                    setdezembro(dezembro)*/
        
                }
            }
        }
        load()
        
    },[setlista])
    return(
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
        options={{
            title:{
                display:true,
                text:'Faturamento mensal',
                fontSize:29
            },
            legend:{
                display:true,
                position:'right'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }}
    />
    )
}