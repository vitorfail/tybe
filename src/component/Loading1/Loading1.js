import './Loading1.scss'
import React from 'react'
import { Contexto } from '../../context'

function Loading1(){
    const {loading} = React.useContext(Contexto)
    return(
        <div className={loading?"loading mostrar": "loading"}>
            <div className="c-loader"></div>
        </div>

    )
}
export default Loading1