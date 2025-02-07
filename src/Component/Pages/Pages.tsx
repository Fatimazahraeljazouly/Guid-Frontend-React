import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Header from '../Common/Header/Header'
import Home from '../Home/Home'
import Footer  from '../Common/Footer/Footer'
import About from '../About/About'
import Destination from '../Destination/Destination'
import Contact from '../Contact/Contact'
import Details from '../DestinationDetails/Details'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import Profile from '../Profile/Profile'
import { AuthProvider} from '../../Utility/UserAuth'
import ProtectedRoute from '../../Services/ProtectedRoute'
const Pages = () => {
  return (
    <>  
      <Router>
        <AuthProvider>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about-us' element={<About/>}></Route>
            <Route path='/destination' element={<Destination/>}></Route>
            <Route path='/contact-us' element={<Contact/>} ></Route>
            <Route path='/details-destination' element={<Details/>} ></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route element={<ProtectedRoute/>}>
                <Route path='/my-profile' element={<Profile/>}></Route>
            </Route>
        </Routes>

      <Footer/>
      </AuthProvider>
      </Router>
    </>
  )
}

export default Pages
