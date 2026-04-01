import React, { useState } from "react";
import "./contactMe.css";

function Contactme() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="contactMe-section">
            <div className="contactme-title-sec">
                <h2 className="contactme-title">Contact Me</h2>
                <div className="line"></div>
            </div>
            <div className="contactMe">

                <form className="form-container">
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

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contactme;