import "./projects.css";

import projectsData from "../components/projectData";
import projectCardData from "../components/projectCardData";
import Project from "../components/project";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div  className="project-section">
            <div className="projects-header">
                <h2 className="project-sec-name">SELECTED PROJECTS</h2>
            </div>
            <div className="projects">
                {
                    projectCardData.map((project, index) => (
                        <ProjectCard key={index} project={project} num={index + 1} />
                    ))
                }

            </div>
        </div >
    )
}

export default Projects;

