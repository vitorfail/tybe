import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2' 

export default function Bara(props){
    return(
        <Bar
        data={{labels: ["Janeiro", "Fevereiro", "Março", "Abril", 
            "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [{
        label: "Faturamento mensal: R$",
        data: [props.janeiro, props.fevereiro, props.marco, props.abril, 
            props.maio, props.junho, props.julho, props.agosto, 
            props.setembro, props.outubro, props.novembro, props.dezembro],
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
                fontSize:20
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