import "./projectCard.css";

import { useNavigate } from "react-router-dom";

// import projectsData from "./projectData";
import projectCardData from "./projectCardData";

function projectCard({ project, num }) {

    const navigate = useNavigate();

    function handleClick() {
        const slug = project.title.toLowerCase().replace(/\s+/g, "-");
        navigate(`/projects/${slug}`);

    }

    return (
        <div className="product-card" onClick={handleClick}>
            <div className="product-card-content">
                <div className="project-card-header">
                    <span className="project-card-number">_0{num}</span>
                </div>

                <div className="product-card-title">
                    <h3>{project.title}</h3>
                </div>

            </div>

            <div className="projectCard-skills">
                <ul className="projectCard-skills-list">
                    {project.mainSkills.map((skill) => {
                        return <li className="projectCard-skills-items">{skill}</li>
                    })}
                </ul>
            </div>

        </div>
    )
}

export default projectCard;