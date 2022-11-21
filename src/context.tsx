import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react'

interface Props {
    children: React.ReactNode;
}
const ValoresIniciais = {
    modalAviso:false,
    setmodalAviso:() => {},
    modalPag:false,
    setmodalPag:() => {},
    avisoPag:false,
    setavisoPag:() => {},
    avisoMensagem:'',
    setavisoMensagem:() => {},
    recaregarComponent:false,
    setrecaregarComponent:() => {},
    loading: false,
    setloading:() => {}
}
type Modais = {
    modalAviso:boolean;
    setmodalAviso:(nextState: boolean) => void,
    modalPag:boolean,
    setmodalPag:(nextState: boolean) => void,
    avisoPag:boolean,
    setavisoPag: (nextState: boolean) => void,
    avisoMensagem:string,
    setavisoMensagem:(nextState: string) => void,
    recaregarComponent:boolean,
    setrecaregarComponent:(nextState: boolean) => void,
    loading: boolean,
    setloading:(nextState: boolean) => void
}
export const Contexto = React.createContext<Modais>(ValoresIniciais)
export const ComponentContexto: React.FC<Props> = ({children}) => {
    const [modalAviso, setmodalAviso] = useState(ValoresIniciais.modalAviso)
    const [ modalPag, setmodalPag] = useState(ValoresIniciais.modalPag)
    const [ avisoPag, setavisoPag] = useState(ValoresIniciais.avisoPag)
    const [ avisoMensagem, setavisoMensagem] = useState(ValoresIniciais.avisoMensagem)
    const [ recaregarComponent, setrecaregarComponent] = useState(ValoresIniciais.recaregarComponent)
    const [ loading, setloading] = useState(ValoresIniciais.loading)



    return(
        <Contexto.Provider value={{modalAviso, setmodalAviso, modalPag, setmodalPag,
        avisoPag, setavisoPag, avisoMensagem , setavisoMensagem, 
        recaregarComponent, setrecaregarComponent, loading, setloading}}>
            {children}
        </Contexto.Provider>
    )
}