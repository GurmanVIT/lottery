import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import back from "../../../../assets/img/back.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import pass_pass from "../../../../assets/img/pass_pass.svg";
import Form from "react-bootstrap/Form";
import {
    VisibilityTwoTone,
    VisibilityOffTwoTone,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../../utils/Colors";
import { changePassword, clearData } from '../../../../redux/changePasswordSlice';


const ChangePassword = () => {

    const navigation = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
    const [showNewLoginPassword, setShowNewLoginPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch()

    const navigator = useNavigate()



    const isLoading = useSelector((state) => state.changePasswordReducer.isLoading);
    const data = useSelector((state) => state.changePasswordReducer.data);

    const onChangePassword = () => {

        if (password == "") {
            alert("Please enter old password!")
        } else if (newPassword == "") {
            alert("Please enter confirm password!")
        } else if (confirmPassword == "") {
            alert("Please enter confirm password!")
        } else if (newPassword != confirmPassword) {
            alert("Your confirm password not matched!")
        } else {
            const payload = {
                newPassword: newPassword,
                oldPassword: password
            }

            dispatch(changePassword(payload))
        }

    }

    useEffect(() => {

        if (data != null && data.status === 1) {
            dispatch(clearData())
            navigator(-1)
        } else {
            if (data != null) {
                alert(data.message)
            }
        }

    }, [data])


    return (
        <>
            <div className='change_pass'>
                <div className='header_login'>
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="setting_content">
                            <h4>Change Login Password</h4>
                        </div>
                    </div>
                    <div className='pass_section'>

                        <FloatingLabel controlId="floatingPassword" label="Login password">
                            <img src={pass_pass} alt="pass_pass" className="password" />
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="Please enterLogin password"
                                name="Password"
                                value={password}
                                disabled={isLoading}
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

                        <FloatingLabel controlId="floatingPassword" label="New login password">
                            <img src={pass_pass} alt="pass_pass" className="password" />
                            <Form.Control
                                type={showNewLoginPassword ? "text" : "password"}
                                placeholder="Please enterNew login password"
                                name="Password"
                                value={newPassword}
                                disabled={isLoading}
                                onChange={(e) => {
                                    setNewPassword(e.target.value);
                                }}
                                required
                            />
                            <button
                                type="button"
                                className="passwod_btn"
                                onClick={() => {
                                    setShowNewLoginPassword(!showNewLoginPassword);
                                }}
                            >
                                {showNewLoginPassword ? (
                                    <VisibilityTwoTone />
                                ) : (
                                    <VisibilityOffTwoTone />
                                )}
                            </button>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Confirm new password">
                            <img src={pass_pass} alt="pass_pass" className="password" />
                            <Form.Control
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Please enterConfirm new password"
                                name="Password"
                                value={confirmPassword}
                                disabled={isLoading}
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

                        <div className='save_pass'>
                            <button className="login_button" onClick={() => onChangePassword()}>
                                {isLoading ? (
                                    <ClipLoader color={myColors.txtWhite} />
                                ) : (
                                    "Submit"
                                )}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword