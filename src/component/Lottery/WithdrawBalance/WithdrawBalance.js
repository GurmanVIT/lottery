import React from 'react';
import back from '../../../assets/img/back.svg';
import copy from '../../../assets/img/copy.svg';
import { useNavigate } from 'react-router';


const WithdrawBalance = () => {

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
                            <h4>Withdraw</h4>
                        </div>
                    </div>
                    <div className='withdraw_balance_section'>
                        <div className='usdt'>
                            <p>Available Balance : <span>$195.735</span></p>
                        </div>

                        <div className='address'>
                            <div className='address_btn'>
                                <p>Address</p>
                                <button type='button'>Update Address</button>
                            </div>
                            <div className='input_copy'>
                                <input type='text' placeholder='uhbbWIP4769JHGhepo739qilmz0' />
                                <img src={copy} alt='copy' onClick={() => {
                                    navigator.clipboard.writeText();
                                    alert("Address Copied");
                                }} />
                            </div>
                        </div>

                        <div className='quantity_input'>
                            <label>Quantity</label>
                            <input type='text' placeholder='the minimun number of withdraw 10 USDT' />
                        </div>

                        <div className='otp_inputs'>
                            <label>OTP</label>

                            <div className='enter_otp'>
                                <input type='text' placeholder='Enter OTP' />
                                <button type='button'>Get OTP</button>
                            </div>
                        </div>

                        <div className='precaution'>
                            <h5>Transaction fee <span>10%</span></h5>
                            <h5>Arrival quantiy <span>0 USDT</span></h5>
                        </div>

                        <div className='operation_reminder'>
                            <h6>Operation Reminder</h6>
                            <p>The minimun amount of single withdrawl is : 10 USDT, please do not transfer USDT assests to addresses other than USDT, otherwise it cannot be retrieved in the above address you transferred. All withdrawl will be approved within 24 hours after request done.</p>
                        </div>

                        <div className='confirm_btn'>
                            <button type='button' className='login_button'>Confirm</button>
                        </div>

                        <div className='card_amount'>
                            <p>Amount : <span>853.0 USDT</span></p>
                            <p>Admin Charges : <span>853</span></p>
                            <p>Payable Amount : <span>853</span></p>
                            <p>Staus : <span>853</span></p>
                            <p>Date : <span>853</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WithdrawBalance