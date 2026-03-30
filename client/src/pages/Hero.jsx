import "./Hero.css"

function Hero() {

    return (
        <div id="hero">
            <div className="intro">
                <p className="hero-role">FULL STACK WEB DEVELOPER</p>
                <h1 className="hero-title">
                    Hello, My name <br />
                    is Sai Praneeth Reddy
                </h1>

                <p className="hero-desc">
                    I specialize in building full-stack web applications using modern technologies like Node.js, Express, PostgreSQL, and dynamic UI rendering with EJS. I enjoy creating structured, maintainable systems with intuitive user interfaces.
                </p>

                <div className="hero-buttons">
                    <a
                        href="https://www.linkedin.com/in/alchuri-sai-praneeth-reddy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkdin-btn"
                    >
                        View LinkedIn
                    </a>

                    <a href="#contact" className="touch-btn">
                        Get In Touch
                    </a>
                </div>

            </div>
            <div id="hero-image">
                <img src="/profile.png" alt="Profile" className="hero-img" />
            </div>
        </div>
    )

}

export default Hero;