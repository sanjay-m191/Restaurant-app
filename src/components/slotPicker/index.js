import './style.css';
import { useState, useEffect } from 'react'
import { setpickedDate, setPickedTime, setPickedSize } from './slotPickerSlice'
import { useSelector, useDispatch } from 'react-redux' 

function SlotPicker() {
    const [partySize, updatePartySize] = useState([]);
    const [timeSlots, updateTimeSlots] = useState([]);
    const [availableTables, updateAvailableTables] = useState([])
    const dispatch = useDispatch();

    console.log(useSelector((state) => state.pickedSlot.pickedDate))

    useEffect(() => {
        fetch('http://localhost:8021/partySize')
        .then((response) => response.json())
        .then((resJson) => updatePartySize(resJson.availableSize))
        .catch(() => console.log("error"))
    
         fetch('http://localhost:8021/slots')
        .then((response) => response.json())
        .then((resJson) => updateTimeSlots(resJson.allSlots))
        .catch(() => console.log("error"))

    }, [])

    const getAvailableTable = (event) => {
        event.preventDefault()
        fetch('http://localhost:8021/availableSlots')
        .then((response) => response.json())
        .then((resJson) => updateAvailableTables(resJson.avilableSlots))
        .catch(() => console.log("error"))
        console.log(availableTables)
    }

    return(
        <form className="slot-picker-container">
            <div className='slot-picker'>
            <h3 className='reservation-title'>Reservation at Scarlet Kitchen and Lounge</h3>
            <div className='slot-fields'>
            <select name="partySize" id="slot-partySize" className='slot-picker-field slot-picker-drop-down'>
                     {
                         partySize.length === 0 ?
                         <option value="0">0</option> :
                         partySize.map((size, sizeIndex) => 
                         <option 
                         key={sizeIndex} 
                         className="drop-down-option" 
                         value={size}>{size} people</option>
                         )                         
                     }
                </select>
                <input 
                type='date' 
                id="slot-picker-date" 
                className='slot-picker-field'
                value={useSelector((state) => state.pickedSlot.pickedDate)}
                onChange={(event) => dispatch(setpickedDate(event.target.value))}></input>
                <select name="time" id="slot-time" className='slot-picker-field slot-picker-drop-down'>
                {
                         timeSlots.length === 0 ?
                         <option value="0">0</option> :
                         timeSlots.map((size, sizeIndex) => 
                         <option 
                         key={sizeIndex} 
                         className="drop-down-option" 
                         value={size}>{size}</option>
                         )                         
                     }
                </select>
                <button 
                type='submit'
                onClick={getAvailableTable}
                className='slot-picker-field slot-picker-submit'>Find Table</button>
            </div>
            <div className='available-slots'>

            {availableTables.map((slot, slotIndex) => <button className='slot-btn' key={slotIndex}>{slot}</button>)}
            </div>
                 </div>
        </form>
    )
}

export default SlotPicker;