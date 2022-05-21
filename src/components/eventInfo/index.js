
import './style.css'
import { useState, useEffect } from 'react'

export default function EventsInfo() {
    const [EventData, updateEventData] = useState([]);
    useEffect(() => {
        fetch('https://json.extendsclass.com/bin/9650252a1d38')
            .then((res) => res.json())
            .then((jsonRes) => updateEventData(jsonRes))
    }, [])

    console.log(EventData);

    return (

        <div className="EventDataContainer">

            {EventData.map((currItem, indx) => {


                return (


                    <div key={indx} className="EventDataItems">
                        <img src={currItem.url} className='ArtistImg' ></img>


                        <div className='info'>
                            <h2>{currItem.name} </h2>
                            <p>{currItem.date} </p>
                            <p>{currItem.time} </p>
                            <p>{currItem.info} </p>
                        </div>


                    </div>

                )

            })


            }
        </div>
    )
}