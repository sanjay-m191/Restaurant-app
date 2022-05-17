import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: "",
  password: "",
  firstName: "",
  lastName: "",
  userAuth: {}
}

export const creds = createSlice({
  name: 'creds',
  initialState,
  reducers: {
      setUserId: (state, action) => {
          state.userId = action.payload;
      },
      setPassword: (state, action) => {
          state.password = action.payload;
      },
      setUserAuth: (state, action) => {
        state.userAuth = action.payload;
      },
      setFirstName: (state, action) => {
        state.firstName = action.payload;
      },
      setLastName: (state, action) => {
        state.lastName = action.payload;
      }
  }
})

export const { setPassword, setUserId, setUserAuth, setFirstName, setLastName } = creds.actions

export default creds.reducer