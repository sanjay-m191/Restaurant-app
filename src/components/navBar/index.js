import './style.css'
import { useState } from 'react'

function NavBar(){
    const [displayMenu, setDisplayMenu] = useState(false);
    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }
    
    return(
        <nav id="main-nav">
            <h1 className='site-title'>BLACK PORT</h1>
            <ul className={`nav-items${displayMenu ? "" : " nav-items-hidden"}`}>
                <li className="nav-item">Menu</li>
                <li className="nav-item">Events</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Gallery</li>
                <li className="nav-item">Reservations</li>
            </ul>
            <button id="menu-icon" type='button' onClick={toggleMenu} ></button>
        </nav>
    )
}

export default NavBar