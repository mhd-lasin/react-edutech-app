import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home/Home.jsx'
import Plans from '../pages/Plans/Plans.jsx'
import Courses from '../pages/Courses/Courses.jsx'
import AboutUs from '../pages/AboutUs/AboutUs.jsx'
import Contact from '../pages/ContactUs/Contact.jsx'
import SupportUs from '../pages/SupportUs/SupportUs.jsx'

const LayoutRoutes = () => {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/services' element={<Plans />}/>
                <Route path='/courses' element={<Courses />}/>
                <Route path='/about' element={<AboutUs />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/support' element={<SupportUs />}/>
            </Routes>
            <Footer />
        </Router>
    </div>
  )
}

export default LayoutRoutes