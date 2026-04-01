import "./about.css"
import Contactme from "./contactMe";
function About() {

    return (
        <>
            <div className="about-section">
                <div className="about">
                    <h2 className="about-title">About me</h2>
                    <div className="line"></div>
                    <p className="about-desc">
                        I’m Sai Praneeth Reddy, a full-stack web developer with a strong focus on building modern, scalable, and user-friendly web applications. I work across both frontend and backend, using technologies like React, JavaScript, Node.js, Express, and PostgreSQL to create clean interfaces and efficient systems.
                        I pay close attention to design, performance, and code quality, ensuring that applications are intuitive, responsive, and maintainable. I enjoy solving real-world problems through code and continuously improving my skills by learning new tools and best practices. My goal is to build impactful digital experiences that are both visually appealing and technically robust.</p>
                </div>

                <div className="profile-circle">
                    <img src="/profile-about.png" alt="profile" />
                </div>

            </div>

            <Contactme />

        </>
    )

}

export default About;