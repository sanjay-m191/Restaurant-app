import './style.css'

export default function HomePage() {

    return (
        <div>
            <div className="homePage1">
                <div className='insideHomePage1'>
                    <div className='reservationLogo' >

                    </div>
                    <p>Join us for indoor or outdoor Dinning</p>
                </div>
            </div>

            <div className='homePage2'>

                <div className='insideHomepage2'>
                    <div>
                        <p className='menuPara'>Menu</p >
                        <p className='eventsPara'>Events</p >
                        <p className='reservationPara'>Reservation</p >
                    </div>
                </div>

            </div>


            <div className='homePage3'>
                <p className='homePage3Para'>
                    Located in the robust hills of Rancho Mission Viejo, Scarlet Kitchen & Lounge delivers the luxe and allure of old Hollywood through its elegant decor and inviting atmosphere.
                </p>
                <p className='homePage3Para2'>Executive chef-owner Paige Riordan masterfully blends East Coast classics with West Coast flavors.</p>
                <button className='reservationBtn'>Make  &nbsp; a &nbsp;  Reservation</button>
            </div>


            <div className='beetContainer'>

                <div className='beetPara'>
                    <p>
                        Scarlet Kitchen and Lounge is a premier kitchen and lounge serving freshly made seasonal comfort food prepared with local and quality ingredients by Executive Chef Paige Riordan and Chef Marty Manley.
                    </p>
                    <br />
                    <p className='beetPara2'>
                        This father daughter duo believe in elevated comfort food dishes that ignite diners senses and brings them to a happy place..
                    </p>

                    <p className='beetPara3'>Learn more about our story&nbsp;.</p>
                </div>

                <div className='beetImg'>

                </div>
            </div>

            <div className='foodContainer'>

            </div>


            <div className='drinkContainer'>
                <div className='drinkImg'>

                </div>
                <div className='drinkInfo'>

                &nbsp; Scarlet Kitchen and Lounge celebrates classic speakeasy era cocktails served in elegant, vintage-style glassware as well as an all-California beer and wine list.
                </div>
            </div>

            <div className='TimeTableContainer'>

            </div>
        </div>

    )
}