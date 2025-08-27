import React from "react";
import { contactInfo } from "../../data/contact";
import "./Footer.css";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Or Prager</h3>
                    <p>Full Stack Developer</p>
                    <p>
                        Building modern web applications with passion and
                        precision.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="footer-link"
                        >
                            {contactInfo.email}
                        </a>
                    </p>
                    <p>{contactInfo.location}</p>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="footer-social-links">
                        <a
                            href={contactInfo.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            GitHub
                        </a>
                        <a
                            href={contactInfo.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Or Prager. All rights reserved.</p>
                <p>Built with React, TypeScript, and ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;
