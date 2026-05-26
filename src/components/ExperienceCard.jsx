export default function ExperienceCard({ activeSection, setActiveSection, isFocused }) {
  const isActive = activeSection === "experience";

  return (
    <div
      className={`glass-card experience ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
      onClick={() => setActiveSection(isActive ? null : "experience")}
    >
      <div className="card-top-header">
        <div className="badge-icon-wrap purple-badge">
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
        <div className="header-text">
          <h3>Experience</h3>
          <p className="subtitle">My professional journey so far</p>
        </div>
      </div>

      <div className="card-body-content">
        <div className="experience-highlight">
          <span className="dot purple-dot"></span>
          <p>
            <span className="purple-text">2+ Years</span> of building scalable web applications
          </p>
        </div>

        <div className="journey-graph">
          <svg viewBox="0 0 160 80" className="graph-svg">
            <path
              d="M 10 70 Q 45 60, 75 40 T 120 30 T 150 15"
              fill="none"
              stroke="var(--color-purple)"
              strokeWidth="2.5"
              className="pulse-path"
            />
            <circle cx="10" cy="70" r="3.5" fill="var(--color-purple)" />
            <circle cx="75" cy="40" r="3.5" fill="var(--color-purple)" />
            <circle cx="120" cy="30" r="3.5" fill="var(--color-purple)" />
            <circle cx="150" cy="15" r="4.5" fill="#ffffff" stroke="var(--color-purple)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <button className="arrow-btn" aria-label="View experience details">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {isActive && (
        <div className="detail-content" onClick={(e) => e.stopPropagation()}>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2024 - Present</span>
              <h4>Software Engineer</h4>
              <p>Leading frontend development, focusing on responsive architectures, state management, and modern component systems.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2022 - 2024</span>
              <h4>Frontend Developer</h4>
              <p>Crafted high-fidelity web experiences, implemented reusable component libraries, and optimized application performance.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
