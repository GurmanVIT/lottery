import React from "react";
import { useNavigate } from "react-router";
import surprise_gifts from "../../assets/img/surprise_gifts.png";
import play_pause from "../../assets/img/play_pause.png";
import invitation_bonus from "../../assets/img/invitation-bonus.png";
import youtube from "../../assets/img/youtube.png";
import matching_bonus from "../../assets/img/matching_bonus.png";
import activity_promotion from "../../assets/img/activity_promotion.png";
import level_bonus from "../../assets/img/level_bonus.png";
import mysterious_gift from "../../assets/img/mysterious_gift.svg";

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

                        <div className="notification" onClick={() => navigation('/play_earn_rule')}>
                            <img src={play_pause} alt="play_pause" />
                        </div>

                        <div className="notification" onClick={() => navigation('/invitation_bonus')}>
                            <img src={invitation_bonus} alt="invitation_bonus" />
                        </div>

                        <div className="notification" onClick={() => navigation('/youtube')}>
                            <img src={youtube} alt="youtube" />
                        </div>

                        <div className="notification" onClick={() => navigation('/activity_bonus')}>
                            <img src={surprise_gifts} alt="surprise_gifts" />
                        </div>

                        <div className="notification" onClick={() => navigation('/matching_bonus')}>
                            <img src={matching_bonus} alt="matching_bonus" />
                        </div>

                        <div className="notification" onClick={() => navigation('/activity_bonus')}>
                            <img src={activity_promotion} alt="activity_promotion" />
                        </div>

                        <div className="notification" onClick={() => navigation('/team_gameplay_bonus')}>
                            <img src={level_bonus} alt="level_bonus" />
                        </div>

                        <div className="notification" onClick={() => navigation('/activity_bonus')}>
                            <img src={mysterious_gift} alt="mysterious_gift" style={{ width: "93%", borderRadius: "14px" }} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Bonus;
