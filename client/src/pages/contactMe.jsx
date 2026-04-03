import React, { useState } from "react";
import "./contactMe.css";
import axiosInstance from "../api/axios";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contactme() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contactMe-section",
                    start: "top 88%",
                    end: "top 38%",
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                }
            });

            tl.fromTo(".contactme-title-sec",
                { opacity: 0, y: 32 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.42,
                    ease: "power1.out"
                }
            )
            .fromTo(".form-container",
                { opacity: 0, y: 32 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.42,
                    ease: "power1.out"
                }, "<"
            )
            .fromTo(".form-container label, .form-container input, .form-container textarea",
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    stagger: 0.05,
                    ease: "power1.out"
                }, 0.1
            )
            .fromTo(".send-btn",
                { opacity: 0, y: 16, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.42,
                    ease: "power1.out"
                }, "-=0.2"
            );
        }
    );

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const res = await axiosInstance.post("/contact", formData);
        console.log(res);
        setEmail('');
        setName('');
        setMessage('');
        alert("form submitted");
    }

    return (
        <div className="contactMe-section">
            <div className="contactme-title-sec">
                <h2 className="contactme-title">Contact Me</h2>
                <div className="line"></div>
            </div>
            <div className="contactMe">

                <form className="form-container" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />  

                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />

                    <label>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message"
                        className="textarea"
                    />

                    <button className="send-btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contactme;