import React, { useState, useEffect, useCallback } from "react";
import "../assets/CSS/OurToppers.css";

const cardConfigs = [
  {
    id: 0,
    title: "Achievements",
    subtitle: "Milestones & Honours",
    icon: "🏆",
    accentClass: "accent-brand",
    images: [
      "https://picsum.photos/id/1011/600/600",
      "https://picsum.photos/id/1015/600/600",
      "https://picsum.photos/id/1025/600/600",
      "https://picsum.photos/id/1035/600/600",
    ],
  },
  {
    id: 1,
    title: "10th Toppers",
    subtitle: "Board Excellence",
    icon: "🎓",
    accentClass: "accent-secondary",
    images: [
      "https://picsum.photos/id/1005/600/600",
      "https://picsum.photos/id/1006/600/600",
      "https://picsum.photos/id/1008/600/600",
      "https://picsum.photos/id/1010/600/600",
    ],
  },
  {
    id: 2,
    title: "12th Toppers",
    subtitle: "Board Excellence",
    icon: "🌟",
    accentClass: "accent-primary",
    images: [
      "https://picsum.photos/id/1020/600/600",
      "https://picsum.photos/id/1024/600/600",
      "https://picsum.photos/id/1027/600/600",
      "https://picsum.photos/id/1033/600/600",
    ],
  },
];

function SliderCard({ config }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const total = config.images.length;

  const goTo = useCallback(
    (idx, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 380);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % total, "next"), [current, goTo, total]);
  const prev = useCallback(() => goTo((current - 1 + total) % total, "prev"), [current, goTo, total]);

  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className={`ot-card ${config.accentClass}`}>
      <div className="ot-accent-bar" />

      <div className="ot-card-header">
        <div className="ot-icon-badge">
          <span>{config.icon}</span>
        </div>
        <div className="ot-card-titles">
          <p className="ot-card-title">{config.title}</p>
          <p className="ot-card-subtitle">{config.subtitle}</p>
        </div>
        <div className="ot-count-badge">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      <div className="ot-image-wrap">
        <img
          key={current}
          src={config.images[current]}
          alt={`${config.title} ${current + 1}`}
          className={`ot-slider-img ${direction === "next" ? "slide-in-right" : "slide-in-left"}`}
          onError={(e) => {
            e.target.src = `https://picsum.photos/seed/${config.id}${current}/600/600`;
          }}
        />
        <div className="ot-img-overlay" />
      </div>

      <div className="ot-controls">
        <button className="ot-ctrl-btn" onClick={prev} aria-label="Previous">‹</button>
        <div className="ot-dots-row">
          {config.images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              className={`ot-dot ${i === current ? "ot-dot--active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="ot-ctrl-btn" onClick={next} aria-label="Next">›</button>
      </div>
    </div>
  );
}

export default function OurToppers() {
  return (
    <section className="ot-section">

      <div className="ot-container">
        <div className="ot-heading-block">
          <span className="ot-pill">Recognition &amp; Excellence</span>
          <h2 className="ot-heading">Our Toppers &amp; Achievements</h2>
          <p className="ot-subheading">
            Celebrating brilliance, perseverance, and the spirit of excellence across every milestone.
          </p>

        </div>

        <div className="ot-grid">
          {cardConfigs.map((config, i) => (
            <div
              key={config.id}
              className="ot-card-wrapper"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <SliderCard config={config} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}