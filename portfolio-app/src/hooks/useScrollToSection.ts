export const useScrollToSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Update the URL with the hash
            window.history.pushState(null, "", `#${sectionId}`);
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return { scrollToSection };
};
