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
            <div className="service_customer">
                <div className="header_service">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)} style={{ cursor: "pointer" }}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="service_content">
                            <h4>Contact us</h4>
                        </div>
                    </div>

                    <div className="service_section">

                        {/* <FloatingLabel
                            controlId="floatingInput"
                            label="ENTER YOUR  EMAIL ADDRESS"
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
                            label="ENTER YOUR  EMAIL ADDRESS"
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
                            label="ENTER YOUR  EMAIL ADDRESS"
                            className="mb-3"
                        >
                            <img src={email_icon} alt="email" />
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>
 */}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Customer;
