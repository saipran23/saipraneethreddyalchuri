import "./Hero.css"

function Hero() {

    return (
        <div id="hero">
            <div className="into">
                <p className="hero-role">FULL STACK WEB DEVELOPER</p>
                <h1 className="hero-title">
                    Hello, my name <br />
                    is Sai Praneeth Reddy
                </h1>

                <p className="hero-desc">
                    I build modern, responsive web applications with clean UI and efficient backend systems.
                    Passionate about creating user-focused experiences, currently working on a personal
                    book tracking platform called OpenShelf.
                </p>
            </div>
            <div className="hero-image">
                <img src="/profile.png" alt="Profile" className="hero-img" />
            </div>
        </div>
    )

}

export default Hero;