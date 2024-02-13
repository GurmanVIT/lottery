import React from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../assets/img/back.svg';
import withdraw_card from '../../../assets/img/withdraw_card.svg';
import flat from '../../../assets/img/Flat.svg';
import refresh_2 from '../../../assets/img/refresh_2.svg';
import bank_card_img from '../../../assets/img/bank_card_img.svg';
import rectangle from '../../../assets/img/rectangle.svg';
import star from '../../../assets/img/star.svg';


const Withdraw = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="withdraw">
                <div className="header_withdraw">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
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
                                        <h2>$0.00</h2>
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

                            <div className='balance_btn'>
                                <p>Withdrawable balance <span> <b>$0.00</b></span></p>
                                <div className='all_btn'>
                                    <button type='button'>All</button>
                                </div>
                            </div>

                            <div className='amount_received'>
                                <p>Withdrawable amount received </p>
                                <span> <b>$0.00</b></span>
                            </div>

                            <button type='button' className='withdraw_btn'>Withdraw</button>

                            <div className='card_bet'>
                                <div className='need_bet'>
                                    <img src={star} alt='star' />
                                    <p>Need to bet <span><b> $0.00</b> </span>to be able to withdraw</p>
                                </div>
                                <div className='need_bet'>
                                    <img src={star} alt='star' />
                                    <p>Withdraw time <span><b> 00:00-23:55</b></span></p>
                                </div>
                                <div className='need_bet'>
                                    <img src={star} alt='star' />
                                    <p>In day remaining withdraw times <span><b>3</b></span></p>
                                </div>
                                <div className='need_bet'>
                                    <img src={star} alt='star' />
                                    <p>Withdrawal amount range <span><b>$100.00-$10,000,000.00</b></span></p>
                                </div>
                            </div>

                            <div className='withdraw_history'>
                                <h6>Withdraw History</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Withdraw;