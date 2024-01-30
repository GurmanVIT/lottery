import React from 'react';
import massage from "../../assets/img/massage.svg";
import DG from "../../assets/img/DG.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearData } from "../../redux/loginSlice";
import { clearSignUpData } from "../../redux/signupSlice";
import { clearSponsorData } from "../../redux/checkSponsorIdSlice";
import { clearOtpData } from "../../redux/otpSlice";
import { clearResendData } from "../../redux/resendOtpSlice";

const Header = () => {

    const dispatch = useDispatch();
    const navigation = useNavigate();
    // const [token, setToken] = useState(null);
    const token = localStorage.getItem("token");
    console.log(token);

    const logout = () => {
        localStorage.clear();
        dispatch(clearSignUpData());
        dispatch(clearData());
        dispatch(clearSponsorData());
        dispatch(clearOtpData());
        dispatch(clearResendData());

        setTimeout(() => {
            navigation("/login");
        }, 500);
    };


    return (
        <>
            <div className="header">
                <div className="header_section">
                    <div className="logo">
                        <img src={DG} alt="DG" />
                        <h2>Dapic games</h2>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="massage me-2">
                            <img src={massage} alt="massage" />
                        </div>
                        {token != null ? (
                            <div className="logout">
                                <Link onClick={() => logout()}>
                                    <h6>Logout</h6>
                                </Link>
                            </div>
                        ) : (
                            <div className="logout">
                                <Link onClick={() => logout()}>
                                    <h6>Logout</h6>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;