// 📌 Frontend - src/components/HeroBanner.js
import React, { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';
import banner1 from '../assets/banner_1.jpg';
import banner2 from '../assets/banner_2.jpg';
import banner3 from '../assets/banner_3.jpg';
import banner4 from '../assets/banner_4.jpg';

const HeroBanner = () => {
  const images = [banner1, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
     
      
    </div>
  );
};

export default HeroBanner;