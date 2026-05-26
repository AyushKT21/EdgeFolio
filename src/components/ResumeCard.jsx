export default function ResumeCard({ activeSection, setActiveSection, isFocused }) {
  const isActive = activeSection === "resume";

  return (
    <div
      className={`glass-card resume ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
      onClick={() => setActiveSection(isActive ? null : "resume")}
    >
      <div className="card-top-header">
        <div className="badge-icon-wrap orange-badge">
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <div className="header-text">
          <h3>Resume</h3>
          <p className="subtitle">My professional overview and achievements</p>
        </div>
      </div>

      {/* Decorative document code lines on the right */}
      <div className="document-lines-accent">
        <div className="doc-line line-1"></div>
        <div className="doc-line line-2"></div>
        <div className="doc-line line-3"></div>
      </div>

      <button className="arrow-btn" aria-label="View resume details">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {isActive && (
        <div className="detail-content" onClick={(e) => e.stopPropagation()}>
          <div className="resume-download-section">
            <p>Click below to download or view my comprehensive resume detailing all my achievements, education, and career experience.</p>
            <div className="resume-actions">
              <a href="#download" className="action-link-btn orange-btn">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}