import React from "react";
import { SECTIONS } from "../../constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import "./NotFound.css";

const NotFound: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    const goToHome = () => {
        // Navigate to the home page
        window.location.href = "/";
    };

    return (
        <section
            ref={elementRef}
            id="not-found"
            className={`not-found-section ${
                isVisible ? "section-visible" : "section-hidden"
            }`}
        >
            <Container>
                <div className="not-found-content">
                    <div className="not-found-number">404</div>
                    <h1 className="not-found-title">Page Not Found</h1>
                    <p className="not-found-description">
                        Oops! It looks like you've wandered into uncharted
                        territory. The page you're looking for doesn't exist,
                        but don't worry - I'm here to help you get back on
                        track!
                    </p>

                    <div className="not-found-actions">
                        <Button className="btn-primary" onClick={goToHome}>
                            🏠 Back to Home
                        </Button>
                    </div>

                    <div className="not-found-suggestions">
                        <h3>While you're here, check out:</h3>
                        <div className="suggestion-links">
                            <a
                                href={`#${SECTIONS.ABOUT}`}
                                className="suggestion-link"
                            >
                                About Me
                            </a>
                            <a
                                href={`#${SECTIONS.PROJECTS}`}
                                className="suggestion-link"
                            >
                                My Projects
                            </a>
                            <a
                                href={`#${SECTIONS.CONTACT}`}
                                className="suggestion-link"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default NotFound;
