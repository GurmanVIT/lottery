import React, { useEffect, useState } from "react";
import DG from "../../../assets/img/DG.svg";
import OTPInput from "react-otp-input";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { otpAuth, otpVerify } from "../../../redux/otpSlice";

const Index = () => {
    const [otp, setOtp] = useState("");
    const signupSuccess = useSelector((state) => state.signup.data);
    const loginSuccess = useSelector((state) => state.login.data);
    const otpSuccess = useSelector((state) => state.otpReducer.data);

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
            //   //   navigation("/index");
        }
    };

<<<<<<< HEAD
    useEffect(() => {
        console.log("OTP Success ===> ", otpSuccess);
        if (otpSuccess != null && otpSuccess.status == 1) {
            navigation("/index");
        }
    }, [otpSuccess]);
=======
  useEffect(() => {
    console.log("OTP Success ===> ", otpSuccess);
    if (otpSuccess != null && otpSuccess.status == 1) {
      navigation("/index");
    } else if (otpSuccess != null) {
      alert(otpSuccess.message);
    }
  }, [otpSuccess]);
>>>>>>> 367c1a6b09f50efca4ab225abaff2601e9cb7061

    return (
        <div className="otp">
            <div className="screen_otp">
                <div className="lottery">
                    <div className='logo'>
                        <img src={DG} alt='DG' />
                        <h2>Dapic games</h2>
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
                        type="button"
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
