import { createSlice } from '@reduxjs/toolkit'

const dateInst = new Date();
/* const currentDate = dateInst.getFullYear()+'-'+dateInst.getMonth()+'-'+dateInst.getDate();
 */
const currentDate = `${dateInst.getFullYear()}-${dateInst.getMonth() < 10 ? '0'+dateInst.getMonth() : dateInst.getMonth()}-${dateInst.getDate()}`;


const initialState = {
    pickedDate: currentDate,
    pickedTime: '3:30 pm',
    pickedSize: 1,

}

export const pickedSlot = createSlice({
  name: 'pickedSlot',
  initialState,
  reducers: {
      setpickedDate: (state, action) => {
          state.pickedDate = action.payload;
      },
      setPickedTime: (state, action) => {
          state.pickedTime = action.payload;
      },
      setPickedSize: (state, action) => {
        state.pickedSize = action.payload;
      },
  }
})

export const { setpickedDate, setPickedTime, setPickedSize } = pickedSlot.actions

export default pickedSlot.reducer