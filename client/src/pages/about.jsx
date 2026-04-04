import "./about.css"
import Contactme from "./contactMe";

import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin, ScrollTrigger);

function About() {

    const navigate = useNavigate();



    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none none",
                // markers: true // enable for debugging
            }
        });

        tl.from(".about", {
            y: "300px",
            duration: 1.5,
            ease: "power3.out"
        })
            .from(".profile-circle", {
                y: "300px",
                duration: 1.5,
                ease: "power3.out"
            }, "<");

        tl.from(".about-desc", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        }, "-=0.3");

        tl.from(".resume-btn", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        }, "-=0.4");
    })

    return (
        <div id="about">
            <div className="about-section">
                <div className="about">
                    <a href="#"
                        className="back-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.history.back();
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300"><path d="m12 19-7-7 7-7">
                        </path><path d="M19 12H5"></path>
                        </svg>Back
                    </a>
                    <h2 className="about-title">About me</h2>
                    <div className="line"></div>
                    <p className="about-desc">
                        I’m Sai Praneeth Reddy, a full-stack web developer with a strong focus on building modern, scalable, and user-friendly web applications. I work across both frontend and backend, using technologies like React, JavaScript, Node.js, Express, and PostgreSQL to create clean interfaces and efficient systems.
                        I pay close attention to design, performance, and code quality, ensuring that applications are intuitive, responsive, and maintainable. I enjoy solving real-world problems through code and continuously improving my skills by learning new tools and best practices. My goal is to build impactful digital experiences that are both visually appealing and technically robust.
                    </p>
                    <div className="about-buttons">

                        <button className="resume-btn"
                            onClick={() => window.open("/resume.pdf", "_blank")}
                        >
                            Resume
                        </button>

                    </div>
                </div>

                <div className="profile-circle">
                    <img src="/profile-about.png" alt="profile" />
                </div>

            </div>

            <Contactme />

        </div>
    )

}

export default About;