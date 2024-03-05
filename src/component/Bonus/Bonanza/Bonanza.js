import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import activity_bonus from "../../../assets/img/activity_bonus.svg";


const Bonanza = () => {

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
            <div className="youtube">
                <div className="header_youtube">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="youtube_content">
                            <h4>Bonanza</h4>
                        </div>
                    </div>

                    <div className="youtube_section">
                        <div className="youtube_inner_img">
                            <img src={activity_bonus} alt="activity_bonus" style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Bonanza;
