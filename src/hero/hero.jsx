import React, { useState, useEffect } from "react";
import "./hero.css";

function Hero() {
  const domains = [
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com" },
    { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(0); // shrink all

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 5 >= domains.length ? 0 : prevIndex + 5
        );
        setScale(1); // grow all
      }, 400); // wait until scale-down finishes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleDomains = domains.slice(currentIndex, currentIndex + 5);

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
              transform: `scale(${scale})`,
              transition: "transform 0.4s ease-in-out",
            }}
          >
            <img src={domain.logo} alt={domain.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
