import React from 'react';
import DG from '../../../assets/img/DG.svg';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import email_icon from "../../../assets/img/email_icon.svg";


const Forgot = () => {

    return (
        <div className='forgot_sec'>
            <div className='screen_forgot'>
                <div className='lottery'>
                    <div className='logo'>
                        <img src={DG} alt='DG' />
                        <h2>Dapic games</h2>
                    </div>
                    <h5>Forgot</h5>
                </div>

                <div className='inner'>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="ENTER YOUR  EMAIL ADDRESS"
                        className="mb-3"
                    >
                        <img src={email_icon} alt='email' />
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <button type='button' className='login_button mt-4'>Forgot</button>
                </div>
            </div>
        </div>
    );
};

export default Forgot;