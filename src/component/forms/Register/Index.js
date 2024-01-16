import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import group from "../../../assets/img/group.svg";
import email_icon from "../../../assets/img/email_icon.svg";
import password_icon from "../../../assets/img/password_icon.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, useNavigate } from "react-router-dom";
import support from "../../../assets/img/support.svg";
import DG from "../../../assets/img/DG.svg";
import { VisibilityTwoTone, VisibilityOffTwoTone } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../redux/signupSlice";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sponsorId, setSponsorId] = useState();
  const [position, setPosition] = useState();

  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
    const isValidEmail = emailRegex.test(newEmail);
    setIsValid(isValidEmail);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const signupSuccess = useSelector((state) => state.signup.data);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onSignUpClick = () => {
    if (password != confirmPassword) {
      alert("Your confirm password not matched");
    } else {
      const payload = {
        email: email,
        firstName: firsName,
        lastName: lastName,
        password: password,
        sponserId: sponsorId,
        position: selectedOption,
      };
      console.log("Payload signup ===> ", payload);
      dispatch(signupUser(payload));
    }
  };

  useEffect(() => {
    console.log("SignUp Success ===>", signupSuccess);
    if (signupSuccess != null && signupSuccess.status == 1) {
      navigation("/otp");
    }
  }, [signupSuccess]);

  return (
    <div className="home_page">
      <div className="register login">
        <div className="register_section login_section">
          <div className="lottery">
            <div className='logo'>
              <img src={DG} alt='DG' />
              <h2>Dapic games</h2>
            </div>
            <h5>Register</h5>
            <p>Please register by email</p>
          </div>

          <div className="secound_section">
            <div className="inner">
              <div className="flex_input d-flex gap-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="FIRST NAME"
                  className="mb-3 "
                >
                  <img src={group} alt="group" className="group" />
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="first_name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="LAST NAME"
                  className="mb-3"
                >
                  <img src={group} alt="group" className="group" />
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FloatingLabel>
              </div>

              <FloatingLabel
                controlId="floatingInput"
                label="ENTER YOUR  EMAIL ADDRESS"
                className="mb-3"
              >
                <img src={email_icon} alt="email" />
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => handleEmailChange(e)}
                />
              </FloatingLabel>

              {email.length != 0 && !isValid ? (
                <p style={{ color: "red" }}>Invalid email address</p>
              ) : (
                ""
              )}

              <FloatingLabel
                controlId="floatingPassword"
                label="PASSWORD"
                className="mb-3"
              >
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

              <FloatingLabel
                controlId="floatingPassword"
                label="CONFIRM PASSWORD"
              >
                <img src={password_icon} alt="password" className="password" />
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="CONFIRM PASWORD"
                  name="Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
                <button
                  type="button"
                  className="passwod_btn"
                  onClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                >
                  {showConfirmPassword ? (
                    <VisibilityTwoTone />
                  ) : (
                    <VisibilityOffTwoTone />
                  )}
                </button>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="ENTER SPONSOR ID"
                className="mb-3 mt-3"
              >
                <img src={group} alt="group" className="group" />
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => setSponsorId(e.target.value)}
                />
              </FloatingLabel>

              <h6>Select Position</h6>
              <label>
                <input
                  type="radio"
                  value="l"
                  checked={selectedOption === "l"}
                  onChange={handleOptionChange}
                />
                {"  "}Left
              </label>

              <label>
                <input
                  className="ms-3"
                  type="radio"
                  value="r"
                  checked={selectedOption === "r"}
                  onChange={handleOptionChange}
                />
                {"  "}Right
              </label>
              <div className="login_link mt-4">
                <button
                  className="login_button"
                  onClick={() => onSignUpClick()}
                >
                  Register
                </button>
              </div>
              <div className="register_link">
                <Link to="/login" className="register_button">
                  I have an account <span>Login</span>
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
                  <span>Terms of Services</span> and
                  <span> Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
