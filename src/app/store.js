import { configureStore } from '@reduxjs/toolkit'
import user from '../components/login/user'


export const store = configureStore({
  reducer: {
    userCreds: user,
  },
})