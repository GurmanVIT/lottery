import React from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../assets/img/back.svg';
import withdraw_card from '../../../assets/img/withdraw_card.svg';
import flat from '../../../assets/img/Flat.svg';
import refresh_2 from '../../../assets/img/refresh_2.svg';
import bank_card_img from '../../../assets/img/bank_card_img.svg';
import rectangle from '../../../assets/img/rectangle.svg';


const Withdraw = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="withdraw">
                <div className="header_withdraw">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation.goBack()}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="withdraw_content">
                            <h4>Withdraw</h4>
                        </div>
                        <div className="withdraw_history">
                            <p>Withdraw History</p>
                        </div>
                    </div>
                    <div className='bg_height'></div>
                    <div className='withdraw_section'>
                        <div className='wallet_card'>
                            <div className='card_w'>
                                <img src={withdraw_card} alt='withdraw_card' />
                            </div>
                            <div className='balance'>
                                <div className='wallet_balance'>
                                    <div className='wallet_img'>
                                        <img src={flat} alt='flat' />
                                        <h6>Wallet Balance</h6>
                                    </div>
                                    <div className='rupees'>
                                        <h2>₹0.00</h2>
                                        <img src={refresh_2} alt='refresh_2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bank_account'>
                            <div className='bank_card'>
                                <div className='card_bg'>
                                    <img src={bank_card_img} alt='bank_card_img' />
                                    <p>BANK CARD</p>
                                </div>
                                <div className='rectangle_img'>
                                    <img src={rectangle} alt='rectangle' />
                                </div>
                                <div className='account_number'>
                                    <p className='add_bank_account'>Add bank account
                                        number</p>
                                </div>
                            </div>

                            <div className='money_withdraw'>
                                Need to add  beneficiary information to be able to withdraw money
                            </div>

                            <div className='amount_enter'>
                                <p>ENTER YOUR  AMOUNT</p>
                                <h6>500</h6>
                            </div>

                            <div className=''>
                                <p>Withdrawable balance <span> ₹0.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Withdraw;