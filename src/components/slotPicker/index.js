import './style.css';

function SlotPicker() {
    return (
        <div className="slot-picker-container">
            <h2>Reservation at Scarlet Kitchen and Lounge</h2>
            <div className='date-picker-fields'>
                 <select name="partySize" id="partySize" className='date-picker-field'>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <input type='date' className='date-picker-field'></input>

            </div>
        </div>
    )
}

export default SlotPicker;