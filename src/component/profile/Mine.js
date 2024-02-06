import React, { useEffect, useState } from 'react';
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
import logouts from '../../assets/img/logouts.svg';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../../redux/loginSlice";
import { clearSignUpData } from "../../redux/signupSlice";
import { clearSponsorData } from "../../redux/checkSponsorIdSlice";
import { clearOtpData } from "../../redux/otpSlice";
import { clearResendData } from "../../redux/resendOtpSlice";
import { profile } from '../../redux/profileSlice';
import moment from "moment-timezone";


const Mine = () => {

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const profileResponse = useSelector((state) => state.profileReducer.data);
    const [profileData, setProfileData] = useState(null)

    const logout = () => {
        localStorage.clear();
        dispatch(clearSignUpData());
        dispatch(clearData());
        dispatch(clearSponsorData());
        dispatch(clearOtpData());
        dispatch(clearResendData());

        setTimeout(() => {
            navigation("/login");
        }, 500);
    };

    useEffect(() => {
        dispatch(profile())
    }, [])

    useEffect(() => {

        if (profileResponse != null && profileResponse.status === 1) {
            setProfileData(profileResponse.data)
        }

    }, [profileResponse])


    const getFormattedDateTime = (utcDate) => {
        const timestampStr = new Date(utcDate);
        // Convert to Indian time zone (IST)
        // const timestamp = moment(timestampStr).tz("Asia/Kolkata");
        const options = {
            timeZone: "Asia/Kolkata",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false, // Use 24-hour format
        };

        // Format the date as "2024-01-30"
        const formattedDate = timestampStr.toLocaleDateString("en-IN", options);

        const dateData = formattedDate.split(" ");

        const createdTime = moment(dateData[1], "HH:mm:ss")
            .add(5, "hours")
            .add(30, "minutes");

        // console.log(dateData[1]);

        const finalDate = dateData[0] + " " + createdTime.format("HH:mm:ss");

        return formattedDate;
    };


    return (
        <>
            <div className='profile lottery_page'>
                {profileData != null &&
                    <div className='profile_width lottery' style={{ height: "100vh" }}>
                        <div className='mine'>
                            <div className='profile_img'>
                                <img src={profile_img} alt='profile_img' />
                            </div>
                            <div className='name_id'>
                                <div className='your_name'>
                                    <h5 className='ellipsis'>{profileData.firstName + " " + profileData.lastName}</h5>
                                    <div className='copy'>
                                        <h4>UID <span>{profileData.userId}</span><img src={copy} alt='copy' /></h4>
                                    </div>
                                </div>
                                <div className='last_login'>
                                    <p>Last Login: {getFormattedDateTime(profileData.upatedAt)}</p>
                                </div>
                            </div>
                        </div>

                        <div className='sec_padding'>
                            <div className='balance'>
                                <p>Total Balance</p>
                                <h3>₹{profileData.walletPoints} <img src={refresh_2} alt='refresh_2' /></h3>
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

                            <div className='notification' onClick={() => navigation('/notification')}>
                                <div className='img_notification'>
                                    <img src={notification} alt='notification' />
                                    <p>Notification</p>
                                </div>
                                <div className='number_noti'>
                                    {/* <p>3</p> */}
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
                                    <div className='setting' onClick={() => navigation('/settings')}>
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
                                    <div className='setting' onClick={() => logout()}>
                                        <img src={logouts} alt='logouts' />
                                        <p>Logout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}

export default Mine;