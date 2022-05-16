import './style.css'

export default function NavBar() {

    return (<>
        <div className="NavBarContainer">

            <div className='logo'><p className='BPlogo'> BLACK PORT</p></div>
            <ul className='sideBar'>
                <li>Menu</li>
                <li>Event</li>
                <li>Book Table</li>
                <li>Login</li>
            </ul>
        </div>

    </>

    )
}