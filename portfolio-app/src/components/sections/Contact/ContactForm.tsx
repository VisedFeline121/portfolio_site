import React from "react";
import { formFields } from "../../../data/contactForm";
import { useContactForm } from "../../../hooks/useContactForm";
import { Button } from "../../ui/Button";
import "./Contact.css";

const ContactForm: React.FC = () => {
    const { formResult, isSubmitting, formRef, handleFormSubmit } =
        useContactForm();

    const renderFormField = (field: (typeof formFields)[0]) => {
        if (field.type === "textarea") {
            return (
                <textarea
                    id={field.name}
                    name={field.name}
                    rows={field.rows}
                    required={field.required}
                />
            );
        }

        return (
            <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
            />
        );
    };

    return (
        <div className="contact-form">
            <h3>Send a Message</h3>
            <form className="form" onSubmit={handleFormSubmit} ref={formRef}>
                {formFields.map((field) => (
                    <div key={field.name} className="form-group">
                        <label htmlFor={field.name}>{field.label}</label>
                        {renderFormField(field)}
                    </div>
                ))}

                <Button
                    type="submit"
                    className="btn-primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {formResult && (
                    <div className="form-modal-overlay">
                        <div className="form-modal">
                            <div className="form-modal-content">
                                {formResult.includes("Sending") ? (
                                    <>
                                        <div className="spinner"></div>
                                        <span className="modal-message">
                                            {formResult}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            className="form-result-icon success-icon"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="modal-message">
                                            {formResult}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
