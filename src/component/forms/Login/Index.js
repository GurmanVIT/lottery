import React from 'react';
import Form from 'react-bootstrap/Form';
import email_icon from '../../../assets/img/email_icon.svg';
import password from '../../../assets/img/password.svg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import support from '../../../assets/img/support.svg';



const Login = () => {

    return (
        <>
            <div className='login'>
                <div className='lottery'>
                    <h4>Dapic games</h4>
                    <h5>Register</h5>
                    <p>Please register by email</p>
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

                    <FloatingLabel controlId="floatingPassword" label="PASSWORD">
                        <img src={password} alt='password' className='password' />
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <div className='forgot_link'>
                        <Link to="/" className='forgot'>Forgot Password?</Link>
                    </div>
                    <div className='login_link'>
                        <Link to="/" className='login'>Login</Link>
                    </div>
                    <div className='register_link'>
                        <Link to="/" className='register'>Register</Link>
                    </div>
                    <div className='upper'>
                        <img src={support} alt='support' />
                        <h5>Customer Support</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;