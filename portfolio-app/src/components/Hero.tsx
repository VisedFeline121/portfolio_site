import React from "react";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Your Name</h1>
                <h2 className="hero-subtitle">Full Stack Developer</h2>
                <p className="hero-description">
                    Passionate about creating innovative web solutions with
                    modern technologies. Specializing in Python, TypeScript,
                    React, and Node.js.
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">View Projects</button>
                    <button className="btn btn-secondary">Download CV</button>
                    <button className="btn btn-outline">Contact Me</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
