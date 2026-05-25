import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./loader.css";

function Loader({ onComplete }) {
    useGSAP(() => {




        //  Text animation (per-character)
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        tl.from(".loader-char", {
            y: 40,
            opacity: 0,
            stagger: 0.04,
            duration: 0.9,
            ease: "power4.out",
        })
            .to({}, { duration: 0.7 })
            .to(".loader-char", {
                y: -70,
                opacity: 0,
                stagger: 0.03,
                duration: 0.6,
                ease: "power2.in",
            })
            .to(".block", {
                y: "-100%",
                duration: 0.8,
                ease: "sine.inOut",
                yoyo: true,
            });


    }, []);


    const name = "ALCHURI. PRANEETH REDDY";

    const words = name.split(" ");

    return (
        <div className="loader">
            <div className="blocks">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="block"></div>
                ))}
            </div>

            <h1 className="loader-text" data-allow-wrap="true">
                {words.map((word, wi) => (
                    <span className="loader-word" key={wi}>
                        {word.split("").map((char, ci) => (
                            <span className="loader-char" key={ci}>{char}</span>
                        ))}
                    </span>
                ))}
            </h1>
        </div>
    );
}

export default Loader;