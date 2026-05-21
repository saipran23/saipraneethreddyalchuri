import React, { useState } from "react";
import "./contactMe.css";
import axiosInstance from "../api/axios";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import toast, { Toaster } from 'react-hot-toast';

function Contactme() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);


    // useGSAP(
    //     () => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".contactMe-section",
    //                 start: "top 90%",
    //                 end: "top 30%",
    //                 scrub: 1.5,
    //                 // invalidateOnRefresh: true,
    //                 // markers: true,
    //             }
    //         });


    //         tl.fromTo(".contactme-title-sec",
    //             { opacity: 0, y: 32 },
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.42,
    //                 ease: "power4.inOut"
    //             }
    //         )
    //             .fromTo(".form-container",
    //                 { opacity: 0, y: 32 },
    //                 {
    //                     opacity: 1,
    //                     y: 0,
    //                     duration: 0.42,
    //                     ease: "power4.inOut"
    //                 }, "<"
    //             )
    //             .fromTo(".form-container label, .form-container input, .form-container textarea",
    //                 { opacity: 0, y: 16 },
    //                 {
    //                     opacity: 1,
    //                     y: 0,
    //                     duration: 0.45,
    //                     stagger: 0.05,
    //                     ease: "power4.inOut"
    //                 }, 0.1
    //             )
    //             .fromTo(".send-btn",
    //                 { opacity: 0, y: 16, scale: 0.98 },
    //                 {
    //                     opacity: 1,
    //                     y: 0,
    //                     scale: 1,
    //                     duration: 0.42,
    //                     ease: "power4.inOut"
    //                 }, "-=0.2"
    //             );

    //     }

    // );


    // const notify = () => toast.success('Send Successfully!');

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        try {
            const request = axiosInstance.post("/contact", {
                name,
                email,
                message,
            });
            await toast.promise(request, {
                loading: "Sending message...",
                success: (res) => res.data.message || "Sent successfully 🚀",
                error: (err) =>
                    err.response?.data?.message || "Failed to send ❌",
            });

            setEmail('');
            setName('');
            setMessage('');
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    }

    return (
        <div className="contactMe-section">
            <Toaster position="top-center" containerClassName="popup-msg"
                toastOptions={{
                    className: '',
                    duration: 5000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                }}
            />
            <div className="contactme-border">
                <div className="contactMe-content">
                    <div className="contactme-title-sec">
                        <h4 className="contactme-title">Contact Me</h4>
                    </div>

                    <div className="contactme-title-msg">
                        <h3>Let's Build <br /> something <br /> sharp </h3>
                        <div className="contactme-line"></div>
                        <p>Have an idea, role, or project in mind? Send a <br /> note and I'|| get back with a clear next step.</p>
                    </div>

                    <div className="contactme-tags">
                        <ul>
                            <li>Fast replies</li>
                            <li>Open to freelance</li>
                            <li>Remote friendly</li>
                        </ul>
                    </div>
                </div>

                <div className="contactMe">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="contact-n-e">
                            <div className="contact-classname">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="contact-email">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-m-b">

                            <label>Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Enter your message"
                                className="textarea"
                                required
                            />

                            <button className="send-btn" type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactme;
