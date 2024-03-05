import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import fav_logo from "../../../assets/img/fav_logo.svg";
import next from "../../../assets/img/next.svg";
import promotion_data from "../../../assets/img/promotion_data.svg";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";
import { matchingBonus } from "../../../redux/matchingBonusSlice";


const MatchingBonus = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })


    const matchingBonusData = useSelector((state) => state.matchingBonusReducer.data);
    const [matchingBonusType, setMatchingBonusType] = useState(null);

    useEffect(() => {
        dispatch(matchingBonus());
    }, []);

    useEffect(() => {
        console.log("matchingBonus ===> ", matchingBonusData)

        if (matchingBonusData != null && matchingBonusData.success === 1) {
            setMatchingBonusType(matchingBonusData.data);
        }
    }, [matchingBonusData]);

    return (
        <>
            <div className="matching_bonus">
                <div className="header_matching_bonus">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="matching_bonus_content">
                            <h4>Matching Bonus</h4>
                        </div>
                        <div
                            className="matching_rules"
                            onClick={() => navigation("/matching_rules")}
                        >
                            <p>Rules</p>
                        </div>
                    </div>
                    {matchingBonusType != null ? (

                        <div className="matching_bonus_section">

                            <div className="agency">
                                <h3>
                                    {matchingBonusType.leftBusiness > matchingBonusType.rightBusiness ? matchingBonusType.rightBusiness : matchingBonusType.leftBusiness}
                                </h3>
                                <div className="bg_total">
                                    <h6>Total Matching Bonus</h6>
                                </div>
                            </div>

                            <div className="promotion_data">
                                <h5>
                                    <img
                                        src={promotion_data}
                                        alt="promotion_data"
                                        className="me-2"
                                    />{" "}
                                    Income Details
                                </h5>
                                {/* {promotion != null && ( */}
                                <div className="data_details">
                                    <div className="total_number">
                                        <div className="this_week">
                                            <h6>{matchingBonusType.leftUserCount}</h6>
                                            <p>Total Left</p>
                                        </div>
                                        <div className="this_week">
                                            <h6>{matchingBonusType.leftBusiness}</h6>
                                            <p>Total Left Paid Team</p>
                                        </div>
                                    </div>
                                    <div className="total_number">
                                        <div className="this_week">
                                            <h6>{matchingBonusType.rightUserCount}</h6>
                                            <p>Total Right</p>
                                        </div>
                                        <div className="this_week">
                                            <h6>{matchingBonusType.rightBusiness}</h6>
                                            <p>Total Right Paid Team</p>
                                        </div>
                                    </div>
                                </div>
                                {/* )} */}
                            </div>

                            <div
                                className="game"
                                onClick={() => navigation("/team_tree")}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="img_game">
                                    <img src={fav_logo} alt="logo" style={{ width: "28px" }} />
                                    <p>Matching Tree</p>
                                </div>
                                <div className="next_img">
                                    <img src={next} alt="next" />
                                </div>
                            </div>


                            <div
                                className="game"
                                onClick={() => navigation("/team_member")}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="img_game">
                                    <img src={fav_logo} alt="logo" style={{ width: "28px" }} />
                                    <p>My Left Right Team</p>
                                </div>
                                <div className="next_img">
                                    <img src={next} alt="next" />
                                </div>
                            </div>
                        </div>
                    ) :
                        <div className="invitaion_bonus_section " >
                            <div className="main_loader">
                                <ClipLoader color={myColors.primaryColor} />
                            </div>
                        </div>
                    }
                </div>
            </div >
        </>
    );
};

export default MatchingBonus;