import React from 'react'

const Form = () => {
  return (
    <>
        <form action="" method='post'>
            <div className="name grid2">
                <label htmlFor="">Full name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="email grid2">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="subject grid2">
                <label htmlFor="">Subject</label>
                <input type="text" name="subject" id="subject" />
            </div>
            <div className="message grid2">
                <label htmlFor="">How can we help you?  </label>
                <textarea name="message" id="message" cols={50} rows={10}></textarea>
            </div>
            <div className="submit">
                     <button type="submit">Send</button>
            </div>
        </form>  
    </>
  )
}

export default Form
