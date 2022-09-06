import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    photo: '',
  },
  reducers: {
    login: (state, action) => { //when user logs in remember the following:
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.photo = action.payload.photo;
    },
    logout: (state) => { //when user logs out then reset/forget
        state.name = null;
        state.email = null;
        state.photo = null;
    },
    
  },
});



export const { login, logout } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;