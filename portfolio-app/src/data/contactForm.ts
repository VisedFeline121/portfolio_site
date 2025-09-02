import type { FormField } from "../types";

export const formFields: FormField[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
    },
    {
        name: "subject",
        label: "Subject",
        type: "text",
        required: true,
    },
    {
        name: "message",
        label: "Message",
        type: "textarea",
        rows: 5,
        required: true,
    },
];

export const formMessages = {
    sending: "Sending....",
    success: "Form Submitted Successfully",
    error: "Submission failed. Please try again later or use the email link or email button above.",
    networkError:
        "An error has occurred. Please try again or use the email link or email button above.",
};
