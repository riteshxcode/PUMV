import React, { useState, useRef, useEffect } from "react";

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
    <div
      style={{
        background: "#fff",
        border: isOpen ? "0.5px solid #378ADD" : "0.5px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "border-color 0.2s",
        marginBottom: "10px",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "1rem 1.25rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Number badge */}
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: isOpen ? "#E6F1FB" : "#f3f4f6",
            color: isOpen ? "#185FA5" : "#6b7280",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "500",
            flexShrink: 0,
            transition: "background 0.2s, color 0.2s",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          style={{
            flex: 1,
            fontSize: "14.5px",
            fontWeight: "500",
            color: "#111827",
            lineHeight: "1.5",
          }}
        >
          {item.question}
        </span>

        {/* Arrow */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isOpen ? "#185FA5" : "#9ca3af"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transition: "transform 0.25s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Answer body */}
      <div
        ref={bodyRef}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div
          style={{
            padding: "0 1.25rem 1.1rem 3.5rem",
            fontSize: "14px",
            color: "#6b7280",
            lineHeight: "1.7",
          }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "3rem 1rem", background: "#f9fafb" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "#E6F1FB",
              color: "#185FA5",
              fontSize: "12px",
              fontWeight: "500",
              padding: "4px 14px",
              borderRadius: "999px",
              marginBottom: "12px",
              letterSpacing: "0.04em",
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "10px",
            }}
          >
            Frequently asked questions
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#6b7280",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Find answers to common questions about admissions, academics,
            facilities, and school activities.
          </p>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Help Card */}
          <div
            style={{
              background: "#fff",
              border: "0.5px solid #B5D4F4",
              borderRadius: "12px",
              padding: "1.75rem 1.5rem",
              position: "sticky",
              top: "1rem",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#E6F1FB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#185FA5"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#185FA5",
                marginBottom: "8px",
              }}
            >
              Still have questions?
            </h3>
            <p
              style={{
                fontSize: "13.5px",
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "1.25rem",
              }}
            >
              Can't find what you're looking for? Our admission office is happy
              to help with any queries.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "0.5px solid #e5e7eb",
                margin: "1.25rem 0",
              }}
            />

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#185FA5"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.4a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.88-.88a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.5" }}>
                Call us: +91 11 1234 5678
                <br />
                Mon–Sat, 9 AM – 4 PM
              </span>
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "1.25rem",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#185FA5"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span style={{ fontSize: "13px", color: "#6b7280" }}>
                admissions@school.edu.in
              </span>
            </div>

            {/* Contact Button */}
            <button
              style={{
                width: "100%",
                padding: "10px 0",
                background: "#E6F1FB",
                color: "#185FA5",
                border: "1px solid #B5D4F4",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Contact school
            </button>
          </div>

          {/* Accordion */}
          <div>
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