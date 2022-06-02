import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        id: "",
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload.others;
            state.id = action.payload.others._id;
            localStorage.setItem("token", action.payload.others.token);
            localStorage.setItem("userId", action.payload.others._id);
        },
        loginOutSuccess: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.id = "";
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, loginOutSuccess } = userSlice.actions;
export default userSlice.reducer;