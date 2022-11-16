import React from 'react';
import './Home.css';
import BalanceBox from '../../component/BalanceBox';
import BarraLateral from '../../component/BarraLateral';
import Header from '../../component/Header';
import TranferenciaHist from '../../component/TranferenciaHist';

function Home() {
  return (
    <div className="home">
        <BarraLateral></BarraLateral>
        <div className='conteudo'>
			<Header></Header>
			<BalanceBox></BalanceBox>
			<TranferenciaHist></TranferenciaHist>
        </div>
    </div>
  );
}

export default Home;
