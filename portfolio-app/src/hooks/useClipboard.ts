import { useState } from "react";

export const useClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);

            // Reset the copied state after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);

            return true;
        } catch (err) {
            console.error("Failed to copy to clipboard:", err);
            return false;
        }
    };

    return { copyToClipboard, copied };
};
