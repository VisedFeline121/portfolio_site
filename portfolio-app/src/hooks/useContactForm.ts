import { useEffect, useRef, useState } from "react";
import { formMessages } from "../data/contactForm";

export const useContactForm = () => {
    const [formResult, setFormResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    // Auto-hide messages after 5 seconds
    useEffect(() => {
        if (formResult) {
            const timer = setTimeout(() => setFormResult(""), 5000);
            return () => clearTimeout(timer);
        }
    }, [formResult]);

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setIsSubmitting(true);
        setFormResult(formMessages.sending);

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
                setFormResult(formMessages.success);
                formRef.current?.reset();
            } else {
                console.log("Error", response.status);
                setFormResult(formMessages.error);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormResult(formMessages.networkError);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formResult,
        isSubmitting,
        formRef,
        handleFormSubmit,
    };
};
