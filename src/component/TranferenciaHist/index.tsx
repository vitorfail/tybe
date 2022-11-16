import React from 'react'
import './index.css'
export default function TranferenciaHist(){
    return(
        <div className='tranfer'>
            <div className="historico">
                <div className='titulos'>
                    <h3 className="nome">Nome</h3>
                    <h3 className="valor">Valor</h3>
                    <h3 className="tipo">Tipo</h3>
                    <h3 className="status">Status</h3>
                </div>
                <div className="dados">
                    <div className="row">
                        <h3 className='nome'>Vitor Manoel de andrade souza</h3>
                        <h3 className='valor'>R$ 78,90</h3>
                        <h3 className='tipo'>Tranferência</h3>
                        <h3 className='status'>Pendência</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}