import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/SchoolNavbar.css";

function SchoolNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "About Us",
      submenu: [
        { title: "Our School", link: "/about-us" },
      ],
    },
    {
      title: "Admissions",
      submenu: [
        { title: "Admission Process", link: "/admissions" },
        { title: "Fee Structure", link: "/fee-structure" },
      ],
    },
    {
      title: "Academics",
      submenu: [
        { title: "Curriculum", link: "/curriculum" },
        { title: "Faculty", link: "/faculty" },
      ],
    },
    {
      title: "Facilities",
      submenu: [
        { title: "Library", link: "/library" },
        { title: "Labs", link: "/labs" },
        { title: "Transport", link: "/transport" },
      ],
    },
    { title: "Gallery", link: "/gallery" },
    { title: "Notice Board", link: "/notice-board" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "Login", link: "/login" },
  ];

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://i.postimg.cc/dVTd51Kn/logo2.png"
                alt="school logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              {navItems.map((item, index) => (
                <li key={index} className={item.submenu ? "dropdown" : ""}>
                  {item.submenu ? (
                    <>
                      <span>{item.title}</span>
                      <ul className="dropdown-menu">
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link to={sub.link}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Button */}
          <button className="menu-btn" onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </header>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>Menu</h3>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          {navItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <>
                  <span>{item.title}</span>
                  <ul className="mobile-submenu">
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link to={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={item.link}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SchoolNavbar;
