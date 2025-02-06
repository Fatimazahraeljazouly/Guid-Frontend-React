import React, { useState } from 'react'
import { Link } from 'react-router'
import { users } from '../../Data/Data';
import { ToastContainer,toast,Bounce } from 'react-toastify';
import { useAuth } from '../../../Utility/UserAuth';
import { LoginApi } from '../../../Services/Api';
const Form = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const {logIn}=useAuth()
  const Handlcheck= async(event:React.FormEvent)=>{
    event.preventDefault(); 
 /*   try{
    const response= await LoginApi(email,password);
          const { token, user } = response.data; // Extract token and user details
          logIn(user,token);
   
    logIn({ id:response.data.id, email: response.data.email,fullname:response.data.username,role:response.data.role},response.data.token)
    toast.error('incorrect password or email', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });

   }catch(e){
    console.error('failed login cuz of ',e);
    
    toast.error('incorrect password or email', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      throw e;
   } */
  const user=users.filter((item)=>item.email===email && item.password===password); 
    if (user.length === 0) {
         toast.error(`Invalid Email or Password `, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
    } else {
        const{id,fullname,email,role}=user[0]
        const userDAta={id:id,fullname:fullname,email:email,role:role}
        logIn( userDAta,user[0].token)
    }  
}
  return (
   <>
   <ToastContainer/>
     <form onSubmit={Handlcheck}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email"  onChange={(e)=>{setEmail(e.target.value);console.log(email)}}/>
                        <label htmlFor="password">Password <Link to={'/'}><span>(Forget Password?)</span></Link></label>
                        <input type="password" name="password" id="password" autoComplete="current-password" onChange={(e)=>{setPassword(e.target.value);console.log(password)}} />
                    <button type='submit' className='Loginbtn'>Login</button>
                    <div className="divider">
                        <span>OR Login in With </span>
                    </div>
                    <div className="optionLogin">
                        <button  className="googlebtn"><i className='fab fa-google'></i> Google</button>
                    </div>


                </form>
   </>
  )
}

export default Form