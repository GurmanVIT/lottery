import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import signupReducer from "./signupSlice";
import otpReducer from "./otpSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    otp: otpReducer,
  },
});

export default store;
