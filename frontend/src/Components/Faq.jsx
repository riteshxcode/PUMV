import React, { useState, useRef, useEffect } from "react";
import "../assets/CSS/Faq.css";
import "../assets/CSS/theme.css";
const faqData = [
  {
    question: "What is the admission process for new students?",
    answer:
      "Parents can visit the school campus or apply online through the admission form available on our website. Required documents include previous academic records, birth certificate, and passport-size photographs.",
  },
  {
    question: "What are the school timings?",
    answer:
      "School timings are from 8:00 AM to 2:00 PM, Monday to Saturday. Office hours are from 9:00 AM to 4:00 PM.",
  },
  {
    question: "Does the school provide transport facilities?",
    answer:
      "Yes, we provide safe and secure transport facilities covering major routes across the city with GPS-enabled buses.",
  },
  {
    question: "Which classes are available in the school?",
    answer:
      "Our school offers education from Nursery to Class 12 with Science, Commerce, and Arts streams for senior secondary students.",
  },
  {
    question: "How can parents track student performance?",
    answer:
      "Parents can access the student portal using login credentials to check attendance, exam results, homework, and announcements.",
  },
  {
    question: "Are extracurricular activities available?",
    answer:
      "Yes, students can participate in sports, cultural programs, debates, music, dance, computer labs, and annual events.",
  },
];

/* ── Single accordion item ──────────────────────────────────────────────── */
function AccordionItem({ item, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = isOpen
        ? bodyRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button
        className="faq-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>

        {/* Question */}
        <span className="faq-question">{item.question}</span>

        {/* Arrow */}
        <svg
          className={`faq-arrow${isOpen ? " faq-arrow--open" : ""}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Answer body */}
      <div className="faq-body" ref={bodyRef}>
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  );
}

/* ── Main FAQ section ───────────────────────────────────────────────────── */
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">


           <div className="ot-heading-block">
                        <span className="ot-pill">FAQ</span>
                        <h2 className="ot-heading">Frequently Asked Questions</h2>
                        <p className="ot-subheading">
                                   Find answers to common questions about admissions, academics,
            facilities, and school activities.
                        </p>
                    </div>


        {/* Two-column grid */}
        <div className="faq-grid">

          {/* ── Help card ── */}
          <div className="faq-help-card">
            <div className="faq-help-icon-wrap">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--secondary-color)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <h3 className="faq-help-title">Still have questions?</h3>
            <p className="faq-help-desc">
              Can't find what you're looking for? Our admission office is happy
              to help with any queries.
            </p>

            <hr className="faq-help-divider" />

            {/* Phone */}
            <div className="faq-contact-row">
              <svg
                className="faq-contact-icon"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.4a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.88-.88a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="faq-contact-text">
                Call us: +91 11 1234 5678
                <br />
                Mon–Sat, 9 AM – 4 PM
              </span>
            </div>

            {/* Email */}
            <div className="faq-contact-row">
              <svg
                className="faq-contact-icon"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="faq-contact-text">admissions@school.edu.in</span>
            </div>

            <button className="faq-contact-btn">Contact School</button>
          </div>

          {/* ── Accordion ── */}
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Faq;