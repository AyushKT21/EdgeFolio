export default function SkillsCard({
    activeSection,
    setActiveSection,
    isFocused,
}) {
    const isActive = activeSection === "skills";

    return (
        <div
            className={`glass-card skills ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""
                }`}
            onClick={() => setActiveSection(isActive ? null : "skills")}
        >
            <h2>Skills</h2>
            <p>Tech stack I work with</p>

            {isActive && (
                <div className="detail-content">
                    <div className="skills-group">
                        <h4>Frontend</h4>
                        <div className="skills-list">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>CSS</span>
                            <span>MUI</span>
                        </div>
                    </div>

                    <div className="skills-group">
                        <h4>Backend</h4>
                        <div className="skills-list">
                            <span>Node.js</span>
                            <span>Express</span>
                        </div>
                    </div>

                    <div className="skills-group">
                        <h4>Database</h4>
                        <div className="skills-list">
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
