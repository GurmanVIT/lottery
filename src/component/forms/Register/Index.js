import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import group from '../../../assets/img/group.svg';
import email_icon from '../../../assets/img/email_icon.svg';
import password_icon from '../../../assets/img/password_icon.svg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import support from '../../../assets/img/support.svg';
import logo from '../../../assets/img/logo.svg';
import { VisibilityTwoTone, VisibilityOffTwoTone } from '@mui/icons-material';



const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className='home_page'>
            <div className='register login'>
                <div className='register_section login_section'>
                    <div className='lottery'>
                        <div className='logo'>
                            <img src={logo} alt='logo' />
                        </div>
                        <h5>Register</h5>
                        <p>Please register by email</p>
                    </div>

                    <div className='secound_section'>
                        <div className='inner'>

                            <div className='flex_input d-flex gap-3' >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="FIRST NAME"
                                    className="mb-3 "
                                >
                                    <img src={group} alt='group' className='group' />
                                    <Form.Control type="email" placeholder="name@example.com" className='first_name' />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="LAST NAME"
                                    className="mb-3"
                                >
                                    <img src={group} alt='group' className='group' />
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="ENTER YOUR  EMAIL ADDRESS"
                                className="mb-3"
                            >
                                <img src={email_icon} alt='email' />
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label="PASSWORD" className="mb-3">
                                <img src={password_icon} alt='password' className='password' />
                                <Form.Control type={showPassword ? "text" : "password"} placeholder="PASSWORD" name="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                                <button type="button" className='passwod_btn' onClick={() => { setShowPassword(!showPassword) }}>
                                    {showPassword ?
                                        <VisibilityTwoTone />
                                        :
                                        <VisibilityOffTwoTone />
                                    }
                                </button>
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label="CONFIRM PASSWORD">
                                <img src={password_icon} alt='password' className='password' />
                                <Form.Control type={showConfirmPassword ? "text" : "password"} placeholder="CONFIRM PASWORD" name="Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} required />
                                <button type="button" className='passwod_btn' onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                                    {showConfirmPassword ?
                                        <VisibilityTwoTone />
                                        :
                                        <VisibilityOffTwoTone />
                                    }
                                </button>
                            </FloatingLabel>
                            <div className='login_link mt-4'>
                                <Link to="/" className='login_button'>Register</Link>
                            </div>
                            <div className='register_link'>
                                <Link to="/login" className='register_button'>I have an account  <span>Login</span></Link>
                            </div>
                            <div className='upper'>
                                <img src={support} alt='support' />
                                <h5>Customer Support</h5>
                            </div>
                            <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                />
                                <p>By Logging / SigningUp in, you agree to our <span>Terms of Services</span> and<span> Privacy Policy</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register; 