import "./footer.css";
import GitHubIcon from "../components/icons/GitHubIcon";
import LinkdinIcon from "../components/icons/LinkdinIcon";
import MailIcon from "../components/icons/MailIcon";

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div id="footer-section">
            <div className="wave">
                <img src="/wave2.png" alt="wave" />
            </div>
            <div className="line"></div>
            <div className="footer-content">
                <div className="footer-icons">

                    <a href="https://github.com/saipran23" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>

                    <a href="https://www.linkedin.com/in/alchuri-sai-praneeth-reddy/" target="_blank" rel="noopener noreferrer">
                        <LinkdinIcon />
                    </a>

                    <a href="mailto:asaipr1223@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MailIcon />
                    </a>
                </div>
                <div className="copyright-section">
                    <p>©{year} Alchuri Sai Praneeth Reddy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;