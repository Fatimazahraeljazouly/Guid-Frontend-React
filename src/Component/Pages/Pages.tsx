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
const Pages = () => {
  return (
    <>
      
      <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about-us' element={<About/>}></Route>
        </Routes>

      <Footer/>
      </Router>
    </>
  )
}

export default Pages
