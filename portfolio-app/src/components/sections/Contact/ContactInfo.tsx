import React from "react";
import { contactInfo } from "../../../data/contact";
import EmailContainer from "../../ui/EmailContainer";

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
                I'm always interested in hearing about new opportunities and
                exciting projects. Feel free to reach out if you'd like to
                connect or discuss potential collaborations.
            </p>

            <div className="contact-details">
                <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <EmailContainer email={contactInfo.email} />
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
    );
};

export default ContactInfo;
