import { useEffect, useState } from "react";
import { VALID_HASHES, VALID_PATHS } from "../constants";

export const useRouteValidation = () => {
    const [show404, setShow404] = useState(false);

    useEffect(() => {
        const handleRouteChange = () => {
            const path = window.location.pathname;
            const hash = window.location.hash;

            const isValidPath = VALID_PATHS.includes(path as any);
            const isValidHash = VALID_HASHES.includes(hash as any);

            // Show 404 if path is invalid OR if there's an invalid hash
            if (!isValidPath || (hash !== "" && !isValidHash)) {
                setShow404(true);
            } else {
                setShow404(false);
                // Handle hash navigation
                if (hash && hash !== "") {
                    setTimeout(() => {
                        const element = document.getElementById(
                            hash.substring(1)
                        );
                        if (element) {
                            // Get navbar height and calculate proper scroll position
                            const navbar = document.querySelector(
                                ".navbar"
                            ) as HTMLElement;
                            const navbarHeight = navbar
                                ? navbar.offsetHeight
                                : 80;

                            // Calculate the target scroll position
                            const elementTop = element.offsetTop;
                            const targetScrollTop = elementTop - navbarHeight;

                            // Smooth scroll to the correct position
                            window.scrollTo({
                                top: targetScrollTop,
                                behavior: "smooth",
                            });
                        }
                    }, 100);
                }
            }
        };

        // Handle initial load
        handleRouteChange();

        // Listen for hash changes
        window.addEventListener("hashchange", handleRouteChange);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("hashchange", handleRouteChange);
        };
    }, []);

    return { show404 };
};
