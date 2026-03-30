import "./skills.css"

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

    const skills = [
        { name: "Java", svg: <JavaIcon /> },
        { name: "Python", svg: <PythonIcon /> },
        { name: "C", svg: <CIcon /> },
        { name: "JavaScript", svg: <JsIcon /> },
        { name: "Html5", svg: <HtmlIcon /> },
        { name: "Css3", svg: <CssIcon /> },
        { name: "Bootstrap", svg: <BootStrapIcon /> },
        { name: "Express", svg: <ExpressIcon /> },
        { name: "Node", svg: <NodeIcon /> },
        { name: "Npm", svg: <NpmIcon /> },
        { name: "React", svg: <ReactIcon /> },
        { name: "Postgresql", svg: <PostgresqlIcon /> },
        { name: "MySql", svg: <MySqlIcon /> },
        { name: "Git", svg: <GitIcon /> },
        { name: "GitHub", svg: <GitHubIcon /> },
        { name: "Postman", svg: <PostmanIcon /> },
    ];

    return (
        <div>

            {skills.map((skill) => (
                <Skill key={skill.name} name={skill.name} svg={skill.svg} />
            ))}

        </div>
    )

}

export default Skills;