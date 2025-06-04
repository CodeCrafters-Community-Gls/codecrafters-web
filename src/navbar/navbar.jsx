import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
            <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="logo">
                    <div className="logo-svg">😊</div>
                    {!scrolled && <div className="name">logo</div>}
                </div>
                <div className="nav-links">
                    {["About", "Team", "Contact", "Events"].map((item) => (
                        <div key={item} className="nav-link">
                            {item}
                        </div>
                    ))}
                </div>
                {!scrolled && <div className="join-btn">Join</div>}
            </div>
        </div>
    );
}

export default Navbar;