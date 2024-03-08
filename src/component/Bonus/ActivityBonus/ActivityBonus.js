import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import activity_bonus from "../../../assets/img/activity_bonus.svg";


const ActivityBonus = () => {

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
            <div className="serial_win">
                <div className="header_serial_win">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="serial_win_content">
                            <h4>Serial Win Bonus</h4>
                        </div>
                    </div>

                    <div className="serial_win_section">
                        <div className="card_padding">
                            <div className="rule_card">
                                <h6>GAIN BONUSES</h6>
                            </div>
                            <div className="play_rules">

                                <p>FOR CONSECUTIVE WINS WIN STREAK</p>
                                <p>UP TO 100% OF THE TOTAL ACCUMULATED BETTING AMOUNT</p>

                                <ul>
                                    <li>Win 10 in a row and get 20% (betting amount X 20%)</li>
                                    <li>Win 20 in a row and get 30% (betting amount X 30%)</li>
                                    <li>Win 30 in a row and get 40% (betting amount X 40%)</li>
                                    <li>Win 40 in a row and get 50% (betting amount X 50%)</li>
                                    <li>Win 50 in a row and get 100% (betting amount X100%)</li>
                                </ul>

                                <p>Meet the conditions and contact customer service to apply for bonus</p>

                                <h4>NOTE</h4>
                                <p>The same period is not included in the calculation</p>

                                <h5>No betting limit</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ActivityBonus;
