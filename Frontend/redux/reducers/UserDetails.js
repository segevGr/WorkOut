import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
};

export const UserDetails = createSlice({
  name: "UserDetails",
  initialState: initialState,
  reducers: {
    updateLogIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    updateToken: (state, action) => {
      state.token = action.payload;
    },

    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateLogIn, updateToken, updateUser } = UserDetails.actions;
export default UserDetails.reducer;
