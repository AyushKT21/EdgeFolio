export default function ContactCard({ activeSection, setActiveSection, isFocused }) {
    const isActive = activeSection === "contact";

    return (
        <div
            className={`glass-card contact ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
            onClick={() => setActiveSection(isActive ? null : "contact")}
        >
            <h2>Let’s Connect</h2>
            <p>Find me here</p>

            {isActive && (
                <div
                    className="detail-content connect-links"
                    onClick={(e) => e.stopPropagation()}
                >
                    <a
                        href="https://github.com/AyushKT21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-item"
                    >
                        <span className="icon">🐙</span>
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ayusht21/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-item"
                    >
                        <span className="icon">💼</span>
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://x.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-item"
                    >
                        <span className="icon">🐦</span>
                        <span>Twitter</span>
                    </a>

                    <a
                        href="mailto:ayushtiwari20072001@gmail.com"
                        className="connect-item"
                    >
                        <span className="icon">✉️</span>
                        <span>Email</span>
                    </a>
                </div>
            )}
        </div>
    );
}
