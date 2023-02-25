import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      loggedIn: false,
    },
    reducers: {
      login: (state) => {
        state.loggedIn = true;
      },
      logout: (state) => {
        state.loggedIn = false;
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  export default authSlice.reducer;