import "./project.css";
import { useParams } from "react-router-dom";

import GitHubIcon from "./icons/GitHubIcon";
import projectsData from "./projectData";

function Project() {

    const { projectTitle } = useParams();

    const project = projectsData.find((p) => {
        const slug = p.title
            .toLowerCase()
            .replace(/\s+/g, "-");
        return slug === projectTitle;
    });

    const middle = Math.ceil(project.keyFeatures.length / 2);
    const firstHalf = project.keyFeatures.slice(0, middle);
    const secondHalf = project.keyFeatures.slice(middle);

    function gitHubButton() {
        window.open(project.gitHubUrl);
    }

    if (!project) {
        return <h1>Project Not Found</h1>;
    }

    return (
        <div id="project-section">
            <div className="project-back-button">
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
            </div>
            <div className="project-hero-section">
                <div className="project-hero-content">
                    <div className="project-header">
                        <h4 className="project-label">Project Title</h4>
                    </div>

                    <h1 className="project-title">{project.title}</h1>
                    <div className="project-divider"></div>

                    <div className="project-tagline-section">
                        <h4 className="project-tagline-title">
                            Tagline / Short Description
                        </h4>

                        <p className="project-tagline-text">
                            {project.tagline}
                        </p>
                    </div>

                    <div className="project-buttons">
                        <button className="project-btn github-btn" onClick={gitHubButton}>
                            <GitHubIcon /> GitHub
                        </button>

                    </div>

                </div>

                <div className="project-hero-image">

                    <img className="project-image" src={project.screenshots} alt="project-image" />

                </div>
            </div>


            <div className="project-techStack">

                <div className="project-header">
                    <h4 className="project-label">Tech Stack</h4>
                </div>

                <ul className="project-techStack-list">
                    {project.techStack.map((tech, index) => {
                        return (<li className="project-techStack-item">{tech}</li>)
                    })}
                </ul>

            </div>

            <div className="keyFeatures">

                <div className="project-header">
                    <h4 className="project-label">key Features</h4>
                </div>



                <div className="project-keyFeatures">

                    <div className="feature-column">
                        {firstHalf.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <div className="feature-top">
                                    <h3 className="feature-title">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="feature-description">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="feature-column">
                        {secondHalf.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <div className="feature-top">
                                    <h3 className="feature-title">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="feature-description">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Project;