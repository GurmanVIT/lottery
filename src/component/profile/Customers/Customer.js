import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import name_c from "../../../assets/img/name_c.svg";
import email_c from "../../../assets/img/email_c.svg";
import contact_img from "../../../assets/img/contact_img.svg";
import { contactUs } from "../../../redux/contactUsSlice";
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


    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const contactUsData = useSelector((state) => state.contactUsReducer.data);


    const onLoginClick = () => {
        const payload = {
            name: name,
            email: email,
            contactNumber: number,
            message: message,
        };
        dispatch(contactUs(payload));
    };

    useEffect(() => {
        if (contactUsData != null) {
            navigation(-1)
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
                            <img src={name_c} alt="name_icon" className="name_icon" />
                            <Form.Control
                                type="text"
                                placeholder="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="EMAIL"
                            className="mb-3"
                        >
                            <img src={email_c} alt="email_icon" className="email_c" />
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="CONTACT US"
                            className="mb-3"
                        >
                            <img src={contact_img} alt="contact_icon" className="contact_img" />
                            <Form.Control
                                type="number"
                                placeholder="contact us"
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </FloatingLabel>

                        <div className="text_area">
                            <textarea
                                rows={10}
                                placeholder="Message"
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </textarea>
                        </div>

                        <div className="sumnit_btn">
                            <button
                                type="button"
                                className="login_button"
                                onClick={() => onLoginClick()}
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
