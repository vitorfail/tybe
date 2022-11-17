import axios from "axios";
const Axios = axios.create({
    baseURL:"http://localhost:8080/"
})
Axios.interceptors.request.use(
    config =>{
        const token = localStorage.getItem('token_jwt')
        if(token){
            config.headers['Authorization'] = 'Bearer '+ token
        }
        return config
    }
)
export default Axios