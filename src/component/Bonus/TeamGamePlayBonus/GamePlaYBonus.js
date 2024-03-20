import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import { transactionList } from "../../../redux/transactionListSlice";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";
import moment from "moment";
import { teamPlayBonus } from "../../../redux/teamPlayBonusSlice";


const GamePlayBonus = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

    const [teamGameplayBonus, setTeamGameplayBonus] = useState(null);


    const teamPlayBonusData = useSelector((state) => state.teamPlayBonusReducer.data);

    useEffect(() => {
        dispatch(teamPlayBonus());
    }, []);

    useEffect(() => {
        if (teamPlayBonusData != null && teamPlayBonusData.status === 1) {
            setTeamGameplayBonus(teamPlayBonusData.data);
        }
    }, [teamPlayBonusData]);


    // const getFormattedDateTime = (utcDate) => {
    //     const timestampStr = new Date(utcDate);
    //     // Convert to Indian time zone (IST)
    //     // const timestamp = moment(timestampStr).tz("Asia/Kolkata");
    //     const options = {
    //         timeZone: "Asia/Kolkata",
    //         year: "numeric",
    //         month: "2-digit",
    //         day: "2-digit",
    //         hour: "2-digit",
    //         minute: "2-digit",
    //         second: "2-digit",
    //         hour12: false, // Use 24-hour format
    //     };

    //     // Format the date as "2024-01-30"
    //     const formattedDate = timestampStr.toLocaleDateString("en-IN", options);

    //     const dateData = formattedDate.split(" ");

    //     const createdTime = moment(dateData[1], "HH:mm:ss")
    //         .add(5, "hours")
    //         .add(30, "minutes");

    //     const finalDate = dateData[0] + " " + createdTime.format("HH:mm:ss");

    //     return formattedDate;
    // };


    return (
        <>
            <div className="game_bonus">
                <div className="header_game_bonus">

                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="game_bonus_content">
                            <h4>Team Play Bonus</h4>
                        </div>
                        <div
                            className="deposit_history"
                            onClick={() => navigation("/gameplay_rules")}
                        >
                            <p>Rule</p>
                        </div>
                    </div>


                    <div className="game_bonus_section">
                        <div className="link_members_sections">
                            <h5> Commission Details </h5>
                            {teamGameplayBonus != null &&
                                teamGameplayBonus.levelData.map((item, index) => (
                                    <div className="card_Lottery_details">
                                        <div className="commion_head">
                                            <p>Lottery commission</p>
                                        </div>

                                        <div className="p-2 commission_radius pt-3">
                                            <div className="lottery_commission_flexs">
                                                <p>Number of bettors</p>
                                                <h6>{item.uniqueBettorIds}</h6>
                                            </div>
                                            <div className="lottery_commission_flexs">
                                                <p>Bet amount</p>
                                                <h6>{item.totalBettAmount}</h6>
                                            </div>
                                            <div className="lottery_commission_flexs">
                                                <p>Agent level</p>
                                                <h6>{item.level}</h6>
                                            </div>
                                            <div className="lottery_commission_flexs">
                                                <p>Commission Payout</p>
                                                <h6>{item.totalpayOut}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default GamePlayBonus;
