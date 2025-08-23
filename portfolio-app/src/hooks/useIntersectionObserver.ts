import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (threshold: number = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Unobserve after animation triggers to save resources
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin: "50px", // Start animation slightly before element enters viewport
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return { isVisible, elementRef };
};
