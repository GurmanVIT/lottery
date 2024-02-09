import React from 'react';
import back from '../../../assets/img/back.svg';
import copy from '../../../assets/img/copy.svg';
import { useNavigate } from 'react-router';


const UpdateWalletAddress = () => {

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
                            <h4>Update Wallet Address</h4>
                        </div>
                    </div>
                    <div className='withdraw_balance_section'>
                        <div className='usdt'>
                            <p>Chain name : <span>USDT (BEP20)</span></p>
                        </div>

                        <div className='address'>
                            <label>Address</label>
                            <div className='input_copy'>
                                <input type='text' placeholder='Please enter address' />
                                <img src={copy} alt='copy'
                                // onClick={() => {
                                //     navigator.clipboard.writeText();
                                //     // alert("Address Copied");
                                // }}
                                />
                            </div>
                        </div>

                        <div className='otp_inputs'>
                            <label>OTP</label>

                            <div className='enter_otp'>
                                <input type='text' placeholder='Enter OTP' />
                                <button type='button'>Get OTP</button>
                            </div>
                        </div>

                        <div className='operation_reminder'>
                            <h6>Operation Reminder</h6>
                            <p>The minimun amount of single withdrawl is : 10 USDT, please do not transfer USDT assests to addresses other than USDT, otherwise it cannot be retrieved in the above address you transferred. All withdrawl will be approved within 24 hours after request done.</p>
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

export default UpdateWalletAddress