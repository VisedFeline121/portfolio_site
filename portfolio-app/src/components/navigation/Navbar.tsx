import React from "react";
import DarkModeIcon from "../../assets/icons/ui/navbar/dark_mode.svg";
import HomeIcon from "../../assets/icons/ui/navbar/home.svg";
import LightModeIcon from "../../assets/icons/ui/navbar/light_mode.svg";
import PersonIcon from "../../assets/icons/ui/navbar/person.svg";
import ProjectsIcon from "../../assets/icons/ui/navbar/projects.svg";
import { SECTIONS } from "../../constants";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/Button";
import { CVButton } from "../ui/CVButton";
import { Icon } from "../ui/Icon";
import { NavLink } from "../ui/NavLink";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { isScrolled } = useScrollPosition();
    const { scrollToSection } = useScrollToSection();

    // Debug: Log scroll state
    console.log("Navbar isScrolled:", isScrolled, "ScrollY:", window.scrollY);

    return (
        <nav
            className={`navbar ${
                isScrolled ? "navbar-scrolled" : "navbar-transparent"
            }`}
        >
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="navbar-name">
                        Or <span className="gradient-word">Prager</span>
                    </span>
                </div>

                <div className="navbar-right">
                    <div className="navbar-links">
                        <NavLink
                            sectionId={SECTIONS.HERO}
                            icon={<Icon src={HomeIcon} alt="Home" size={18} />}
                            label="Home"
                            onClick={scrollToSection}
                        />
                        <NavLink
                            sectionId={SECTIONS.ABOUT}
                            icon={
                                <Icon src={PersonIcon} alt="About" size={18} />
                            }
                            label="About Me"
                            onClick={scrollToSection}
                        />
                        <NavLink
                            sectionId={SECTIONS.PROJECTS}
                            icon={
                                <Icon
                                    src={ProjectsIcon}
                                    alt="Projects"
                                    size={18}
                                />
                            }
                            label="Projects"
                            onClick={scrollToSection}
                        />
                        <NavLink
                            sectionId={SECTIONS.CONTACT}
                            icon={
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            }
                            label="Contact"
                            onClick={scrollToSection}
                        />
                    </div>

                    <CVButton />
                    <Button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? (
                            <Icon
                                src={LightModeIcon}
                                alt="Light Mode"
                                size={20}
                            />
                        ) : (
                            <Icon
                                src={DarkModeIcon}
                                alt="Dark Mode"
                                size={20}
                            />
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
