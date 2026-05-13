import React from "react";
import "../assets/CSS/Newslatter.css";

const stats = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#378ADD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        iconClass: "icon-blue",
        number: "2,400+",
        label: "Students enrolled",
        badge: "+12% this year",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        iconClass: "icon-teal",
        number: "98%",
        label: "Board exam pass rate",
        badge: "Class of 2024",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        iconClass: "icon-amber",
        number: "40+",
        label: "Awards & recognitions",
        badge: "Since 2010",
    },
];

function Newsletter() {
    return (
        <section className="newsletter-section">

            {/* Dot pattern overlay */}
            <svg className="newsletter-dots" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="white" />
                    </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#dots)" />
            </svg>

            <div className="newsletter-inner">

                {/* Left: Text + Buttons */}
                <div className="newsletter-left">
                    <div className="newsletter-badge">
                        <div className="newsletter-badge-dot" />
                        <span className="newsletter-badge-text">Admissions open 2025–26</span>
                    </div>

                    <h2 className="newsletter-heading">
                        Shape your child's <br />
                        <span className="newsletter-heading-accent">future with us</span>
                    </h2>

                    <p className="newsletter-subtext">
                        Join a community of 2,000+ students thriving in academics, sports,
                        and the arts. Limited seats available — apply before they're gone.
                    </p>

                    <div className="newsletter-btn-group">
                        <button className="nl-btn-primary">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0C447C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                            Apply now
                        </button>
                        <button className="nl-btn-outline">Book a campus tour</button>
                    </div>
                </div>

                {/* Right: Stat Cards */}
                <div className="newsletter-stats">
                    {stats.map((stat, i) => (
                        <div className="stat-card" key={i}>
                            <div className={`stat-icon ${stat.iconClass}`}>
                                {stat.icon}
                            </div>
                            <div className="stat-info">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                            <div className="stat-badge">{stat.badge}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Newsletter;