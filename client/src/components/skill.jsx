import "./skill.css"
function Skill({svg, name}) {

    return (
        <div className="skill">
            <div className="skill-icon">
                {svg}
            </div>

            <h4 className="skill-name">{name}</h4>
        </div>
    )

}

export default Skill;