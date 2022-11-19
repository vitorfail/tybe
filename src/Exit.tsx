import { faWindows } from "@fortawesome/free-brands-svg-icons";

export default function sair(){
    alert('Seu usuário não está autenticado. Vamos mandar você de volta para o login')
    localStorage.removeItem('token_jwt');
    window.location.reload();
}