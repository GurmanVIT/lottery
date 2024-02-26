import React from 'react';
import back from '../../../assets/img/back.svg';
import { useNavigate } from 'react-router';
import dollar_img from '../../../assets/img/dollar_img.png';


const Transfer = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="withdraw_bls">
                <div className="header_withdraw_balance">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="withdraw_balance">
                            <h4>Transfer USDT</h4>
                        </div>
                    </div>

                    <div className='withdraw_balance_section'>
                        <div className='usdt'>
                            <p>Chain name : <span>BEP20</span></p>
                        </div>

                        <div className='quantity_input pt-3'>
                            <label>User Id</label>
                            <input type='text' placeholder='Enter User Id' />
                        </div>

                        <div className='quantity_input'>
                            <label>Amount</label>
                            <input type='text' placeholder='The minimun amount of transfer is $10' />
                        </div>

                        <div className='otp_inputs'>
                            <label>OTP</label>

                            <div className='enter_otp'>
                                <input type='text' placeholder='Enter OTP' />
                                <button type='button'>Get OTP</button>
                            </div>
                        </div>
                        <div className='available_balance'>
                            <p>Available Balance : <span><img src={dollar_img} alt='dollar_img' style={{ width: "21px", marginBottom: "2px" }} />{" "}0.0</span></p>
                        </div>

                        <div className='confirm_btn'>
                            <button type='button' className='login_button'>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transfer;