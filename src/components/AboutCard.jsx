export default function AboutCard({ activeSection, setActiveSection, isFocused }) {
  const isActive = activeSection === "about";

  return (
    <div
      className={`glass-card about ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
      onClick={() => setActiveSection(isActive ? null : "about")}
    >
      <div className="card-top-header">
        <div className="badge-icon-wrap cyan-badge">
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="header-text">
          <h3>About Me</h3>
          <p className="subtitle">Get to know who I am and what I do</p>
        </div>
      </div>

      <button className="arrow-btn" aria-label="View about details">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {isActive && (
        <div className="detail-content" onClick={(e) => e.stopPropagation()}>
          <p>
            I'm a frontend developer who focuses on building polished, practical interfaces that feel fast, clear, and easy to use.
          </p>
          <p>
            I like turning complex product ideas into reusable components, clean layouts, and predictable user flows.
          </p>
          <p>
            Most of my recent work has been around React, TypeScript, responsive UI, and making interfaces feel production-ready.
          </p>
        </div>
      )}
    </div>
  );
}
