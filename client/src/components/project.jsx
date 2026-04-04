import "./project.css";

function Project(props){
    return(
        <div className="project-section">

            <div>
                <h4>props.title</h4>
            </div>
            <div>
                <ul>
                    {props}
                </ul>
            </div>

        </div>
    )
}

export default Project;