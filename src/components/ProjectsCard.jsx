export default function ProjectsCard({ activeSection, setActiveSection, isFocused }) {
  const isActive = activeSection === "projects";

  return (
    <div
      className={`glass-card projects ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
      onClick={() => setActiveSection(isActive ? null : "projects")}
    >
      <div className="card-top-header">
        <div className="badge-icon-wrap green-badge">
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="header-text">
          <h3>Projects</h3>
          <p className="subtitle">Selected product work and UI systems I have built</p>
        </div>
      </div>

      <button className="arrow-btn" aria-label="View projects details">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {isActive && (
        <div className="detail-content projects-list" onClick={(e) => e.stopPropagation()}>
          <div className="project-card">
            <h3>Insurance Journey Builder</h3>
            <p>A configurable React flow for dynamic forms, validations, and multi-step insurance journeys.</p>
            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>Forms</span>
            </div>
          </div>

          <a
            href="https://ask-ayush.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-card-link"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Ayush AI Portfolio</h3>
            <p>Interactive AI portfolio — explore my work through conversation and guided navigation.</p>
            <div className="project-tech">
              <span>AI</span>
              <span>React</span>
              <span>Live</span>
            </div>
          </a>

          <div className="project-card">
            <h3>Design-to-Code UI System</h3>
            <p>A reusable component system built from Figma designs with responsive behavior and clean states.</p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Design</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Performance-First Dashboard</h3>
            <p>Enterprise dashboard work focused on API rendering, caching, and keeping interactions responsive.</p>
            <div className="project-tech">
              <span>React</span>
              <span>APIs</span>
              <span>Perf</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

