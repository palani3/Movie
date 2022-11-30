import { configureStore } from '@reduxjs/toolkit'
import  AuthSliceReducer  from './AuthSlice'
import counterReducer from './Counter'



export default configureStore({
  reducer: {
    counter: counterReducer,
    Auth:AuthSliceReducer

  },
})