import { useEffect } from "react";
import gsap from "gsap";
import "./loader.css";

function Loader({ onComplete }) {
    useEffect(() => {

        // 🧱 Blocks (UP ↔ DOWN loop)
        gsap.to(".block", {
            y: "-100%",
            duration: 1.2,
            stagger: 0.1,
            ease: "sine.inOut",
            // repeat: -1,
            yoyo: true,
        });

        // 🔤 Text animation
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        tl.from(".loader-text span", {
            y: -100,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
        })
            .to({}, { duration: 0.8 })
            .to(".loader-text span", {
                y: -120,
                opacity: 0,
                stagger: 0.03,
                duration: 0.8,
                ease: "power2.in",
            });

    }, []);


    const name = "SAI PRANEETH REDDY"

    return (
        <div className="loader">
            <div className="blocks">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="block"></div>
                ))}
            </div>

            <h1 className="loader-text">
                {name.split("").map((char, i) => (
                    <span key={i}>{char}</span>
                ))}
            </h1>
        </div>
    );
}

export default Loader;