import { useEffect, useState } from "react";
import { VALID_HASHES, VALID_PATHS } from "../constants";

export const useRouteValidation = () => {
    const [show404, setShow404] = useState(false);

    useEffect(() => {
        const handleRouteChange = () => {
            const path = window.location.pathname;
            const hash = window.location.hash;

            // Simple validation: allow root paths and valid hashes
            const isValidRoute =
                VALID_PATHS.includes(path as any) &&
                (hash === "" || VALID_HASHES.includes(hash as any));

            if (!isValidRoute) {
                setShow404(true);
                return;
            }

            setShow404(false);

            // Handle hash navigation
            if (hash && hash !== "") {
                setTimeout(() => {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        const navbar = document.querySelector(
                            ".navbar"
                        ) as HTMLElement;
                        const navbarHeight = navbar ? navbar.offsetHeight : 80;
                        const elementTop = element.offsetTop;
                        const targetScrollTop = elementTop - navbarHeight;

                        window.scrollTo({
                            top: targetScrollTop,
                            behavior: "smooth",
                        });
                    }
                }, 100);
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
