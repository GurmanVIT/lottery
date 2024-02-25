import React from "react";
import back from "../../assets/img/back.svg";
import notification from '../../assets/img/notification.svg';
import next from '../../assets/img/next.svg';
import { useNavigate } from "react-router";
import CloseButton from "../SVG/CloseButton";


const InvitationBonus = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="invitaion_bonus">
                <div className="header_invitaion_bonus">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="invitaion_bonus_content">
                            <h4>Invitation Bonus</h4>
                        </div>
                    </div>

                    <div className="invitaion_bonus_section">
                        <div className="notification" onClick={() => navigation('/invitation_rules')}>
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Invitation Reward Rules</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div className="bonus_card">
                            <div className="head_bonus">
                                <div className="bonus_bg">
                                    <p>Bonus <span>1</span></p>
                                    <p className="close_btn"><CloseButton /></p>
                                </div>
                                <div className="right_number">55.00</div>
                            </div>
                            <div className="bonus_around">
                                <div className="numbers_one">
                                    <p className="text-start">Number of invitees</p>
                                    <p>1</p>
                                </div>

                                <div className="recharge_member">
                                    <p className="text-start">Recharge per people</p>
                                    <p>500.00</p>
                                </div>

                                <div className="border_center">
                                    <div className="border_width"></div>
                                </div>

                                <div className="invite_deposit">
                                    <div className="invited_number">
                                        <p className="number_two">0 / 1</p>
                                        <p>Number of invitees</p>
                                    </div>
                                    <div className="deposit_number">
                                        <p className="number_two">0 / 1</p>
                                        <p>Deposit number</p>
                                    </div>
                                </div>

                                <div className="finished_btn">
                                    <button type="button">Unfinished</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvitationBonus;
