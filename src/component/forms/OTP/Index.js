import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo.svg";
import OTPInput from "react-otp-input";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { otpVerify } from "../../../redux/otpSlice";

const Index = () => {
    const [otp, setOtp] = useState("");
    const signupSuccess = useSelector((state) => state.signup.data);
    const loginSuccess = useSelector((state) => state.login.data);
    const otpSuccess = useSelector((state) => state.otp.data);

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const onOtpClick = () => {
        // const type = signupSuccess != null ? 1 : 3;
        // const id =
        //   signupSuccess != null ? signupSuccess.data._id : loginSuccess.data._id;
        // const payload = {
        //   type: type, //1 for user verification and 3 for login verifications
        //   otp: otp,
        //   _id: id,
        //   fcmToken: "Anmol",
        // };

        // console.log("OTP Payload ===> ", payload);

        if (otp.length < 6) {
            alert("Please enter valid otp");
        } else {
            navigation("/index");
        }

        // dispatch(otpVerify(payload));
    };

    useEffect(() => {
        console.log("OTP Success ===> ", otpSuccess);
        // if (otpSuccess != null && otpSuccess.status == 1) {
        //   navigation("/index");
        // }
    }, [otpSuccess]);

    return (
        <div className="otp">
            <div className="screen_otp">
                <div className="lottery">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
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
                        inputStyle={{ width: "50px", height: "50px" }}
                        inputType="number"
                        renderSeparator={<span></span>}
                        renderInput={(props) => <input {...props} />}
                    />
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="login_button mt-5"
                        onClick={() => onOtpClick()}
                    >
                        Submit
                    </button>
                    <button type="submit" className="register">
                        Resend Code
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Index;