import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import email_icon from "../../../assets/img/email_icon.svg";
import password_icon from "../../../assets/img/password_icon.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, useNavigate } from "react-router-dom";
import support from "../../../assets/img/support.svg";
import DG from "../../../assets/img/DG.svg";

import {
  VisibilityTwoTone,
  VisibilityOffTwoTone,
  Token,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/loginSlice";
import LoadingButton from "../../Loader/LoadingButton";
import { CircleLoader, ClipLoader, RotateLoader } from "react-spinners";
import { colors } from "@mui/material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
    const isValidEmail = emailRegex.test(newEmail);
    setIsValid(isValidEmail);
  };

  const loginSuccess = useSelector((state) => state.login.data);
  const isLoading = useSelector((state) => state.login.isLoading);

  const navigation = useNavigate();

  console.log("Login Response ===> ", loginSuccess);

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("Token ===> ", token?.length);
    if (token?.length > 0) {
      navigation("/home_page");
    }
  }, [token]);

  const onLoginClick = () => {
    if (email.length == 0) {
      alert("Please enter email!");
    } else if (password.length == 0) {
      alert("Please enter password");
    } else {
      const payload = {
        email: email,
        password: password,
        fcmToken: "Anmol",
      };
      console.log("Payload Login ===> ", payload);
      dispatch(loginUser(payload));
    }
  };

  useEffect(() => {
    if (loginSuccess != null && loginSuccess.status == 1) {
      localStorage.setItem("userId", loginSuccess.data._id);
      navigation("/otp");
    } else if (loginSuccess != null) {
      alert(loginSuccess.message);
    }
  }, [loginSuccess]);

  //loader
  const [loading, setLoading] = useState(false);
  const handleLoaderClick = () => {
    setLoading(true);
    // Your loading logic here
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulate a 2-second loading time
  };

  //loader
  const [loadingRegister, setLoadingRegister] = useState(false);
  const handleLoaderRegisterClick = () => {
    setLoadingRegister(true);
    // Your loading logic here
    setTimeout(() => {
      setLoadingRegister(false);
    }, 1000); // Simulate a 2-second loading time
  };

  return (
    <>
      <div className="login">
        <div className="login_section">
          <div className="lottery">
            <div className="logo">
              <img src={DG} alt="DG" />
              <h2>Dapic games</h2>
            </div>
            <h5>Login</h5>
            <p>Please login by email</p>
          </div>

          <div className="secound_section">
            <div className="inner">
              <FloatingLabel
                controlId="floatingInput"
                label="ENTER YOUR  EMAIL ADDRESS"
                className="mb-3"
              >
                <img src={email_icon} alt="email" />
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                />
              </FloatingLabel>

              {email.length != 0 && !isValid ? (
                <p style={{ color: "red" }}>Invalid email address</p>
              ) : (
                ""
              )}

              <FloatingLabel controlId="floatingPassword" label="PASSWORD">
                <img src={password_icon} alt="password" className="password" />
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="PASSWORD"
                  name="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <button
                  type="button"
                  className="passwod_btn"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <VisibilityTwoTone />
                  ) : (
                    <VisibilityOffTwoTone />
                  )}
                </button>
              </FloatingLabel>
              <div className="forgot_link">
                <Link to="/forgot" className="forgot">
                  Forgot Password?
                </Link>
              </div>
              <div className="login_link">
                <button
                  className="login_button"
                  onClick={() => {
                    onLoginClick();
                  }}
                >
                  {isLoading ? <ClipLoader color="#FFF" /> : "Login"}
                </button>
              </div>
              <div className="register_link">
                <button
                  className="register_button"
                  onClick={() => {
                    navigation("/register");
                  }}
                >
                  Register
                </button>
              </div>
              <div className="upper">
                <img src={support} alt="support" />
                <h5>Customer Support</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
