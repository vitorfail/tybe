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
    const [errorSenha, seterrorSenha] = useState<boolean>(false)
    const [errorPreench, seterrorPreench] = useState<boolean>(false)
    const [errorInternet, seterrorInternet] = useState<boolean>(false)
    function login(){
        seterrorSenha(false)
        seterrorPreench(false)
        seterrorInternet(false)
        if(password !== ''){
            Axios.post('api/login', {user: username, pass: password}
            ).then(res => {
                if(res.data !== 'Not found' && res.data !== 'nada'){
                    localStorage.setItem('token_jwt', res.data)
                    history.push('/')
                }
                else{
                    setTimeout(() => {seterrorSenha(true)}, 100);
                }
            }).catch(error =>{
                console.log(error)
            })    
        }
        else{
            setTimeout(() => {seterrorPreench(true)}, 100);
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
                        <h2 className={errorPreench? 'preencha show': 'preencha'} >Preencha todos os campos*</h2>
                        <h2 className={errorSenha? 'senha show': 'senha'} >Senha ou o email estão errados</h2>
                        <h2 className={errorInternet? 'internet show': 'internet'} >Error, verifique sua internet e tente denovo ou entre em contato conosco</h2>
                        <input onChange={(event) => setusername(event.target.value)} placeholder='username'></input>
                        <input onChange={(event) => setpassword(event.target.value)} placeholder='password'></input>
                        <button onClick={() => login()}>Entrar</button>
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
                        <button >Cadastrar</button>
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
