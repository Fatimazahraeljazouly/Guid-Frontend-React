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
const Pages = () => {
  return (
    <>
      
      <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about-us' element={<About/>}></Route>
            <Route path='/destination' element={<Destination/>}></Route>
            <Route path='/contact-us' element={<Contact/>} ></Route>
            <Route path='/details-destination' element={<Details/>} ></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>

      <Footer/>
      </Router>
    </>
  )
}

export default Pages
