// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import hero3 from '../assets/Images/Hero_img/hero3.png'
import React, { useRef } from 'react';

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function Hero() {


    // animation part starts here 


    const heroImg = useRef(null);// Create a reference to the hero image
    useGSAP(() => {
        gsap.from(
            heroImg.current,
            {
                opacity: 1,
                x: 900,
                // scale: 2,
                duration: 1,
                delay: 1,
                ease: 'power1',
            },
        )
    })

    const schoolName = useRef(null);// Create a reference to the hero schoolname text
    useGSAP(() => {
        gsap.from(schoolName.current, {
            x: -900,
            duration: 1,
            delay: 1,
            opacity: 1,
            ease: 'power1'

        })
    })








    return (
        <>

            <div className="container">
                <div className="row row-1 align-items-center my-5 py-6 mx-1" >

                    {/* text area */}

                    <div className="col-lg-6" ref={schoolName}>
                        <div className="lc-block mb-2"  >
                            <div editable="rich">

                                <h2 className="fw-bold  fs-1  " >
                                    Paliwal High senior sec. school
                                </h2>
                            </div>
                        </div>

                        <div className="lc-block mb-3">
                            <div editable="rich">
                                <h3 className="fs-4">
                                    Baldevganj, Kosikalan , Mathura - U.P
                                </h3>
                            </div>
                        </div>

                        <div className="lc-block mb-3">
                            <div editable="rich">
                                <p className="lead fs-6">
                                    Quickly design and customize responsive mobile-first sites with
                                    Bootstrap, the world’s most popular front-end open source toolkit,
                                    featuring Sass variables and mixins, responsive grid system,
                                    extensive prebuilt components, and powerful JavaScript plugins.
                                </p>
                            </div>
                        </div>

                        {/* <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start"></div> */}


                        <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                            <button className="btn-hover color-9" href="#" role="button">
                                Apply now
                            </button>

                        </div>

                    </div>

                    {/* image area  */}

                    <div className="col-10 mx-auto col-sm-9 col-lg-6 my-5">
                        <img
                            ref={heroImg}
                            src={hero3}
                            className="d-block mx-lg-auto fluid"
                            alt="hero-img"
                        // loading="lazy"
                        />
                    </div>

                </div>
            </div>

        </>

    )
}

export default Hero



