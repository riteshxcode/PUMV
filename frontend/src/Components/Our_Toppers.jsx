import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import '../assets/CSS/OurToppers.css';

function ImageSlider({ apiEndpoint }) {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        try {
            const response = await axios.get(apiEndpoint);

            // better image field
            // const imgUrls = response.data.map((img) => img.thumbnailUrl);
            const imgUrls = response.data.map((img) => img.url);
            setImages(imgUrls);

        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, [apiEndpoint]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [images, currentIndex]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="slider-container">
            <button className="arrow-btn" onClick={prevSlide}>
                <FaArrowLeft />
            </button>

            <div className="slide-box">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="slider-image"
                />
            </div>

            <button className="arrow-btn" onClick={nextSlide}>
                <FaArrowRight />
            </button>
        </div>
    );
}

function OurToppers() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5 fw-bold">Our Toppers & Achievements</h1>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="slider-card">
                        <h3 className="mb-3">Achievements</h3>
                        <ImageSlider apiEndpoint="https://jsonplaceholder.typicode.com/photos?_limit=4" />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="slider-card">
                        <h3 className="mb-3">10th Toppers</h3>
                        <ImageSlider apiEndpoint="https://jsonplaceholder.typicode.com/photos?_start=5&_limit=4" />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="slider-card">
                        <h3 className="mb-3">12th Toppers</h3>
                        <ImageSlider apiEndpoint="https://jsonplaceholder.typicode.com/photos?_start=10&_limit=4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurToppers;