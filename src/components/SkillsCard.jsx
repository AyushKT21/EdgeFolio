export default function SkillsCard({ activeSection, setActiveSection, isFocused }) {
  const isActive = activeSection === "skills";

  return (
    <div
      className={`glass-card skills ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
      onClick={() => setActiveSection(isActive ? null : "skills")}
    >
      <div className="card-top-header">
        <div className="badge-icon-wrap blue-badge">
          <svg
            className="badge-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div className="header-text">
          <h3>Skills</h3>
          <p className="subtitle">
            Tools and patterns I use to build reliable interfaces
          </p>
        </div>
      </div>

      {/* Decorative dot grid on the right side */}
      <div className="dots-grid-accent">
        <svg
          width="40"
          height="60"
          viewBox="0 0 40 60"
          fill="var(--color-blue)"
          opacity="0.25"
        >
          {[...Array(6)].map((_, r) =>
            [...Array(4)].map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={5 + c * 10}
                cy={5 + r * 10}
                r="1.5"
              />
            )),
          )}
        </svg>
      </div>

      <button className="arrow-btn" aria-label="View skills details">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {isActive && (
        <div className="detail-content" onClick={(e) => e.stopPropagation()}>
          <div className="skills-group">
            <h4>Frontend Engineering</h4>
            <div className="skills-list">
              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Next.js</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="skills-group">
            <h4>Architecture & Systems</h4>
            <div className="skills-list">
              <span>Component Architecture</span>
              <span>Config-Driven UI</span>
              <span>Reusable Systems</span>
              <span>REST APIs</span>
              <span>API Integration</span>
              <span>Performance Optimization</span>
              <span>Dynamic Form Workflows</span>
            </div>
          </div>

          <div className="skills-group">
            <h4>Developer Tools</h4>
            <div className="skills-list">
              <span>Git</span>
              <span>React Query</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
