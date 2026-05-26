export default function ContactCard({ activeSection, setActiveSection, isFocused }) {
  const isActive = activeSection === "contact";

  return (
    <div
      className={`glass-card contact ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
      onClick={() => setActiveSection(isActive ? null : "contact")}
    >
      <div className="card-top-header">
        <div className="badge-icon-wrap magenta-badge">
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
        <div className="header-text">
          <h3>Let’s Connect</h3>
          <p className="subtitle">Get in touch or say hello!</p>
        </div>
      </div>

      {/* Decorative sine-wave dot mesh on the bottom-right */}
      <div className="wave-dots-accent">
        <svg width="120" height="70" viewBox="0 0 120 70" fill="var(--color-magenta)" opacity="0.25">
          {[...Array(6)].map((_, r) =>
            [...Array(12)].map((_, c) => {
              const cx = 10 + c * 10;
              const wave = Math.sin(c * 0.4) * 8;
              const cy = 30 + r * 6 + wave;
              return <circle key={`${r}-${c}`} cx={cx} cy={cy} r="1" />;
            })
          )}
        </svg>
      </div>

      <button className="arrow-btn" aria-label="View contact details">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {isActive && (
        <div
          className="detail-content connect-links"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="https://github.com/AyushKT21"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-item github"
          >
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ayusht21/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-item linkedin"
          >
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:ayushtiwari20072001@gmail.com"
            className="connect-item email"
          >
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span>Email</span>
          </a>
        </div>
      )}
    </div>
  );
}
