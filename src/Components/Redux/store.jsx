import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'
// import counterReducer from '../features/counter/counterSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})