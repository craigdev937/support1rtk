import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "../models/Interfaces";

const initialState: UserState = {
    user: null,
    isAuth: false
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload,
            state.isAuth = true
        },
        clearUser: (state) => {
            state.user = null,
            state.isAuth = false
        },
    }
});

export const ACT = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;



