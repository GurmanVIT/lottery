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
import notificationReducer from "./notificationSlice";
import changePasswordReducer from "./changePasswordSlice";
import changeNickNameReducer from "./changeNickNameSlice";
import deleteReducer from "./deleteSlice";
import depositWalletReducer from "./depositWalletSlice";
import usdtDepositTransactionsReducer from "./usdtDepositTransactionsSlice";
import submitFeedbackReducer from "./feedbackSlice";
import activateAccountReducer from "./activateAccountSlice";
import addQueryReducer from "./addQuerySlice";
import uploadFileReducer from "./uploadFileSlice";
import walletTransactionsReducer from "./walletTransactionSlice";
import updateWalletAddressReducer from "./updateWalletAddressSlice";
import apiWithdrawRequestReducer from "./withdrawRequestSlice";
import submitWithdrawRequest from "./submitWithdrawRequestSlice";

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
    notificationReducer: notificationReducer,
    changePasswordReducer: changePasswordReducer,
    changeNickNameReducer: changeNickNameReducer,
    deleteReducer: deleteReducer,
    depositWalletReducer: depositWalletReducer,
    usdtDepositTransactionsReducer: usdtDepositTransactionsReducer,
    submitFeedbackReducer: submitFeedbackReducer,
    activateAccountReducer: activateAccountReducer,
    addQueryReducer: addQueryReducer,
    uploadFileReducer: uploadFileReducer,
    walletTransactionsReducer: walletTransactionsReducer,
    updateWalletAddressReducer: updateWalletAddressReducer,
    apiWithdrawRequestReducer: apiWithdrawRequestReducer,
    submitWithdrawRequest: submitWithdrawRequest,
  },
});

export default store;
