import React from 'react'
const Form = () => {
  return (
   <>
     <form action="">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" id="fullname" />

            <label htmlFor="Username">Username</label>
            <input type="text" name="Username" id="Username" />

            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
            
            <label htmlFor="Birth">Date of Birth </label>
            <input type="date" name="Birth" id="Birth" />
            
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            
            <label htmlFor="confirmedPassword">Confirmed Password</label>
            <input type="password" name="confirmedPassword" id="confirmedPassword" />
        
        <button className='Loginbtn'>Login</button>
        <div className="divider">
            <span>OR Register in With </span>
        </div>
        <div className="optionLogin">
            <button className="googlebtn"><i className='fab fa-google'></i> Google</button>
        </div>
    </form>
   </>
  )
}

export default Form