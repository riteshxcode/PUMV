// import './App.css'
import React, { useState, useRef, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleTransitionEnd = () => {
        if (menuRef.current) {
            menuRef.current.style.removeProperty('transition');
        }
    };

    useEffect(() => {
        const menu = menuRef.current;

        if (menu) {
            const dropdownArrows = menu.querySelectorAll('.dropdown > i');
            dropdownArrows.forEach((arrow, index) => {
                arrow.addEventListener('click', () => {
                    arrow.closest('.dropdown').classList.toggle('active');
                });

                // Cleanup event listeners when component unmounts
                return () => {
                    arrow.removeEventListener('click', () => {
                        arrow.closest('.dropdown').classList.toggle('active');
                    });
                };
            });
        }
    }, [menuOpen]);




    return (
        <>
            <div className="maincontainer">
                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <img src="https://png.pngtree.com/png-vector/20211011/ourmid/pngtree-school-logo-png-image_3977360.png" alt="logo" />
                            <a to="/" className="logotext">Paliwal</a>

                        </div>
                        <nav
                            className={`menu ${menuOpen ? 'open' : ''}`}
                            ref={menuRef}
                            style={{ transition: menuOpen ? 'transform 0.5s ease' : 'none' }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            <div className="head">
                                <div className="logo">
                                    <img src="https://png.pngtree.com/png-vector/20211011/ourmid/pngtree-school-logo-png-image_3977360.png" alt="logo" />
                                </div>
                                <button
                                    type="button"
                                    className="close-menu-btn"
                                    onClick={toggleMenu}
                                />
                            </div>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>

                                <li className="dropdown">
                                    <a href="#">Admissions</a>
                                    <i className="fa-solid fa-chevron-down"></i>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">
                                                <span>Admission Process</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Admission Criteria</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Admission Schedule</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Selected Candidate Lists</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Fee Structure</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a href="#"> Academics</a>
                                    <i className="fa-solid fa-chevron-down"></i>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">
                                                <span>Infrastructure</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Achievements</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Curricular Activities</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Principal’s Message</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Chairman’s Message</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Affiliation</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Faculty</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a href="#">Dashbord</a>
                                    <i className="fa-solid fa-chevron-down"></i>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">
                                                <span>about team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>testimonail</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>principle msg</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>non mirch</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>khatai</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">media gallery</a>
                                </li>

                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">about</a>
                                </li>
                                <li>
                                    <a href="/login">apply now</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="header-right">
                            <button
                                type="button"
                                className="open-menu-btn"
                                onClick={toggleMenu}
                            >
                                <span className="line line-1"></span>
                                <span className="line line-2"></span>
                                <span className="line line-3"></span>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}

export default App
