import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-content">
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
                                    href="mailto:your.email@example.com"
                                    className="contact-link"
                                >
                                    your.email@example.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Location:</span>
                                <span>Your City, Country</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Send a Message</h3>
                        <form className="form">
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

                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
