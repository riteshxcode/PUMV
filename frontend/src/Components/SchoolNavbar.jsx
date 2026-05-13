import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/SchoolNavbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {
            title: "About Us",
            submenu: [
                { title: "Our School", link: "/" },
                { title: "Principal Message", link: "/" },
                { title: "Mission & Vision", link: "/" },
            ],
        },
        {
            title: "Admissions",
            submenu: [
                { title: "Admission Process", link: "/" },
                {
                    title: "Forms",
                    submenu: [
                        { title: "LKG Admission Form", link: "/" },
                        { title: "Class 1-5 Form", link: "/" },
                        { title: "Class 6-12 Form", link: "/" },
                    ],
                },
                { title: "Fee Structure", link: "/" },
            ],
        },
        {
            title: "Academics",
            submenu: [
                { title: "Curriculum", link: "/" },
                {
                    title: "Departments",
                    submenu: [
                        { title: "Primary Wing", link: "/" },
                        { title: "Middle Wing", link: "/" },
                        { title: "Senior Wing", link: "/" },
                    ],
                },
                { title: "Faculty", link: "/" },
            ],
        },
        {
            title: "Facilities",
            submenu: [
                { title: "Library", link: "/" },
                { title: "Labs", link: "/" },
                { title: "Transport", link: "/" },
            ],
        },
    ];

    return (
        <>
            {/* TOP BAR */}
            <div className="topbar">
                <div className="topbar-left">
                    <span>📞 +91 9876543210</span>
                    <span>✉️ school@gmail.com</span>
                </div>

                <button className="admission-btn">Admission Open</button>
            </div>

            {/* NAVBAR */}
            <header className="navbar">
                <div className="navbar-container">
                    {/* LOGO */}
                    <div className="logo">
                        <Link to="/">
                            <img
                                src="https://i.postimg.cc/dVTd51Kn/logo2.png"
                                alt="school logo"
                            />
                        </Link>
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="desktop-nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            {navItems.map((item, index) => (
                                <li key={index} className="dropdown">
                                    <span>{item.title}</span>

                                    <ul className="dropdown-menu">
                                        {item.submenu.map((sub, i) => (
                                            <li
                                                key={i}
                                                className={sub.submenu ? "nested-dropdown" : ""}
                                            >
                                                <Link to={sub.link || "/"}>{sub.title}</Link>

                                                {sub.submenu && (
                                                    <ul className="nested-menu">
                                                        {sub.submenu.map((nested, j) => (
                                                            <li key={j}>
                                                                <Link to={nested.link}>
                                                                    {nested.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}

                            <li>
                                <Link to="/">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/">Notice Board</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* MOBILE BUTTON */}
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(true)}
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* OVERLAY */}
            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* MOBILE DRAWER */}
            <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
                <div className="drawer-header">
                    <h3>Menu</h3>
                    <button onClick={() => setMenuOpen(false)}>✕</button>
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>

                    {navItems.map((item, index) => (
                        <li key={index} className="mobile-dropdown">
                            <span>{item.title}</span>

                            <ul className="mobile-submenu">
                                {item.submenu.map((sub, i) => (
                                    <li key={i}>
                                        <Link to={sub.link || "/"}>{sub.title}</Link>

                                        {sub.submenu && (
                                            <ul className="mobile-nested">
                                                {sub.submenu.map((nested, j) => (
                                                    <li key={j}>
                                                        <Link to={nested.link}>{nested.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}

                    <li><Link to="/">Gallery</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;