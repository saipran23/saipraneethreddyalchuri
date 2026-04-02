import "./Hero.css"
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { delay, stagger } from "framer-motion";

gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger);

function Hero() {
    const name = "Sai Praneeth Reddy";
    const roles = [
        "Mobile Developer",
        "Frontend Developer",
        "Full Stack Developer",
        "FULL STACK WEB DEVELOPER",
    ];

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.from(".intro", {
            x: "-100vw",
            duration: 1.5,
            ease: "power3.out"
        })
            .from("#hero-image", {
                x: "100vw",
                duration: 1.5,
                ease: "power3.out"
            }, "<"); 

        tl.from(".hero-desc", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        }, "-=0.5");

        tl.from(".hero-buttons", {
            opacity: 0,
            y: 40,
            scale: 0.95,
            filter: "blur(6px)",
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6");


    }, [])




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
                            transition={{ delay: i * 0.10, ease: "circInOut" }}
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
                <img src="/profile.png" alt="Profile" className="hero-img" />
            </div>
        </div>
    )

}

export default Hero;