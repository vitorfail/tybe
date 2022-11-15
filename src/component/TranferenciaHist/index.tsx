import React from 'react'
export default function TranferenciaHist(){
    return(
        <div className='tranfer'>
            <div className='titulos'>
                <h2 className="nome">Nome</h2>
                <h2 className="valor">Valor</h2>
                <h2 className="tipo">Tipo</h2>
                <h2 className="status">Status</h2>
            </div>
            <div className="dados">
                <div className="row">
                    <h2>Vitor Manoel de andrade souza</h2>
                    <h2>R$ 78,90</h2>
                    <h2>Tranferência</h2>
                    <h2>Pendência</h2>
                </div>
            </div>
        </div>
    )
}