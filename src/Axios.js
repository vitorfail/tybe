import axios from "axios";
const Axios = axios.create({
    baseURL: process.env.REACT_APP_SERVER
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