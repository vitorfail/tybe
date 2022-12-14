import { Redirect, Route} from 'react-router-dom';

function Resolver() {
    try{
        const token = localStorage.getItem('token_jwt')
        if(token != null){
            return true
        }
        else{
            return false
        }
    }
    catch{
        return false
    }  
}
function RoutesPrivate({component: Component, ...rest}){
    const v = Resolver()
    return (
            <Route 
                {...rest} 
                render={( ) => v?
                     (<Component {...rest}/>) : 
                     (<Redirect to='/login'/>)}/>)
}
export default RoutesPrivate