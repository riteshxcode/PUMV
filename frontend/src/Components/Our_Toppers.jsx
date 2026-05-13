import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../assets/CSS/OurToppers.css";

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <button className="arrow-btn" onClick={prevSlide}>
                <FaArrowLeft />
            </button>

            <div className="slide-box">
                <img src={images[currentIndex]} alt="slider" className="slider-image" />
            </div>

            <button className="arrow-btn" onClick={nextSlide}>
                <FaArrowRight />
            </button>
        </div>
    );
}

function OurToppers() {
    const achievementImages = [
        "https://picsum.photos/id/1011/400/400",
        "https://picsum.photos/id/1015/400/400",
        "https://picsum.photos/id/1025/400/400",
        "https://picsum.photos/id/1035/400/400",
    ];

    const topper10thImages = [
        "https://picsum.photos/id/1005/400/400",
        "https://picsum.photos/id/1006/400/400",
        "https://picsum.photos/id/1008/400/400",
        "https://picsum.photos/id/1010/400/400",
    ];

    const topper12thImages = [
        "https://picsum.photos/id/1020/400/400",
        "https://picsum.photos/id/1024/400/400",
        "https://picsum.photos/id/1027/400/400",
        "https://picsum.photos/id/1033/400/400",
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5 fw-bold">
                Our Toppers & Achievements
            </h1>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="slider-card">
                        <h3 className="mb-3">Achievements</h3>
                        <ImageSlider images={achievementImages} />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="slider-card">
                        <h3 className="mb-3">10th Toppers</h3>
                        <ImageSlider images={topper10thImages} />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="slider-card">
                        <h3 className="mb-3">12th Toppers</h3>
                        <ImageSlider images={topper12thImages} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurToppers;