import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import surprise_gifts from "../../assets/img/surprise_gifts.png";
import play_pause from "../../assets/img/play_pause.png";
import invitation_bonus from "../../assets/img/invitation_bonus.png";
import youtube from "../../assets/img/youtube.png";
import matching_bonus from "../../assets/img/matching_bonus.png";
import activity_promotion from "../../assets/img/activity_promotion.png";
import level_bonus from "../../assets/img/level_bonus.png";
import mysterious_gift from "../../assets/img/mysterious_gift.svg";
import { Link } from "react-router-dom";
import card_bg_img from "../../assets/img/card_bg_img.svg";
import gift_img from "../../assets/img/gift_img.svg";


const Bonus = () => {

    const navigation = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

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

                        <div className="card_sec" onClick={() => navigation('/bet_history')}>
                            <div className="card">
                                <div className="card_body">
                                    <div>
                                        <h4>Lottery</h4>
                                        <p>Play & Earn</p>
                                        <p className="purple">Color,Big/Small and Number </p>
                                    </div>
                                    <div></div>
                                </div>
                                <img
                                    src={card_bg_img}
                                    alt="card_bg_img"
                                    style={{ height: "140px" }}
                                />
                            </div>
                            <img src={gift_img} alt="gift_img" className="gift_img" />
                        </div>

                        <div className="card_sec mt-2" onClick={() => navigation('/invitation_bonus')}>
                            <div className="card">
                                <div className="card_body">
                                    <div>
                                        <h4>Direct Referral</h4>
                                        <p>Upto 15,00,000 DG COINS,<br />No Time Limit</p>
                                    </div>
                                    <div></div>
                                </div>
                                <img
                                    src={card_bg_img}
                                    alt="card_bg_img"
                                    style={{ height: "140px" }}
                                />
                            </div>
                            <img src={gift_img} alt="gift_img" className="gift_img" />
                        </div>

                        <div className="card_sec mt-2" onClick={() => navigation('/matching_bonus')}>
                            <div className="card">
                                <div className="card_body">
                                    <div>
                                        <h4>Matching Bonus</h4>
                                        <p>No Capping & Instant <br />Payout</p>
                                    </div>
                                    <div></div>
                                </div>
                                <img
                                    src={card_bg_img}
                                    alt="card_bg_img"
                                    style={{ height: "140px" }}
                                />
                            </div>
                            <img src={gift_img} alt="gift_img" className="gift_img" />
                        </div>

                        <div className="card_sec mt-2" onClick={() => navigation('/team_gameplay_bonus')}>
                            <div className="card">
                                <div className="card_body">
                                    <div>
                                        <h4>Team Play Bonus</h4>
                                        <p>Unlimited Income On<br /> Betting By Your Team</p>
                                    </div>
                                    <div></div>
                                </div>
                                <img
                                    src={card_bg_img}
                                    alt="card_bg_img"
                                    style={{ height: "140px" }}
                                />
                            </div>
                            <img src={gift_img} alt="gift_img" className="gift_img" />
                        </div>

                        <div className="card_sec mt-2" onClick={() => navigation('/activity_bonus')}>
                            <div className="card">
                                <div className="card_body">
                                    <div>
                                        <h4>Serial Win Bonus</h4>
                                        <p>Get Upto 100%<br /> Betting Amount</p>
                                    </div>
                                    <div></div>
                                </div>
                                <img
                                    src={card_bg_img}
                                    alt="card_bg_img"
                                    style={{ height: "140px" }}
                                />
                            </div>
                            <img src={gift_img} alt="gift_img" className="gift_img" />
                        </div>

                        <div className="card_sec mt-2" onClick={() => navigation('/youtube')}>
                            <div className="card">
                                <div className="card_body">
                                    <div>
                                        <h4>YouTube Promotion<br /> Bonus</h4>
                                        <p>Create Youtube video<br />& Get Bonus</p>
                                    </div>
                                    <div></div>
                                </div>
                                <img
                                    src={card_bg_img}
                                    alt="card_bg_img"
                                    style={{ height: "155px" }}
                                />
                            </div>
                            <img src={gift_img} alt="gift_img" className="gift_img" />
                        </div>

                        <div className="card_sec mt-2" onClick={() => navigation('/activity_bonus')}>
                            <div className="card">
                                <div className="card_body">
                                    <div>
                                        <h4>Bonanza</h4>
                                        <p> Boost Your Team</p>
                                    </div>
                                    <div></div>
                                </div>
                                <img
                                    src={card_bg_img}
                                    alt="card_bg_img"
                                    style={{ height: "140px" }}
                                />
                            </div>
                            <img src={gift_img} alt="gift_img" className="gift_img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bonus;
