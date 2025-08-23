import { useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "../constants";

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.documentElement.setAttribute(
            "data-theme",
            newTheme ? "dark" : "light"
        );
        localStorage.setItem(THEME_STORAGE_KEY, newTheme ? "dark" : "light");
    };

    useEffect(() => {
        const savedTheme =
            localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
        const prefersDark = savedTheme === "dark";
        setIsDarkMode(prefersDark);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    return { isDarkMode, toggleTheme };
};
