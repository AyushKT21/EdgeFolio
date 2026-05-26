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
          <p className="subtitle">Things I’ve built and shipped</p>
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
            <h3>Interactive Portfolio</h3>
            <p>
              A state-driven React portfolio with morphing cards, keyboard
              accessibility, and glassmorphism UI.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>UI</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Admin Form System</h3>
            <p>
              Dynamic form engine with validations, conditional logic, and
              reusable components.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Forms</span>
              <span>Logic</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Insurance Flow</h3>
            <p>
              Multi-step user flow handling dates, calculations, and API-ready
              payloads.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>State</span>
              <span>UX</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
