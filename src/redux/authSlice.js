import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      loggedIn: false,
      role: ""
    },
    reducers: {
      login: (state) => {
        state.loggedIn = true;
        state.role = "staff";
      },
      logout: (state) => {
        state.loggedIn = false;
        state.role = "";
      },
      adminLogin: (state) => {
        state.loggedIn = true;
        state.role = "admin";
      },
    },
  });
  
  export const { login, logout, adminLogin } = authSlice.actions;
  export default authSlice.reducer;