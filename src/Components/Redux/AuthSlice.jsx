import { createSlice } from '@reduxjs/toolkit'
export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
      Token: '',
    },
    reducers: {
  
      AuthToken: (state, action) => {
        state.Token += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { AuthToken } = AuthSlice.actions
  
  export default AuthSlice.reducer