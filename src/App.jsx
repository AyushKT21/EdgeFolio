import { useState, useEffect } from "react";

import MainCard from "./components/MainCard";
import AboutCard from "./components/AboutCard";
import ProjectsCard from "./components/ProjectsCard";
import ResumeCard from "./components/ResumeCard";
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";
import ExperienceCard from "./components/ExperienceCard";

const CARD_ORDER = [
  "about",
  "projects",
  "resume",
  "skills",
  "contact",
  "experience",
];

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });
  const [time, setTime] = useState("10:30 AM");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Sync dynamic clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      setTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveSection(null);
        return;
      }

      if (activeSection) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setFocusedIndex((i) => (i + 1) % CARD_ORDER.length);
      }

      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setFocusedIndex((i) =>
          i === 0 ? CARD_ORDER.length - 1 : i - 1
        );
      }

      if (e.key === "Enter" || e.key === " ") {
        setActiveSection(CARD_ORDER[focusedIndex]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [focusedIndex, activeSection]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Background Orbits & Planets */}
      <div className="space-orbit orbit-one" />
      <div className="space-orbit orbit-two" />
      <div className="space-orbit orbit-three" />

      <div className="planet planet-cyan" />
      <div className="planet planet-purple" />
      <div className="planet planet-green" />
      <div className="planet planet-blue" />

      <div className="app-glow glow-one" />
      <div className="app-glow glow-two" />
      <div className="app-glow glow-three" />
      <div className="app-glow glow-four" />

      {/* Floating Header */}
      <header className="portfolio-header">
        <div className="header-logo">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-text">Ayush<span className="logo-sub">.dev</span></span>
        </div>

        <nav className="header-nav">
          <button
            className={`nav-link ${activeSection === null ? "active" : ""}`}
            onClick={() => handleSectionChange(null)}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleSectionChange("about")}
          >
            About
          </button>
          <button
            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => handleSectionChange("projects")}
          >
            Projects
          </button>
          <button
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => handleSectionChange("skills")}
          >
            Skills
          </button>
          <button
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleSectionChange("contact")}
          >
            Contact
          </button>
        </nav>

        <div className="header-actions">
          <a
            href="https://github.com/AyushKT21"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-link"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ayusht21/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-link"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a href="/Ayush_Tiwari_resume.pdf" className="download-cv-btn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            View CV
          </a>

          <button
            onClick={toggleTheme}
            className={`theme-switch ${theme}`}
            aria-label="Toggle light/dark theme"
          >
            <span className="switch-slider">
              <span className="switch-knob">
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="knob-icon dark-icon">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="knob-icon light-icon">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </span>
            </span>
          </button>
        </div>

        <button
          type="button"
          className={`mobile-nav-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`mobile-nav-panel ${mobileMenuOpen ? "open" : ""}`}>
          <button className={`nav-link ${activeSection === null ? "active" : ""}`} onClick={() => handleSectionChange(null)}>
            Home
          </button>
          <button className={`nav-link ${activeSection === "about" ? "active" : ""}`} onClick={() => handleSectionChange("about")}>
            About
          </button>
          <button className={`nav-link ${activeSection === "projects" ? "active" : ""}`} onClick={() => handleSectionChange("projects")}>
            Projects
          </button>
          <button className={`nav-link ${activeSection === "skills" ? "active" : ""}`} onClick={() => handleSectionChange("skills")}>
            Skills
          </button>
          <button className={`nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={() => handleSectionChange("contact")}>
            Contact
          </button>
        </div>
      </header>

      {/* Bento Grid Container */}
      <div className="portfolio-canvas">
        <ExperienceCard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isFocused={focusedIndex === 5}
        />

        <AboutCard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isFocused={focusedIndex === 0}
        />

        <MainCard />

        <ProjectsCard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isFocused={focusedIndex === 1}
        />

        <ResumeCard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isFocused={focusedIndex === 2}
        />

        <SkillsCard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isFocused={focusedIndex === 3}
        />

        <ContactCard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isFocused={focusedIndex === 4}
        />
      </div>

      {/* Bottom Footer Status Bar */}
      <footer className="portfolio-footer">
        <div className="footer-status">
          <span className="status-dot pulsing" />
          <span className="status-text">Available for opportunities</span>
        </div>

        <div className="footer-location-time">
          <div className="location-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="location-icon">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="location-text">India</span>
          </div>
          <span className="time-divider">|</span>
          <span className="time-text">{time}</span>
        </div>
      </footer>
    </div>
  );
}
