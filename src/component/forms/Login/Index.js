import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import email_icon from "../../../assets/img/email_icon.svg";
import password_icon from "../../../assets/img/password_icon.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";
import support from "../../../assets/img/support.svg";
import logo from "../../../assets/img/logo.svg";

import { VisibilityTwoTone, VisibilityOffTwoTone } from "@mui/icons-material";
import { useDispatch } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const onLoginClick = () => {};

  return (
    <>
      <div className="login">
        <div className="login_section">
          <div className="lottery">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h5>Register</h5>
            <p>Please register by email</p>
          </div>

          <div className="secound_section">
            <div className="inner">
              <FloatingLabel
                controlId="floatingInput"
                label="ENTER YOUR  EMAIL ADDRESS"
                className="mb-3"
              >
                <img src={email_icon} alt="email" />
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

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
                <Link to="/" className="forgot">
                  Forgot Password?
                </Link>
              </div>
              <div className="login_link">
                <Link to="/" className="login_button">
                  Login
                </Link>
              </div>
              <div className="register_link">
                <Link to="/register" className="register_button">
                  Register
                </Link>
              </div>
              <div className="upper">
                <img src={support} alt="support" />
                <h5>Customer Support</h5>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <p>
                  By Logging / SigningUp in, you agree to our{" "}
                  <span>Terms of Services</span> and<span> Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
