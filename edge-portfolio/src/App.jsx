import { useState, useEffect } from "react";

import MainCard from "./components/MainCard";
import AboutCard from "./components/AboutCard";
import ProjectsCard from "./components/ProjectsCard";
import ResumeCard from "./components/ResumeCard";
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";

const CARD_ORDER = [
  "about",
  "projects",
  "resume",
  "skills",
  "contact",
];

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (e) => {
      // ESC closes
      if (e.key === "Escape") {
        setActiveSection(null);
        return;
      }

      // Do not navigate when a card is active
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

  return (
    <div className="app">
      <MainCard />

      <div className="cards-container">
        <AboutCard
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isFocused={focusedIndex === 0}
        />
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
    </div>
  );
}
