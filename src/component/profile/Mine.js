import React from 'react';
import profile_img from '../../assets/img/profile_img.svg';
import copy from '../../assets/img/copy.svg';
import refresh_2 from '../../assets/img/refresh_2.svg';
import wallet_2 from '../../assets/img/wallet_2.svg';
import deposit from '../../assets/img/deposit.svg';
import withdraw from '../../assets/img/withdraw.svg';
import vip from '../../assets/img/vip.svg';
import transfer from '../../assets/img/Transfer.svg';
import bet_img from '../../assets/img/bet.svg';
import notification from '../../assets/img/notification.svg';
import next from '../../assets/img/next.svg';
import game_static from '../../assets/img/game_static.svg';
import setting from '../../assets/img/setting.svg';
import feedback from '../../assets/img/feedback.svg';
import about from '../../assets/img/about.svg';
import customer from '../../assets/img/customer.svg';
import beginner from '../../assets/img/beginner.svg';
import logout from '../../assets/img/logout.svg';

const Mine = () => {
    return (
        <>
            <div className='profile lottery_page'>
                <div className='profile_width lottery' style={{ height: "100vh" }}>
                    <div className='mine'>
                        <div className='profile_img'>
                            <img src={profile_img} alt='profile_img' />
                        </div>
                        <div className='name_id'>
                            <div className='your_name'>
                                <h5 className='ellipsis'>John Doe</h5>
                                <div className='copy'>
                                    <h4>UID <span>53321102</span><img src={copy} alt='copy' /></h4>
                                </div>
                            </div>
                            <div className='last_login'>
                                <p>Last Login: 2024-01-09 <span>  12:40:07</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='sec_padding'>
                        <div className='balance'>
                            <p>Total Balance</p>
                            <h3>₹0.00 <img src={refresh_2} alt='refresh_2' /></h3>
                            <div className='four_img'>
                                <div className='wallet_2'>
                                    <img src={wallet_2} alt='wallet_2' />
                                    <h5>Wallet</h5>
                                </div>
                                <div className='deposit'>
                                    <img src={deposit} alt='deposit' />
                                    <h5>Deposit</h5>
                                </div>
                                <div className='withdraw'>
                                    <img src={withdraw} alt='withdraw' />
                                    <h5>Withdraw</h5>
                                </div>
                                <div className='vip'>
                                    <img src={vip} alt='vip' />
                                    <h5>VIP</h5>
                                </div>
                            </div>
                        </div>

                        <div className='card_history'>
                            <div className='card_flex'>
                                <div className='card'>
                                    <div className='bet_img'>
                                        <img src={bet_img} alt='bet_img' />
                                    </div>
                                    <div className='bet_content'>
                                        <h6>Bet</h6>
                                        <p>My betting history</p>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='transfer_img'>
                                        <img src={transfer} alt='transfer' />
                                    </div>
                                    <div className='transfer_content'>
                                        <h6>Transaction</h6>
                                        <p>My transaction history</p>
                                    </div>
                                </div>
                            </div>

                            <div className='card_flex mt-2'>
                                <div className='card'>
                                    <div className='deposit_img'>
                                        <img src={deposit} alt='deposit' />
                                    </div>
                                    <div className='deposit_content'>
                                        <h6>Deposit</h6>
                                        <p>My deposit history</p>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='withdraw_img'>
                                        <img src={withdraw} alt='withdraw' />
                                    </div>
                                    <div className='withdraw_content'>
                                        <h6>Withdraw</h6>
                                        <p>My withdraw history</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='notification'>
                            <div className='img_notification'>
                                <img src={notification} alt='notification' />
                                <p>Notification</p>
                            </div>
                            <div className='number_noti'>
                                <p>3</p>
                                <img src={next} alt='next' />
                            </div>
                        </div>

                        <div className='game'>
                            <div className='img_game'>
                                <img src={game_static} alt='game_static' />
                                <p>Game statistics</p>
                            </div>
                            <div className='next_img'>
                                <img src={next} alt='next' />
                            </div>
                        </div>

                        <div className='service'>
                            <h5>Service center</h5>

                            <div className='service_center'>
                                <div className='setting'>
                                    <img src={setting} alt='setting' />
                                    <p>Settings</p>
                                </div>
                                <div className='setting'>
                                    <img src={feedback} alt='feedback' />
                                    <p>Feedback</p>
                                </div>
                                <div className='setting'>
                                    <img src={about} alt='about' />
                                    <p>About Us</p>
                                </div>
                            </div>

                            <div className='service_center'>
                                <div className='setting'>
                                    <img src={customer} alt='customer' />
                                    <p>24/7 Customer
                                        service</p>
                                </div>
                                <div className='setting'>
                                    <img src={beginner} alt='beginner' />
                                    <p>Beginner’s Guide</p>
                                </div>
                                <div className='setting'>
                                    <img src={logout} alt='logout' />
                                    <p>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mine;