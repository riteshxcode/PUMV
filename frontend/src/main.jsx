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

// Dummy pages for dropdowns (replace with actual components)
// import PrincipalMessage from './Components/PriencpleMessage'
// import MissionVision from './Pages/MissionVision'
// import Admissions from './Pages/Admissions'
// import FeeStructure from './Pages/FeeStructure'
// import Curriculum from './Pages/Curriculum'
// import Faculty from './Pages/Faculty'
// import Library from './Pages/Library'
// import Labs from './Pages/Labs'
// import Transport from './Pages/Transport'
// import Gallery from './Pages/Gallery'
// import NoticeBoard from './Pages/NoticeBoard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SchoolNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/principal-message" element={<PrincipalMessage />} /> */}
        {/* <Route path="/mission-vision" element={<MissionVision />} /> */}
        {/* <Route path="/admissions" element={<Admissions />} /> */}
        {/* <Route path="/fee-structure" element={<FeeStructure />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/library" element={<Library />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
