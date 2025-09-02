import React from "react";
import { useClipboard } from "../../hooks/useClipboard";

interface EmailContainerProps {
    email: string;
}

const EmailContainer: React.FC<EmailContainerProps> = ({ email }) => {
    const { copyToClipboard, copied } = useClipboard();

    const handleEmailClick = () => {
        copyToClipboard(email);
    };

    const handleSendEmail = () => {
        window.open(`mailto:${email}`, "_blank");
    };

    return (
        <div className="email-container">
            <button
                onClick={handleEmailClick}
                className={`email-link ${copied ? "copied" : ""}`}
                title="Click to copy email address"
                style={
                    {
                        "--tooltip-text": copied
                            ? '"Copied!"'
                            : '"Click to copy"',
                    } as React.CSSProperties
                }
            >
                {email}
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
    );
};

export default EmailContainer;
