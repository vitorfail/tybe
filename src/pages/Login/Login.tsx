import React,{useState, useEffect} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import Axios from '../../Axios'
import { Contexto } from '../../context'

library.add(faFacebookF); 
export default function Login(){
    const { setmodalAviso} = React.useContext(Contexto)
    const [log, setlog] = useState<boolean>(true)
    const [username, setusername] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [passwordCopy, setpasswordCopy] = useState<string>('')
    const history = useHistory()
    const [errorSenha, seterrorSenha] = useState<boolean>(false)
    const [errorPreench, seterrorPreench] = useState<boolean>(false)
    const [errorUser, seterrorUser] = useState<boolean>(false)
    const [errorInternet, seterrorInternet] = useState<boolean>(false)
    useEffect(() => {
        seterrorSenha(false)
        seterrorPreench(false)
        seterrorUser(false)
        seterrorInternet(false)
    }, [seterrorSenha, seterrorPreench, seterrorUser,seterrorInternet])

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
                setTimeout(() => {seterrorInternet(true)}, 100);
            })    
        }
        else{
            setTimeout(() => {seterrorPreench(true)}, 100);
        }
    }
    function cadastro(){
        seterrorSenha(false)
        seterrorPreench(false)
        seterrorInternet(false)
        seterrorUser(false)
        if(password === '' || username === '' || passwordCopy === ''){
            setTimeout(() => {seterrorPreench(true)}, 100);
        }
        else{
            if(password === passwordCopy){
                Axios.post('api/cadastro', {user: username, pass: password}
                ).then(res => {
                    if(res.data !== 'Not found'){
                        setmodalAviso(true)
                    }
                    else{
                        setTimeout(() => {seterrorUser(true)}, 100);
                    }
                }).catch(error =>{
                    setTimeout(() => {seterrorInternet(true)}, 100)
                })  
            }
            else{
                setTimeout(() => {seterrorSenha(true)}, 100)
            }
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
                                <a target="_blank" href="https://www.facebook.com/ng.cash.face"></a>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </div>
                            <div className='img'>
                                <a target="_blank" href="https://ng.cash/"></a>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </div>
                            <div className='img'>
                                 <a target="_blank" href="https://twitter.com/NGCASH_"></a>                               
                                <FontAwesomeIcon icon={faTwitter}/>                            
                            </div>
                        </div>
                        <div className='mudar'>
                            <h3 onClick={() => setlog(false)}>Não tem conta?</h3>
                        </div>
                        <h2 className={errorPreench? 'preencha show': 'preencha'} >Preencha todos os campos*</h2>
                        <h2 className={errorSenha? 'senha show': 'senha'} >Senha ou o email estão errados</h2>
                        <h2 className={errorInternet? 'internet show': 'internet'} >Error, verifique sua internet e tente denovo ou entre em contato conosco</h2>
                        <div className='entrada'>
                            <input onChange={(event) => setusername(event.target.value)} placeholder='user'></input>
                            <label className='nome'>Username</label>
                        </div>
                        <div className='entrada'>
                            <input type='password' onChange={(event) => setpassword(event.target.value)} placeholder='senha'></input>
                            <label className='nome'>Password</label>
                        </div>
                        <button onClick={() => login()}>Entrar</button>
                    </div>: <div className='logar'>
                        <h1>Cadastrar</h1>
                        <div className='icones'>
                            <div className='img'>
                                <a target="_blank" href="https://www.facebook.com/ng.cash.face"></a>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </div>
                            <div className='img'>
                                <a target="_blank" href="https://ng.cash/"></a>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </div>
                            <div className='img'>
                                <a target="_blank" href="https://twitter.com/NGCASH_"></a>
                                <FontAwesomeIcon icon={faTwitter}/>                            
                            </div>
                        </div>
                        <div className='mudar'>
                            <h3 onClick={() => setlog(true)}>Já tem uma conta?</h3>
                        </div>
                        <h2 className={errorPreench? 'preencha show': 'preencha'} >Preencha todos os campos*</h2>
                        <h2 className={errorUser? 'user show': 'user'} >Esse usuário já existe escolha outro*</h2>
                        <h2 className={errorSenha? 'senha show': 'senha'} >Sua senhas não estão iguais</h2>
                        <h2 className={errorInternet? 'internet show': 'internet'} >Error, verifique sua internet e tente denovo ou entre em contato conosco</h2>
                        <div className='entrada'>
                            <input onChange={(event) => setusername(event.target.value)} placeholder='username'></input>
                            <label className='nome'>Username</label>
                        </div>
                        <div className='entrada'>
                            <input type='password' onChange={(event) => setpassword(event.target.value)} placeholder='password'></input>
                            <label className='nome'>Senha</label>
                        </div>
                        <div className='entrada'>
                            <input type='password' onChange={(event) => setpasswordCopy(event.target.value)} placeholder='password'></input>
                            <label className='nome'>Repetir senha</label>
                        </div>
                        <button onClick={() => cadastro()} >Cadastrar</button>
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
