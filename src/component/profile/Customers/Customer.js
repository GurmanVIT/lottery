import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import email_icon from "../../../assets/img/email_icon.svg";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";


const Customer = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch();

    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })


    return (
        <>
            <div className="customer">
                <div className="header_customer">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)} style={{ cursor: "pointer" }}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="customer_content">
                            <h4>Contact us</h4>
                        </div>
                    </div>

                    <div className="customer_section">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="NAME"
                            className="mb-3"
                        >
                            <img src={email_icon} alt="email" />
                            <Form.Control
                                type="text"
                                placeholder="name"
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="EMAIL"
                            className="mb-3"
                        >
                            <img src={email_icon} alt="email" />
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="CONTACT US"
                            className="mb-3"
                        >
                            <img src={email_icon} alt="email" />
                            <Form.Control
                                type="number"
                                placeholder="contact us"
                            />
                        </FloatingLabel>

                        <div className="text_area">
                            <textarea
                                rows={10}
                                placeholder="Message"
                            >
                            </textarea>
                        </div>

                        <div className="sumnit_btn">
                            <button
                                type="button"
                                className="login_button"
                            >
                                Submit
                                {/* {isLoading ? (
                                    <ClipLoader color={myColors.txtWhite} />
                                ) : (
                                    "Submit"
                                )} */}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Customer;
