import React,{useState} from 'react'
import './Login.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 
export default function Login(){
    const [log, setlog] = useState<boolean>(true)
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
                        <input placeholder='username'></input>
                        <input placeholder='password'></input>
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
                        <input placeholder='username'></input>
                        <input placeholder='password'></input>
                        <input placeholder='password'></input>
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
