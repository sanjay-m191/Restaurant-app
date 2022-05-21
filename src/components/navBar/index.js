import './style.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

function NavBar(){
    const [displayMenu, setDisplayMenu] = useState(false);
    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }
    
    return(
        <nav id="main-nav">
            <h1 className='site-title'><Link to="/" className="route-links"><h1>Scarlet Kitchen & Lounge</h1></Link></h1>
            <ul className={`nav-items${displayMenu ? "" : " nav-items-hidden"}`}>
                <li className="nav-item"><Link to="menu" className="route-links">Menu</Link></li>
               <Link to={"EventsInfo"} className="route-links"> <li className="nav-item">Events & Music</li></Link>
               <Link to={"calendar"} className="route-links"> <li className="nav-item">Calendar</li></Link>
                
                <li className="nav-item"><Link to="reservation" className="route-links">Reservations</Link></li>
                <li className="nav-item"><Link to="login" className="route-links">Sign up</Link></li>
            </ul>
            <button id="menu-icon" type='button' onClick={toggleMenu} ></button>
        </nav>
    )
}

export default NavBar