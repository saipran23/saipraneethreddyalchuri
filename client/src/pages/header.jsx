import './header.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Header() {

    useGSAP(() => {

        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav',
            { backgroundColor: 'transparent' },
            {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        );

    }, [])


    return (
        <nav>
            <div id='header'>
                <ul className="buttons">
                    <li className="header-button">
                        About
                    </li>

                    <li className="header-button">
                        Projets
                    </li>

                    <li className="header-button">
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;