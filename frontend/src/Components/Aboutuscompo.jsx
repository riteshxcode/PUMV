import React, { useEffect, useRef, useState } from "react";
import "../assets/CSS/Aboutus.css";

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function useVisible(threshold = 0.15) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function StatCard({ icon, number, suffix, label, iconClass, delay }) {
  const [active, setActive] = useState(false);
  const ref = useRef();
  const count = useCountUp(number, 1600, active);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className={`stat-card fade-in-up ${delay}`} ref={ref}>
      <div className={`stat-icon-wrap ${iconClass}`}>{icon}</div>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function SectionDivider({ label }) {
  return (
    <div className="section-divider">
      <div className="section-divider-line"></div>
      <div className="section-label"><span className="section-label-dot"></span>{label}</div>
      <div className="section-divider-line"></div>
    </div>
  );
}

const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const IconTrend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function AboutUsSection() {
  const [heroRef, heroVisible] = useVisible(0.1);
  const [vmRef, vmVisible] = useVisible(0.15);

  return (
    <>
      <section className="about-section" id="about">
        <div className="about-container">

          {/* ── HERO ── */}
          <div className="about-grid" ref={heroRef}>
            <div className="about-left">
              <div className={`about-badge fade-in-up ${heroVisible ? "visible" : ""}`}>
                <span className="about-badge-dot"></span>About Our School
              </div>
              <h2 className={`about-heading fade-in-up delay-1 ${heroVisible ? "visible" : ""}`}>
                Paliwal<span>H.S.S School</span>
              </h2>
              <p className={`about-tagline fade-in-up delay-2 ${heroVisible ? "visible" : ""}`}>
                Mathura Kosikalan — Where knowledge meets character.
              </p>
              <p className={`about-body fade-in-up delay-3 ${heroVisible ? "visible" : ""}`}>
                At Paliwal H.S.S School, we believe education is more than academics. We nurture
                creativity, discipline, and values to shape responsible citizens of tomorrow. Our
                mission is to empower students with knowledge, confidence, and character — preparing
                them to excel in life and contribute positively to society.
              </p>
              <div className={`about-actions fade-in-up delay-4 ${heroVisible ? "visible" : ""}`}>
                <a href="#learn-more" className="btn-learn">Learn More <IconArrow /></a>
                <a href="#admissions" className="btn-secondary-link">Admissions Open →</a>
              </div>
            </div>

            <div className="about-right">
              <div className="stats-top">
                <StatCard icon={<IconUsers />} number={1200} suffix="+" label="Students" iconClass="icon-blue" delay="delay-2" />
                <StatCard icon={<IconBook />} number={80} suffix="+" label="Teachers" iconClass="icon-green" delay="delay-3" />
                <StatCard icon={<IconTrend />} number={98} suffix="%" label="Success Rate" iconClass="icon-gold" delay="delay-4" />
              </div>
              <div className={`info-cards fade-in-up delay-4 ${heroVisible ? "visible" : ""}`}>
                <div className="info-card">
                  <span className="info-card-icon">🎓</span>
                  <div className="info-card-title">Est. 1965</div>
                  <div className="info-card-desc">Over five decades of academic excellence and community trust.</div>
                </div>
                <div className="info-card light">
                  <span className="info-card-icon">🏅</span>
                  <div className="info-card-title">Board Affiliated</div>
                  <div className="info-card-desc">Recognized by the M.P. Board of Secondary Education.</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── VISION & MISSION ── */}
          <SectionDivider label="Vision & Mission" />
          <div className="vm-grid" ref={vmRef}>
            <div className={`vm-card vision fade-in-up ${vmVisible ? "visible" : ""}`}>
              <div className="vm-tag">⭐ Our Vision</div>
              <div className="vm-title">To be the beacon of<br />transformative education</div>
              <p className="vm-text">
                We envision a school where every student discovers their fullest potential — a nurturing
                environment that fosters intellectual curiosity, moral integrity, and the courage to lead.
                We aspire to be the region's most trusted institution for holistic development.
              </p>
            </div>
            <div className={`vm-card mission fade-in-up delay-2 ${vmVisible ? "visible" : ""}`}>
              <div className="vm-tag">🎯 Our Mission</div>
              <div className="vm-title">Empower, Inspire &<br />Shape Future Leaders</div>
              <p className="vm-text">
                To deliver excellence in education by combining rigorous academics with strong values,
                sports, arts, and co-curricular activities. We are committed to creating an inclusive
                learning community where every child is celebrated and supported to succeed.
              </p>
            </div>
          </div>

       

        </div>
      </section>
    </>
  );
}