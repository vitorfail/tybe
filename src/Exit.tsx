import { faWindows } from "@fortawesome/free-brands-svg-icons";

export default function sair(){
    localStorage.removeItem('token_jwt');
    window.location.reload();
}