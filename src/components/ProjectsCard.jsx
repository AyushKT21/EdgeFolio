export default function ProjectsCard({ activeSection, setActiveSection, isFocused }) {
    const isActive = activeSection === "projects";

    return (
        <div
            className={`glass-card projects ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
            onClick={() => setActiveSection(isActive ? null : "projects")}
        >
            <h2>Projects</h2>
            <p>Things I’ve built</p>

            {isActive && (
                <div className="detail-content projects-list">

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
