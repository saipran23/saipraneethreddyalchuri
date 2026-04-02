import './header.css'
function Header() {
    return (
        <div id='header'>

            <div id="header-right">
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


        </div>
    )
}

export default Header;