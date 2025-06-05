import React, { useState, useEffect } from "react";
import "./hero.css";

function Hero() {
  const domains = [
    "Web & App Development",
    "AI/ML",
    "Blockchain/Web3", 
    "Cybersecurity",
    "Full Stack Development",
    "Designing",
    "Entrepreneurship",
    "Unity Game Development"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(0); // Fade out
      setScale(0.8); // Slightly shrink
      
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 4) % domains.length);
        setFade(1); // Fade in
        setScale(1); // Return to normal size
      }, 300); // Match with CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [domains.length]);

  const visibleDomains = [];
  for (let i = 0; i < 4; i++) {
    visibleDomains.push(domains[(currentIndex + i) % domains.length]);
  }

  return (
    <div className="hero-container">
      <div className="heading">
        Building a culture of <br /> code & collaboration
      </div>
      <div className="sub-heading">
        Transform your brand, unleash the power of digital with us and turn <br />
        bold visions into market success
      </div>
      <div className="domain">Our Domains</div>
      <div className="domain-logos">
        {visibleDomains.map((domain, idx) => (
          <div 
            key={idx}
            className="domain-logo"
            style={{
              opacity: fade,
              transform: `scale(${scale})`,
              transition: 'all 0.3s ease'
            }}
            >
              <b><span>{domain}</span></b>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;