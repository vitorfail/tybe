import React, {useEffect, useState} from 'react';
import './Home.css';
import BalanceBox from '../../component/BalanceBox';
import BarraLateral from '../../component/BarraLateral';
import Header from '../../component/Header';
import TranferenciaHist from '../../component/TranferenciaHist';
import Axios from '../../Axios';
import Exit from '../../Exit'
import { Contexto } from '../../context';
import Loading from '../../component/Loading/Loading';
import { internal_processStyles } from '@mui/styled-engine';

function Home() {
	const {setrecaregarComponent} = React.useContext(Contexto)
	const [ isLoading, setisLoading] = useState<boolean>(true)
	const [score, setscore] = useState<number>(0)
	const [saldos, setsaldos] = useState<number>(0)
	const [saidas, setsaidas] = useState<number>(0)
	const [entradas, setentradas] = useState<number>(0)
	const [nome, setnome] = useState<string>('')
	useEffect(() => {
		const load  =  async ()=>{
			Axios.post('api/home').then( res =>{
				if(res.data !== "USER_ERROR"){
					setscore(res.data.score)
					setsaldos(res.data.saldo)
					setsaidas(res.data.saidas)
					setentradas(res.data.entradas)
					setnome(res.data.nome)
				}
				else{
					Exit()
				}
			})
			.catch(err =>{
				alert("Houve algum problema na internet ou no servidor, por favor, verifique su conexão e tente efetuar o login denovo")
				Exit()
			})
		}
		load()
		setTimeout(() => {setisLoading(false)}, 200)
	})
	return (isLoading? <Loading></Loading>:
		<div className="home">
			<BarraLateral></BarraLateral>
			<div className='conteudo'>
				<Header nome={nome}></Header>
				<BalanceBox score={score} saldos={saldos} saidas={saidas} entradas={entradas} ></BalanceBox>
				<TranferenciaHist></TranferenciaHist>
			</div>
		</div>
	);
}

export default Home;
