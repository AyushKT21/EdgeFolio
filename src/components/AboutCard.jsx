export default function AboutCard({ activeSection, setActiveSection, isFocused }) {
    const isActive = activeSection === "about";

    return (
        <div
            className={`glass-card about ${isActive ? "active" : ""} ${isFocused ? "is-focused" : ""}`}
            onClick={() => setActiveSection(isActive ? null : "about")}
        >
            <h2>About Me</h2>
            <p>Who I am as a developer</p>

            {isActive && (
                <div
                    className="detail-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <p>
                        I’m a frontend developer focused on building clean and interactive
                        user interfaces using React.
                    </p>

                    <p>
                        I enjoy breaking UI into reusable components and keeping code simple,
                        readable, and maintainable.
                    </p>

                    <p>
                        I work with state, props, and modern CSS to create responsive layouts
                        and smooth user interactions.
                    </p>

                    <p>
                        Currently, I’m improving my skills by building real-world projects
                        and learning better patterns for scalable frontend development.
                    </p>
                </div>
            )}
        </div>
    );
}
