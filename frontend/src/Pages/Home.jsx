import React from 'react'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'
import Faq from '../Components/Faq'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import Facilities_Infrastructure from '../Components/Facilities_Infrastructure'
import AboutUs from './AboutUs'
import Our_Archeivements from '../Components/Our_Archeivements'
import Our_Toppers from '../Components/Our_Toppers'
import PriencpleMessage from '../Components/PriencpleMessage'
import Aboutuscompo from '../Components/Aboutuscompo' 

function Home() {
    return (

        <>
            <Hero />

            <Aboutuscompo />
            <Our_Toppers/>
 
            <Facilities_Infrastructure />
            <Faq />
            <PriencpleMessage/>
            <Testimonial />
            <Newsletter />
        </>
    )
}

export default Home