// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'userlist',
    initialState: [],
    reducers: {
        setuselist: (state, action) => {
            // console.log(state)
            // console.log(action)
            // state.isAuthenticated = action.payload.isAuthenticated;
            // state.user = action.payload.user;
            state.asd = [];
            // state.ap = [];
        },

    },
});

export const { setuselist } = authSlice.actions;

export const selectUserlist = (state) => state.userlist;

export default authSlice.reducer;
