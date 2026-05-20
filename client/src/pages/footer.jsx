import "./footer.css";
import GitHubIcon from "../components/icons/GitHubIcon";
import LinkdinIcon from "../components/icons/LinkdinIcon";
import MailIcon from "../components/icons/MailIcon";
import LocationIcon from "../components/icons/LocationIcon";
import ClockfiveIcon from "../components/icons/ClockfiveIcon";
import TelegramIcon from "../components/icons/TelegramIcon";
import GreenMailIcon from "../components/icons/GreenMailIcon";

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div id="footer-section">

            <div className="footer-upper">

                <div className="footer-content">
                    <div className="footer-content-img">
                        <img src="/logo.png" alt="logo" />
                    </div>

                    <div className="footer-content-header">
                        <h3>ALCHURI SAI PRANEETH REDDY</h3>
                    </div>

                    <div className="footer-line"></div>

                    <div className="footer-content-details">
                        <p className="footer-content-desc">
                            Building digital experiences that <br /> are thoughful, scalable and impact
                        </p>
                    </div>

                    <div className="footer-content-opp">
                        <div className="footer-dot"></div>
                        <h5>Open to Opportunities</h5>
                    </div>
                </div>

                <div className="footer-connect">
                    <div className="footer-connect-upper">

                        <div className="footer-connect-header">
                            <h3>LET'S CONNECT</h3>
                        </div>

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

                    </div>

                    <div className="footer-connect-middle"></div>


                    <div className="footer-connect-below" >
                        <ul>
                            <li><LocationIcon /> <span>India</span></li>
                            <li><ClockfiveIcon /> <span>IST(UTC +5:30)</span></li>
                            <li><TelegramIcon /> <span>Always open to collaborate</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-contact" >

                    <div className="footer-contact-upper">
                        <div className="footer-contact-icon">
                            <GreenMailIcon />
                        </div>

                        <div className="footer-contact-touch">
                            <h3>Let's stay in touch</h3>
                        </div>

                    </div>

                    <div className="footer-contact-lower">
                        <form>
                            <textarea
                                name="content"
                                placeholder="Enter your email"
                                rows="1"
                            />
                            <button type="submit">→</button>
                        </form>
                        <p className="footer-contact-note">No spam, ever. Unsubscribe anytime.</p>
                    </div>

                </div>

            </div>


            <div className="footer-lower">
                <div className="copyright-section">
                    <p>©{year} Alchuri Sai Praneeth Reddy. All rights reserved.</p>
                </div>
            </div>




        </div>

    )
}

export default Footer;

// <div className="footer-content">

//     <div className="footer-line"></div>

//     <div className="footer-icons">
//         <a href="https://github.com/saipran23" target="_blank" rel="noopener noreferrer">
//             <GitHubIcon />
//         </a>

//         <a href="https://www.linkedin.com/in/alchuri-sai-praneeth-reddy/" target="_blank" rel="noopener noreferrer">
//             <LinkdinIcon />
//         </a>

//         <a href="mailto:asaipr1223@gmail.com" target="_blank" rel="noopener noreferrer">
//             <MailIcon />
//         </a>
//     </div>
//     <div className="copyright-section">
//         <p>©{year} Alchuri Sai Praneeth Reddy</p>
//     </div>
// </div>