import "./Hero.css"
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
function Hero() {
    const name = "Sai Praneeth Reddy";
    const roles = [
        "Mobile Developer",
        "Frontend Developer",
        "Full Stack Developer",
        "FULL STACK WEB DEVELOPER",
    ];

    return (
        <div id="hero">
            <div className="intro">
                <p className="hero-role">FULL STACK WEB DEVELOPER</p>
                <h1 className="hero-title">
                    Hello, My name <br />
                    is {name.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.10 , ease: "circInOut" }}
                        >
                            {char}
                        </motion.span>
                    ))}
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

                    <Link to="/about" className="touch-btn">
                        Get In Touch
                    </Link>
                </div>

            </div>
            <div id="hero-image">
                {/* <img src="/profile.png" alt="Profile" className="hero-img" /> */}
                <motion.img
                    src="/profile.png"   // your image path
                    alt="profile"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.0,
                        scale: { type: "spring", bounce: 0.3 },
                    }}
                    style={{
                        maxHeight: "85vh",
                        paddingBottom: "10px",
                    }}
                />
            </div>
        </div>
    )

}

export default Hero;