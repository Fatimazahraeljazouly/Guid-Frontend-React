import React from 'react'
import { Link } from 'react-router'
const Form = () => {
  return (
   <>
     <form action="">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Password <Link to={'/'}><span>(Forget Password?)</span></Link></label>
                        <input type="password" name="password" id="password" />
                    <button className='Loginbtn'>Login</button>
                    <div className="divider">
                        <span>OR Login in With </span>
                    </div>
                    <div className="optionLogin">
                        <button className="googlebtn"><i className='fab fa-google'></i> Google</button>
                    </div>


                </form>
   </>
  )
}

export default Form