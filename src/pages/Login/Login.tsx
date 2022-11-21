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
    const { setmodalAviso, setloading} = React.useContext(Contexto)
    const [log, setlog] = useState<boolean>(true)
    const [username, setusername] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [passwordCopy, setpasswordCopy] = useState<string>('')
    const history = useHistory()
    const [errorSenha, seterrorSenha] = useState<boolean>(false)
    const [errorPreench, seterrorPreench] = useState<boolean>(false)
    const [errorUser, seterrorUser] = useState<boolean>(false)
    const [errorInternet, seterrorInternet] = useState<boolean>(false)
    const [errorFormatoSenha, seterrorFormatoSenha] = useState<boolean>(false)
    const [errorFormatoUser, seterrorFormatoUser] = useState<boolean>(false)

    useEffect(() => {
        seterrorSenha(false)
        seterrorPreench(false)
        seterrorInternet(false)
        seterrorUser(false)
        seterrorFormatoSenha(false)
        seterrorFormatoUser(false)
    }, [seterrorSenha, seterrorPreench, seterrorUser,seterrorInternet])
    function check_senha(d:string){
        var regex = /[0-9]/
        var test1 = regex.test(d)
        var test2 = /[A-Z]/.test(d);
        if(d.length >= 8 || test1 === true || test2 === true){
            return true
        }
        else{
            return false
        }
    }
    function login(){
        seterrorSenha(false)
        seterrorPreench(false)
        seterrorInternet(false)
        setloading(true)
        if(password !== ''){
            Axios.post('api/login', {user: username, pass: password}
            ).then(res => {
                if(res.data !== 'Not found' && res.data !== 'nada'){
                    localStorage.setItem('token_jwt', res.data)
                    setloading(false)
                    history.push('/')
                }
                else{
                    setloading(false)
                    setTimeout(() => {seterrorSenha(true)}, 100);
                }
            }).catch(error =>{
                setloading(false)
                setTimeout(() => {seterrorInternet(true)}, 100);
            })    
        }
        else{
            setloading(false)
            setTimeout(() => {seterrorPreench(true)}, 100);
        }
    }
    function cadastro(){
        seterrorSenha(false)
        seterrorPreench(false)
        seterrorInternet(false)
        seterrorUser(false)
        seterrorFormatoSenha(false)
        seterrorFormatoUser(false)
        setloading(true)
        if(password === '' || username === '' || passwordCopy === ''){
            setloading(false)
            setTimeout(() => {seterrorPreench(true)}, 100);
        }
        else{
            if(username.length <3){
                setloading(false)
                setTimeout(() => {seterrorFormatoUser(true)}, 100);
            }
            else{
                if(check_senha(password) === false){
                    setloading(false)
                    setTimeout(() => {seterrorFormatoSenha(true)}, 100);
                }
                else{
                    if(password === passwordCopy){
                        Axios.post('api/cadastro', {user: username, pass: password}
                        ).then(res => {
                            if(res.data !== 'Not found'){
                                setloading(false)
                                setmodalAviso(true)
                            }
                            else{
                                setloading(false)
                                setTimeout(() => {seterrorUser(true)}, 100);
                            }
                        }).catch(error =>{
                            setloading(false)
                            setTimeout(() => {seterrorInternet(true)}, 100)
                        })  
                    }
                    else{
                        setloading(false)
                        setTimeout(() => {seterrorSenha(true)}, 100)
                    }
        
                }
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
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ng.cash.face"> </a>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </div>
                            <div className='img'>
                                <a target="_blank" rel="noreferrer" href="https://ng.cash/"> </a>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </div>
                            <div className='img'>
                                 <a target="_blank" rel="noreferrer" href="https://twitter.com/NGCASH_"> </a>                               
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
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ng.cash.face"> </a>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </div>
                            <div className='img'>
                                <a target="_blank" rel="noreferrer" href="https://ng.cash/"> </a>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </div>
                            <div className='img'>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/NGCASH_"> </a>
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
                        <h2 className={errorFormatoSenha? 'formato--senha show': 'formato--senha'} >A senha deve conter no mínimo 8 caracteres, um número e uma letra maiúscula</h2>                        
                        <h2 className={errorFormatoUser? 'formato--user show': 'formato--user'} >O usuário deve conter no mínimo 3 caracteres</h2>
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
                            <h3>Caso não tenha conta tente se cadastrar</h3>
                            <button onClick={() => setlog(false)}>Cadastrar</button>
                        </div>:
                        <div className='login--display'>
                            <h1>Login</h1>
                            <h3>Caso já tenha uma conta efetue o login</h3>
                            <button onClick={() => setlog(true)}>Entrar</button>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
