var h = require('react-router-dom')
export default function sair(){
    alert('Seu usuário não está autenticado. Vamos mandar você de volta para o login')
    localStorage.removeItem('token_jwt');
    h.push('/')
}