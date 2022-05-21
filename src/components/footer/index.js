import './style.css'

export default function Footer() {


    return (
        <div className='footerContainer'>
            <div className='subfooter1'>
                <p className='subfooter1Para1'>Scarlet Kitchen & Lounge</p>

                <div className='phoneNo'>
                    <p>(949)503-3086</p>
                    <p className='sqrspace'> Made By SquareSpace</p>
                </div>
            </div>
            <div className='subfooter2'>
                <p>30865 Gateway Place</p>
                <p>Rancho Mission Viejo, CA 92694</p>
            </div>

            <div className='subfooter3'>
                <p>
                    general inquiries email us at:
                </p>
                <a href='info@scarletkl.com'><p className='mailLink'>info@scarletkl.com</p></a>
                <div className='mailLink2'>
                <p>events:</p>
              <a  className='mailAnchorPara' href='events@scarletkl.com'><p className='mailLink'>events@scarletkl.com</p></a>
                </div>

            </div>


            <div className='subfooter4'>
                <div className='logoContainer'>
                    <a href='https://www.instagram.com/scarletkitchenandlounge/'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384031.png' alt={''}></img></a>
                   <a href='https://www.facebook.com/ScarletKitchenandLounge/?eid=ARBOHPvgNX6QONa8suvurFHckdcvHao2dy2eSR8RKA1RmV0qJeLuAEoSaLpAkZAVz_9ROYKMsUTJkOHJ'><img src='https://cdn-icons-png.flaticon.com/512/20/20837.png'  alt={''}></img></a>
                    <a href='https://www.yelp.com/biz/scarlet-kitchen-and-lounge-rancho-mission-viejo-2'><img src='https://cdn-icons.flaticon.com/png/512/2582/premium/2582597.png?token=exp=1652937345~hmac=af44520e823ce6d326bd0eac7a53d2b7' alt={''}></img></a>
                    
                </div>
            </div>

        </div>

    )
}