import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import signupReducer from "./signupSlice";
import otpReducer from "./otpSlice";
import sponsorReducer from "./checkSponsorIdSlice";
import forgotReducer from "./forgotSlice";
import resendOtpReducer from "./resendOtpSlice";
import gameHistoryReducer from "./gameHistorySlice";
import myHistoryReducer from "./myHistorySlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    otpReducer: otpReducer,
    sponsorReducer: sponsorReducer,
    forgotReducer: forgotReducer,
    resendOtpReducer: resendOtpReducer,
    gameHistoryReducer: gameHistoryReducer,
    myHistoryReducer: myHistoryReducer,
    profileReducer: profileReducer,
  },
});

export default store;
