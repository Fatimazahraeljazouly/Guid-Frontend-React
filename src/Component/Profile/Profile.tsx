import React from 'react'
import Heading from '../Home/Heading'
import './profile.css'
import { useAuth } from '../../Utility/UserAuth'
const Profile = () => {
  const {userData,logOut}=useAuth()
  
  return (
    <>
    <section className="profile">
        <div className="head padding">
            <Heading title='Welcome in Your Profile '/>
        </div>
        <div className="profile-info">
            <div className="profile-image">
               <img src='https://randomuser.me/api/portraits/men/1.jpg' alt="profile" />
            </div>
            <h2>{userData.fullname}</h2>
            <div className="profile-data">                
              <div className="data">
              <p> <span>Full Name:</span> {userData.fullname}</p>
              <p><span>Phone:</span> {userData.phone}</p>
              <p><span>Email:</span> {userData.email}</p>
              <p><span>Address:</span> {userData.address}</p>
              <p><span>Gender:</span> {userData.gender}</p>
              <p><span>Age: </span>{userData.age}</p>
              <p><span>Country:</span> {userData.country}</p>
              <button className="logout" onClick={logOut}><i className="fas fa-sign-out-alt"></i>Log Out</button>

                </div>             

                 </div>


              </div>
    </section>
        
    </>
  )
}

export default Profile