import axios  from "axios";
const baseURl='http://localhost:8080/api'
export const LoginApi=async(email:string,password:string)=>{
    try{
    const response=await axios.post(`${baseURl}/login`,{email,password})
    return response.data
    }catch(e){
    console.error('Login Failed cuz of ',e)
    throw e;   
    }
}