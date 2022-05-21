import { configureStore } from '@reduxjs/toolkit'
import user from '../components/signUpComp/user'
import slotPickerSlice from '../components/slotPicker/slotPickerSlice'
import pickedSlot from '../components/slotPicker/slotPickerSlice'

export const store = configureStore({
  reducer: {
    userCreds: user,
    pickedSlot: slotPickerSlice,
  },
})