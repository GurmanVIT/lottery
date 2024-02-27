import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import activity_bonus from "../../../assets/img/activity_bonus.svg";


const ActivityBonus = () => {

    const navigation = useNavigate();


    return (
        <>
            <div className="matching_bonus">
                <div className="header_matching_bonus">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="matching_bonus_content">
                            <h4>Activity Details</h4>
                        </div>
                    </div>

                    <div className="matching_bonus_section">
                        <img src={activity_bonus} alt="activity_bonus" style={{ width: "100%" }} />
                    </div>
                </div>
            </div >
        </>
    );
};

export default ActivityBonus;
