import React, {useEffect, useState} from 'react';
import './Home.css';
import BalanceBox from '../../component/BalanceBox';
import BarraLateral from '../../component/BarraLateral';
import Header from '../../component/Header';
import TranferenciaHist from '../../component/TranferenciaHist';
import Axios from '../../Axios';
import Exit from '../../Exit'
import { Contexto } from '../../context';

function Home() {
	const {setrecaregarComponent} = React.useContext(Contexto)
	const [score, setscore] = useState<number>(0)
	const [saldos, setsaldos] = useState<number>(0)
	const [saidas, setsaidas] = useState<number>(0)
	const [entradas, setentradas] = useState<number>(0)
	const [nome, setnome] = useState<string>('')
	const [h, set ] = useState<any>([])
	useEffect(() => {
		const load  =  async ()=>{
			Axios.post('api/home').then( res =>{
				if(res.data !== "USER_ERROR"){
					setscore(res.data.score)
					setsaldos(res.data.saldo)
					setsaidas(res.data.saidas)
					setentradas(res.data.entradas)
					setnome(res.data.nome)
					var g = res.data.historico
					
					//set([g])
				}
				else{
					Exit()
				}
			})
		}
		load()

	})
	return (
		<div className="home">
			<BarraLateral></BarraLateral>
			<div className='conteudo'>
				<Header nome={nome}></Header>
				<BalanceBox score={score} saldos={saldos} saidas={saidas} entradas={entradas} ></BalanceBox>
				<TranferenciaHist historico={h}></TranferenciaHist>
			</div>
		</div>
	);
}

export default Home;
