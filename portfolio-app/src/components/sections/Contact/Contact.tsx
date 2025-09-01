import React, { useRef, useState } from "react";
import { contactInfo } from "../../../data/contact";
import { useClipboard } from "../../../hooks/useClipboard";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { Container } from "../../layout/Container";
import { Button } from "../../ui/Button";
import "./Contact.css";

const Contact: React.FC = () => {
    const { isVisible, elementRef } = useIntersectionObserver();
    const { copyToClipboard, copied } = useClipboard();

    // Form state management
    const [formResult, setFormResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleEmailClick = () => {
        copyToClipboard(contactInfo.email);
    };

    const handleSendEmail = () => {
        window.open(`mailto:${contactInfo.email}`, "_blank");
    };

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setIsSubmitting(true);
        setFormResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);

        try {
            const response = await fetch(
                import.meta.env.VITE_FORMSPREE_URL || "",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                setFormResult("Form Submitted Successfully");
                formRef.current?.reset();
            } else {
                console.log("Error", response.status);
                setFormResult(
                    "Submission failed. Please try again later or use the email link or email button above."
                );
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormResult(
                "An error has occurred. Please try again or use the email link or email button above."
            );
        } finally {
            setIsSubmitting(false);
        }
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
                <h2 className="section-title">
                    Contact <span className="gradient-word">Me</span>
                </h2>
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
                                <div className="email-container">
                                    <button
                                        onClick={handleEmailClick}
                                        className={`email-link ${
                                            copied ? "copied" : ""
                                        }`}
                                        title="Click to copy email address"
                                        style={
                                            {
                                                "--tooltip-text": copied
                                                    ? '"Copied!"'
                                                    : '"Click to copy"',
                                            } as React.CSSProperties
                                        }
                                    >
                                        {contactInfo.email}
                                    </button>
                                    <button
                                        onClick={handleSendEmail}
                                        className="btn btn-secondary email-send-btn"
                                        title="Send email"
                                    >
                                        <svg
                                            className="email-icon"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                        Send Email
                                    </button>
                                </div>
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
