import React from 'react'
import Heading from '../Home/Heading'

import './profile.css'
import { useAuth } from '../../Utility/UserAuth'
const Profile = () => {
      return (
    <>
    <section className="profile">
        <div className="head">
            <h1>Profile</h1>
            <Heading title='Welcome in Your Profile '/>
        </div>
    </section>
        
    </>
  )
}

export default Profile