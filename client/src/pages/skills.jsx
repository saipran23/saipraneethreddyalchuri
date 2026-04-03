import "./skills.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Skill from "../components/skill";
import JavaIcon from "../components/icons/JavaIcon";
import PythonIcon from "../components/icons/PythonIcon";
import JsIcon from "../components/icons/JsIcon";
import HtmlIcon from "../components/icons/HtmlIcon";
import CssIcon from "../components/icons/CssIcon";
import BootStrapIcon from "../components/icons/BootStrapIcon";
import ExpressIcon from "../components/icons/ExpressIcon";
import NodeIcon from "../components/icons/NodeIcon";
import ReactIcon from "../components/icons/ReactIcon";
import PostgresqlIcon from "../components/icons/PostgresqlIcon";
import MySqlIcon from "../components/icons/MySqlIcon";
import GitIcon from "../components/icons/Giticon";
import GitHubIcon from "../components/icons/GitHubIcon";
import PostmanIcon from "../components/icons/postmanIcon";
import CIcon from "../components/icons/CIcon";
import NpmIcon from "../components/icons/NpmIcon";

function Skills() {
    const rootRef = useRef(null);

    const skillCategories = [
        {
            category: "Languages",
            skills: [
                { name: "Java", svg: <JavaIcon /> },
                { name: "Python", svg: <PythonIcon /> },
                { name: "C", svg: <CIcon /> },
                { name: "JavaScript", svg: <JsIcon /> },
                
            ],
        },
        {
            category: "Frontend",
            skills: [
                { name: "Html5", svg: <HtmlIcon /> },
                { name: "Css3", svg: <CssIcon /> },
                { name: "Bootstrap", svg: <BootStrapIcon /> },
                { name: "React", svg: <ReactIcon /> },
            ],
        },
        {
            category: "Backend",
            skills: [
                { name: "Node", svg: <NodeIcon /> },
                { name: "Express", svg: <ExpressIcon /> },
            ],
        },
        {
            category: "Databases",
            skills: [
                { name: "Postgresql", svg: <PostgresqlIcon /> },
                { name: "MySql", svg: <MySqlIcon /> },
            ],
        },
        {
            category: "Tools",
            skills: [
                { name: "Git", svg: <GitIcon /> },
                { name: "GitHub", svg: <GitHubIcon /> },
                { name: "Postman", svg: <PostmanIcon /> },
                { name: "Npm", svg: <NpmIcon /> },
            ],
        },
    ];

    useGSAP(
        () => {
            const root = rootRef.current;
            if (!root) return;

            const reduced =
                typeof window !== "undefined" &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            const blocks = gsap.utils.toArray(
                root.querySelectorAll(".skills-block")
            );

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".skills-title",
                        start: "top 88%",
                        end: "top 38%",
                        scrub: 0.8,
                        invalidateOnRefresh: true,
                    },
                })
                .fromTo(
                    ".skills-title",
                    { opacity: 0, y: 32 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.35,
                        ease: "power1.out",
                    }
                );

            blocks.forEach((block) => {
                const title = block.querySelector(".skills-category");
                const cards = block.querySelectorAll(".skill-item");
                if (!title) return;

                if (reduced) {
                    gsap.set([title, ...cards], {
                        clearProps: "transform,opacity",
                    });
                    return;
                }

                gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: block,
                            start: "top 88%",
                            end: "top 38%",
                            scrub: 0.8,
                            invalidateOnRefresh: true,
                        },
                    })
                    .fromTo(
                        title,
                        { opacity: 0, y: 32 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.35,
                            ease: "power1.out",
                        }
                    )
                    .fromTo(
                        cards,
                        { opacity: 0, y: 22 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.45,
                            stagger: 0.03,
                            ease: "power1.out",
                        },
                        0.05
                    );
            });
        },
        { scope: rootRef, dependencies: [] }
    );

    return (
        <div id="skills-container" ref={rootRef}>
            <div className="skills-header">
                <h2 className="skills-title">My Tech Stack</h2>
            </div>

            <div id="skills-section">
                {skillCategories.map((section) => (
                    <div className="skills-block" key={section.category}>
                        <h2 className="skills-category">{section.category}</h2>
                        <div className="skills-grid">
                            {section.skills.map((skill, index) => (
                                <div
                                    className="skill-item"
                                    key={`${section.category}-${skill.name}-${index}`}
                                >
                                    <Skill name={skill.name} svg={skill.svg} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
