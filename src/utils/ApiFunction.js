import axios from "axios";

export const api = axios.create({
    baseURL : "http://localhost:8000" 
})

export async function predict(domain){
    try{
        const response = await api.post("/api/v1/predict/",domain)
        if(response.status >= 200 && response.status < 300){
            return response.data
        }else{
            return null
        }
    }catch(error){
        if(error.response && error.response.data){
            throw new Error(error.response.data)
        }else{
            throw new Error(`Enter URL error: ${error.message}`)
        }
    }    
}