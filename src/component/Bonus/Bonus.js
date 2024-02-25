import React from "react";
import { useNavigate } from "react-router";
import surprise_gifts from "../../assets/img/surprise_gifts.png";
import play_pause from "../../assets/img/play_pause.png";
import invitation_bonus from "../../assets/img/invitation-bonus.png";
import youtube from "../../assets/img/youtube.png";


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

                        <div className="notification" onClick={() => navigation('/invitation_bonus')}>
                            <img src={invitation_bonus} alt="invitation_bonus" />
                        </div>

                        <div className="notification">
                            <img src={youtube} alt="youtube" />
                        </div>

                        <div className="notification">
                            <img src={play_pause} alt="play_pause" />
                        </div>

                        <div className="notification">
                            <img src={surprise_gifts} alt="surprise_gifts" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Bonus;
