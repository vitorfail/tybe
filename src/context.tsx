import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react'

interface Props {
    children: React.ReactNode;
}
const ValoresIniciais = {
    modalAviso:false,
    setmodalAviso:() => {}
}
type Modais = {
    modalAviso:boolean;
    setmodalAviso:(nextState: boolean) => void;
}
export const Contexto = React.createContext<Modais>(ValoresIniciais)
export const ComponentContexto: React.FC<Props> = ({children}) => {
    const [modalAviso, setmodalAviso] = useState(ValoresIniciais.modalAviso)
    return(
        <Contexto.Provider value={{modalAviso, setmodalAviso}}>
            {children}
        </Contexto.Provider>
    )
}