import React, { useEffect, useState } from "react";
import DG from "../../../assets/img/DG.svg";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { otpAuth } from "../../../redux/otpSlice";
import { clearResendData, resendOtpApi } from "../../../redux/resendOtpSlice";
import { clearSponsorData } from "../../../redux/checkSponsorIdSlice";
import { ClipLoader } from "react-spinners";

const Index = () => {
  const [otp, setOtp] = useState("");
  const signupSuccess = useSelector((state) => state.signup.data);
  const loginSuccess = useSelector((state) => state.login.data);
  const otpSuccess = useSelector((state) => state.otpReducer.data);
  const resendOtpResponse = useSelector((state) => state.resendOtpReducer.data);
  const isLoadingResend = useSelector(
    (state) => state.resendOtpReducer.isLoading
  );
  const isLoading = useSelector((state) => state.otpReducer.isLoading);
  const userId = localStorage.getItem("userId");

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onOtpClick = () => {
    console.log("klflkdsj");
    if (otp.length < 6) {
      alert("Please enter valid otp");
    } else {
      const type = signupSuccess != null ? 1 : 3;
      const id =
        signupSuccess != null ? signupSuccess.data._id : loginSuccess.data._id;
      const payload = {
        type: type, //1 for user verification and 3 for login verifications
        otp: otp,
        _id: id,
        fcmToken: "Anmol",
      };

      console.log("OTP Payload ===> ", payload);
      dispatch(otpAuth(payload));
    }
  };

  useEffect(() => {
    return () => {
      console.log("Check Resend");
      dispatch(clearResendData());
      dispatch(clearSponsorData());
    };
  }, []);

  const onResendClick = () => {
    const payload = {
      email:
        signupSuccess != null
          ? signupSuccess.data.email
          : loginSuccess.data.email,
    };
    dispatch(resendOtpApi(payload));
  };

  useEffect(() => {
    console.log("OTP Success ===> ", otpSuccess);
    if (otpSuccess != null && otpSuccess.status == 1) {
      localStorage.setItem("token", otpSuccess.token);
      navigation("/home_page");
    } else if (otpSuccess != null) {
      alert(otpSuccess.message);
    }
  }, [otpSuccess]);

  useEffect(() => {
    if (resendOtpResponse != null) {
      alert("Please check your mail for verification code");
    } else if (resendOtpResponse != null) {
      alert(resendOtpResponse.message);
    }
  }, [resendOtpResponse]);

  return (
    <div className="otp">
      <div className="screen_otp">
        <div className="logo">
          <div className="dg_image">
            <img src={DG} alt="DG" />
            <h2>Dapic games</h2>
          </div>
        </div>

        <div className="lottery">
          <h5>Enter verification code</h5>
          <p>Enter 6-digit code we just texted to your email address.</p>
        </div>

        <form
          method="get"
          className="digit-group"
          data-group-name="digits"
          data-autosubmit="false"
        >
          <OTPInput
            value={otp}
            onChange={(value) => setOtp(value)}
            numInputs={6}
            containerStyle={{ marginTop: 40 }}
            // inputStyle={{ width: "50px", height: "50px" }}
            inputType="number"
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}
          />
          <br />
          <br />
          <button
            type="button"
            className="login_button"
            onClick={() => {
              onOtpClick();
            }}
          >
            {isLoading ? <ClipLoader color="#FFF" /> : "Submit"}
          </button>
          <button
            type="button"
            className="register"
            onClick={() => {
              onResendClick();
            }}
          >
            {isLoadingResend ? <ClipLoader color="#6561C0 " /> : "Resend Code"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
