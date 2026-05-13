import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/CSS/SchoolNavbar.css'
import '../src/assets/CSS/Facilities_Infrastructure.css'
import '../src/assets/CSS/theme.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import ContactUs from './Pages/ContactUs'
import Footer from './Components/Footer'
import SchoolNavbar from './Components/SchoolNavbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SchoolNavbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />

    </BrowserRouter >


  </React.StrictMode>
)
