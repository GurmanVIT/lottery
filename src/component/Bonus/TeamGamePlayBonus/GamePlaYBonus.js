import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Table from "react-bootstrap/Table";


const GamePlayBonus = () => {
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
            <div className="rule">
                <div className="header_rule">

                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="deposit_content">
                            <h4>Team Gameplay Bonus</h4>
                        </div>
                        <div
                            className="deposit_history"
                            onClick={() => navigation("/gameplay_rules")}
                        >
                            <p>Rule</p>
                        </div>
                    </div>

                    <div className="rule_section">

                        <div className="bonus_card mb-3">
                            <div className="head_bonus">
                                <div className="bonus_bg">
                                    <p>Bonus <span>0</span></p>
                                    {/* <p className="close_btn"><CloseButton /></p> */}
                                </div>
                                <div className="right_number">0</div>
                            </div>
                            <div className="bonus_around">
                                <div className="numbers_one">
                                    <p className="text-start">Number of invitees</p>
                                    <p>1</p>
                                </div>

                                <div className="recharge_member">
                                    <p className="text-start">Recharge per people</p>
                                    <p>0</p>
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
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};

export default GamePlayBonus;
