import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const footerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .school-footer {
    background: #0d1b2a;
    color: #e8e8e8;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }


  .footer-top-wave {
   background: linear-gradient(360deg, #112240 15%, var(--primary-color) 70%, var(--secondary-color) 100%);
    padding: 56px 0 40px;
    border-bottom: 1px solid rgba(201, 168, 76, 0.2);
  }

  .school-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #f0d080;
    letter-spacing: 0.5px;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  .school-brand-tagline {
    font-size: 0.75rem;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #c9a84c;
    margin-bottom: 14px;
  }

  .school-brand-desc {
    font-size: 0.85rem;
    color: #9ba8b5;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .social-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.25);
    color: #c9a84c;
    font-size: 0.85rem;
    margin-right: 8px;
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .social-icons a:hover {
    background: #c9a84c;
    color: #0d1b2a;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(201,168,76,0.3);
  }

  .footer-heading {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 600;
    color: #f0d080;
    margin-bottom: 18px;
    padding-bottom: 10px;
    position: relative;
  }

  .footer-heading::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 32px; height: 2px;
    background: var(--brand-color);
    border-radius: 2px;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: 9px;
  }

  .footer-links a {
    color: #fff;
    text-decoration: none;
    font-size: 0.85rem;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .footer-links a::before {
    content: '›';
    color: #c9a84c;
    font-size: 1rem;
    line-height: 1;
    opacity: 0;
    transform: translateX(-4px);
    transition: all 0.2s ease;
  }

  .footer-links a:hover {
    color: var(--brand-color);;
    transform: translateX(4px);
  }

  .footer-links a:hover::before {
    opacity: 1;
    transform: translateX(0);
  }

  .contact-item {
    display: flex;
    gap: 12px;
    margin-bottom: 14px;
    align-items: flex-start;
  }

  .contact-icon {
    width: 32px;
    height: 32px;
    background: rgba(201,168,76,0.12);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 0.8rem;
    color: var(--brand-color);;
    margin-top: 2px;
  }

  .contact-text {
    font-size: 0.83rem;
    color: #9ba8b5;
    line-height: 1.6;
  }

  .contact-text strong {
    display: block;
    color: #d0d8e0;
    font-weight: 500;
    margin-bottom: 2px;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .footer-bottom {
    background: #000;
    padding: 18px 0;
  }

  .footer-bottom-text {
    font-size: 0.78rem;
    color: #5a6a7a;
  }

  .footer-bottom-links a {
    color: #6a7a8a;
    text-decoration: none;
    font-size: 0.78rem;
    transition: color 0.2s;
    margin-left: 20px;
  }

  .footer-bottom-links a:hover {
    color: #c9a84c;
  }

  .affiliation-badge {
       display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgb(244 180 0 / 18%);
    border: 1px solid rgb(18 51 86 / 42%);
    color: var(--brandf-color);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 20px;

  }

  .divider-dot {
    color: #c9a84c;
    margin: 0 6px;
  }

  @media (max-width: 767px) {
    .footer-top-wave { padding: 40px 0 28px; }
    .school-brand-name { font-size: 1.35rem; }
    .footer-bottom .d-flex { flex-direction: column; gap: 8px; text-align: center; }
    .footer-bottom-links a { margin-left: 10px; }
    .col-footer { margin-bottom: 32px; }
  }
`

function Footer() {
  return (
    <>
      <style>{footerStyles}</style>

      <footer className="school-footer">
        <div className="footer-top-wave">
          <div className="container">
            <div className="row g-4">

              {/* ── Column 1: Brand ── */}
              <div className="col-12 col-md-6 col-lg-3 col-footer">
                <div className="affiliation-badge">CBSE Affiliated</div>
                <div className="school-brand-name">Paliwal H.S.S School</div>
                <div className="school-brand-tagline">Nurturing Minds Since 1995</div>
                <p className="school-brand-desc">
                  A premier institution committed to holistic development of students from LKG to Class XII,
                  blending academic excellence with values and life skills.
                </p>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook" title="Facebook">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" title="Instagram">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube" title="YouTube">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42A2.78 2.78 0 0020.59 4.5C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" title="Twitter / X">
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* ── Column 2: Quick Links ── */}
              <div className="col-6 col-md-6 col-lg-2 col-footer">
                <h5 className="footer-heading">Quick Links</h5>
                <ul className="footer-links">
                  {[
                    ['Home', '#'],
                    ['About Us', '#'],
                    ['Vision & Mission', '#'],
                    ['Admissions', '#'],
                    ['Fee Structure', '#'],
                    ['Faculty & Staff', '#'],
                    ['Events & News', '#'],
                    ['Photo Gallery', '#'],
                    ['Contact Us', '#'],
                  ].map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>

              {/* ── Column 3: Academics ── */}
              <div className="col-6 col-md-6 col-lg-3 col-footer">
                <h5 className="footer-heading">Academics</h5>
                <ul className="footer-links">
                  {[
                    ['LKG & UKG (Pre-Primary)', '#'],
                    ['Class I – V (Primary)', '#'],
                    ['Class VI – VIII (Middle)', '#'],
                    ['Class IX – X (Secondary)', '#'],
                    ['Class XI – XII (Sr. Secondary)', '#'],
                    ['Exam Schedule', '#'],
                    ['Results & Report Cards', '#'],
                    ['Library', '#'],
                    ['Sports & Clubs', '#'],
                    ['Scholarships', '#'],
                  ].map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>

              {/* ── Column 4: Contact ── */}
              <div className="col-12 col-md-6 col-lg-4 col-footer">
                <h5 className="footer-heading">Contact Us</h5>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <strong>Address</strong>
                    Baldevganj, Kosikalan, Mathura, <br />U.P – 281403, India
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 7.82a2 2 0 012-2.18h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L9.91 13a16 16 0 006.08 6.09l1.54-1.31a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                 <div className="contact-text">
  <strong>Phone</strong>
  <a href="tel:+919876543210" className='text-white text-decoration-none'>+91 98765 43210</a> (Admissions)<br />
  <a href="tel:+911123456789" className='text-white text-decoration-none'>+91 11 2345 6789</a> (Office)
</div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                <div className="contact-text">
  <strong>Email</strong>
  <a href="mailto:info@sunrisepublicschool.edu.in" className='text-white text-decoration-none' >info@sunrisepublicschool.edu.in</a><br />
  <a href="mailto:admissions@sunrisepublicschool.edu.in" className='text-white text-decoration-none' >admissions@sunrisepublicschool.edu.in</a>
</div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <strong>Office Hours</strong>
                    Mon – Sat: 8:00 AM – 4:00 PM<br />
                    Sunday & Holidays: Closed
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <p className="footer-bottom-text mb-0">
                © {new Date().getFullYear()} Paliwal H.S.S School. All Rights Reserved.
                <span className="divider-dot">·</span>
                CBSE Affiliation No. 1234567
              </p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Sitemap</a>
              
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer