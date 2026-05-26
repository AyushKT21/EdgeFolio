export default function MainCard() {
  return (
    <div className="glass-card main-card">
      <div className="welcome-badge">
        <span className="emoji">👋</span> Welcome!
      </div>

      <h1 className="hero-title">
        Hi, I’m <span className="gradient-text">Ayush</span>
      </h1>

      <p className="hero-subtitle">
        Frontend Developer • React • UI Lover
      </p>

      <div className="tech-stack-container">
        {/* React Logo */}
        <div className="tech-badge" title="React">
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="tech-icon react-spin">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>

        {/* Next.js Logo */}
        <div className="tech-badge" title="Next.js">
          <svg viewBox="0 0 128 128" className="tech-icon">
            <circle cx="64" cy="64" r="62" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M96 92L47 34h-6v60h8V44l41 53z" fill="currentColor" />
            <rect x="88" y="34" width="8" height="30" fill="currentColor" />
          </svg>
        </div>

        {/* Tailwind CSS Logo */}
        <div className="tech-badge" title="Tailwind CSS">
          <svg viewBox="0 0 24 24" className="tech-icon">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.595 14.826 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.205 15.175 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624.777.792 1.937 2.176 5.112 2.176 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.405 9.175 12 6.001 12z" fill="#06b6d4" />
          </svg>
        </div>

        {/* TypeScript Logo */}
        <div className="tech-badge" title="TypeScript">
          <svg viewBox="0 0 24 24" className="tech-icon rounded-svg">
            <rect width="24" height="24" rx="4" fill="#3178c6" />
            <text x="12" y="17" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="bold">TS</text>
          </svg>
        </div>

        {/* Framer Motion Logo */}
        <div className="tech-badge" title="Framer Motion">
          <svg viewBox="0 0 24 24" className="tech-icon">
            <path d="M12 24l-12-12h12v12zm0-12l12-12h-24l12 12zm0 0h12v12l-12-12z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}