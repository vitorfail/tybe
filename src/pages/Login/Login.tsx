import React,{useState} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import Axios from '../../Axios'

library.add(faFacebookF); 
export default function Login(){
    const [log, setlog] = useState<boolean>(true)
    const [username, setusername] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [passwordCopy, setpasswordCopy] = useState<string>('')
    const history = useHistory()
    function login(){
        if(password === passwordCopy && password !== ''){
            Axios.post('api/cadastro', {user: username, pass: password}
            ).then(res => {
                if(res.data !== 0 && res.data !== 'nada'){
                    localStorage.setItem('token_jwt', res.data)
                    history.push('/')
                }
            }).catch(error =>{
                console.log(error)
            })    
        }
        else{

        }
    }
    return(
        <div className='login'>
            <div className='menu'>
                <div className='lado--esquerdo'>
                    {log? <div className='logar'>
                        <h1>Login</h1>
                        <div className='icones'>
                            <div className='img'>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </div>
                            <div className='img'>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </div>
                            <div className='img'>
                                <FontAwesomeIcon icon={faTwitter}/>                            
                            </div>
                        </div>
                        <input onChange={(event) => setusername(event.target.value)} placeholder='username'></input>
                        <input onChange={(event) => setpassword(event.target.value)} placeholder='password'></input>
                        <button>Entrar</button>
                    </div>: <div className='logar'>
                        <h1>Cadastrar</h1>
                        <div className='icones'>
                            <div className='img'>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </div>
                            <div className='img'>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </div>
                            <div className='img'>
                                <FontAwesomeIcon icon={faTwitter}/>                            
                            </div>
                        </div>
                        <input onChange={(event) => setusername(event.target.value)} placeholder='username'></input>
                        <input onChange={(event) => setpassword(event.target.value)} placeholder='password'></input>
                        <input onChange={(event) => setpasswordCopy(event.target.value)} placeholder='password'></input>
                        <button>Cadastrar</button>
                    </div>
                    }
                </div>
                <div className='lado--direito'>
                    {log?
                        <div className='cadastro--display'>
                            <h1>Cadastro</h1>
                            <h3>Caso já tenha uma conta efetue o login</h3>
                            <button onClick={() => setlog(false)}>Logar</button>
                        </div>:
                        <div className='login--display'>
                            <h1>Logar</h1>
                            <h3>Caso não tenha conta tente se cadastrar</h3>
                            <button onClick={() => setlog(true)}>Cadastrar</button>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
