import React, {useEffect, useState} from 'react';
import './Home.css';
import BalanceBox from '../../component/BalanceBox';
import BarraLateral from '../../component/BarraLateral';
import Header from '../../component/Header';
import TranferenciaHist from '../../component/TranferenciaHist';
import Axios from '../../Axios';
import { useHistory } from 'react-router-dom';


function Home() {
	const [score, setscore] = useState<number>(0)
	const [saldos, setsaldos] = useState<number>(0)
	const [saidas, setsaidas] = useState<number>(0)
	const [entradas, setentradas] = useState<number>(0)
	const [nome, setnome] = useState<string>('')
	var  variaveis = [score, saldos, saidas, entradas]
	const history = useHistory()
	useEffect(() => {
		Axios.post('api/home').then( res =>{
			if(res.data !== "USER_ERROR"){
				setscore(res.data.score)
				setsaldos(res.data.saldo)
				setsaidas(res.data.saidas)
				setentradas(res.data.entradas)
				setnome(res.data.nome)
			}
			else{
				localStorage.removeItem('token_jwt');
				history.push('/')
			}
		})
	})
	return (
		<div className="home">
			<BarraLateral></BarraLateral>
			<div className='conteudo'>
				<Header></Header>
				<BalanceBox itens={variaveis} ></BalanceBox>
				<TranferenciaHist></TranferenciaHist>
			</div>
		</div>
	);
}

export default Home;
