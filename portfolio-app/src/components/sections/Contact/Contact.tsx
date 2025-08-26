// TODO: Integrate with Web3Form when theyre back online

import React, { useRef, useState } from "react";
import { contactInfo } from "../../../data/contact";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { Container } from "../../layout/Container";
import { Button } from "../../ui/Button";

const Contact: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();

    // Form state management
    const [formResult, setFormResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setIsSubmitting(true);
        setFormResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setFormResult("Form Submitted Successfully");
            formRef.current?.reset();
        } else {
            console.log("Error", data);
            setFormResult(data.message);
        }
        setIsSubmitting(false);
    };

    return (
        <section
            ref={elementRef}
            id="contact"
            className={`contact-section ${
                isVisible ? "section-visible" : "section-hidden"
            }`}
        >
            <Container>
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <p>
                            I'm always interested in hearing about new
                            opportunities and exciting projects. Feel free to
                            reach out if you'd like to connect or discuss
                            potential collaborations.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-label">Email:</span>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="contact-link"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Location:</span>
                                <span>{contactInfo.location}</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a
                                href={contactInfo.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                GitHub
                            </a>
                            <a
                                href={contactInfo.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                LinkedIn
                            </a>
                            {contactInfo.socialLinks.twitter && (
                                <a
                                    href={contactInfo.socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    Twitter
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h3>Send a Message</h3>
                        <form
                            className="form"
                            onSubmit={handleFormSubmit}
                            ref={formRef}
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value={import.meta.env.VITE_WEB3FORMS_KEY || ""}
                            />
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                className="btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                            {formResult && (
                                <div
                                    className={`form-result ${
                                        formResult.includes("Success")
                                            ? "success"
                                            : "error"
                                    }`}
                                >
                                    {formResult}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
