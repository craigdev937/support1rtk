import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserAPI } from "./UserAPI";
import { AuthReducer } from "./AuthSlice";

export const RED = configureStore({
    reducer: {
        auth: AuthReducer,
        [UserAPI.reducerPath]: UserAPI.reducer,
    },      // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(UserAPI.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


