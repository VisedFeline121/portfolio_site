import React from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { Container } from "../../layout/Container";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    return (
        <section
            ref={elementRef}
            id="contact"
            className={`contact-section ${
                isVisible ? "section-visible" : "section-hidden"
            }`}
        >
            <Container>
                <h2 className="section-title">
                    Contact <span className="gradient-word">Me</span>
                </h2>
                <div className="contact-content">
                    {/* Contact Information */}
                    <ContactInfo />

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </Container>
        </section>
    );
};

export default Contact;
