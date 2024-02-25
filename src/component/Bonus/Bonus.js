import React from "react";
import notification from '../../assets/img/notification.svg';
import next from '../../assets/img/next.svg';
import { useNavigate } from "react-router";
import surprise_gifts from "../../assets/img/surprise_gifts.png";


const Bonus = () => {

    const navigation = useNavigate();


    return (
        <>
            <div className="bonus">
                <div className="header_bonus">
                    <div className="header_flex">
                        <div className="bonus_content">
                            <h4>Bonus</h4>
                        </div>
                    </div>

                    <div className="bonus_section">

                        <div className="notification">
                            <img src={surprise_gifts} alt="surprise_gifts" />
                            <p>Play & Earn</p>
                        </div>

                        <div className="notification mt-5">
                            <img src={surprise_gifts} alt="surprise_gifts" />
                            <p>Play & Earn</p>
                        </div>

                        <div className="notification mt-5">
                            <img src={surprise_gifts} alt="surprise_gifts" />
                            <p>Play & Earn</p>
                        </div>

                        <div className="notification mt-5">
                            <img src={surprise_gifts} alt="surprise_gifts" />
                            <p>Play & Earn</p>
                        </div>

                        <div className="notification mt-5">
                            <img src={surprise_gifts} alt="surprise_gifts" />
                            <p>Play & Earn</p>
                        </div>

                        {/* <div className="notification">
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Matching Bonus</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div className="notification">
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Level Bonus</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div className="notification" onClick={() => navigation('/invitation_bonus')}>
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Invitation Bonus</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>You Tube Promotion Bonus</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Member Activity Promotion</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Mysterious Gift</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div
                            className="notification"
                        >
                            <div className="img_notification">
                                <img src={notification} alt="notification" />
                                <p>Lottery System(pending)</p>
                            </div>
                            <div className="number_noti">
                                <img src={next} alt="next" />
                            </div>
                        </div>
                         */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bonus;
