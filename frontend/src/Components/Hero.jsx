import 'bootstrap/dist/css/bootstrap.min.css'
import hero3 from '../assets/Images/Hero_img/hero3.png'
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function Hero() {
    const heroImg = useRef(null);
    const schoolName = useRef(null);
    const tagline = useRef(null);

    useGSAP(() => {
        gsap.from(heroImg.current, {
            opacity: 0,
            x: 200,
            duration: 1.2,
            delay: 0.5,
            ease: 'power3.out',
        });

        gsap.from(schoolName.current, {
            opacity: 0,
            y: -100,
            duration: 1.2,
            delay: 0.3,
            ease: 'power3.out',
        });

        gsap.from(tagline.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 0.8,
            ease: 'power3.out',
        });
    });

    return (
        <section className="hero-section d-flex align-items-center text-light" 
                 style={{ 
                     minHeight: '100vh', 
                     background: 'linear-gradient(135deg, rgb(18 51 86), rgb(255 255 255))', 
                     overflow: 'hidden' 
                 }}>
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Text Area */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 ref={schoolName} className="fw-bold display-4 mb-3">
                            Paliwal High Senior Secondary School
                        </h1>
                        <h3 ref={tagline} className="fw-light mb-4">
                            Baldevganj, Kosikalan, Mathura - U.P
                        </h3>
                        <p className="lead mb-4">
                            Empowering students with knowledge, values, and creativity to build a brighter future.
                        </p>
                        <button style={{background:'var(--brand-color)',color:'var(--primary-color)'}} className="btn  btn-lg px-4 py-2 fw-bold shadow-lg">
                            Apply Now
                        </button>
                    </div>

                    {/* Image Area */}
                    <div className="col-lg-6 text-center mt-5 mt-lg-0">
                        <img
                            ref={heroImg}
                            src={hero3}
                            className="img-fluid"
                            alt="School campus"
                            style={{ maxHeight: '500px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
