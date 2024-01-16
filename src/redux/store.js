import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import signupReducer from "./signupSlice";
import otpReducer from "./otpSlice";
import sponsorReducer from "./checkSponsorIdSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    otpReducer: otpReducer,
    sponsorReducer: sponsorReducer,
  },
});

export default store;
