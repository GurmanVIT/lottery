import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";


const MatchingRules = () => {

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
            <div className="matching_rule">
                <div className="header_matching_rule">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="matching_rule_content">
                            <h4>Matching Rules</h4>
                        </div>

                    </div>

                    <div className="matching_rule_section">
                        <div className="capping_border_card">
                            <div className="capping_coin_card">
                                <h6 className="mb-2" style={{ fontSize: "16px" }}>NO CAPPING & INSTANT PAYOUT</h6>
                                <h6>ONE DOLLAR = 90 DG COINS</h6>
                            </div>
                            <div className="card_body">
                                <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "600" }}>"NO CAPPING & INSTANT PAYOUT"</p>
                                <p style={{ textTransform: "lowercase" }}><span style={{ textTransform: "capitalize" }}>AT</span> THE TIME OF  DEPOSIT SYSTEM WILL GIVE YOU 90<span style={{ textTransform: "capitalize" }}>  DG COINS</span> AGAINST ONE DOLLAR AND WHEN YOU WILL DEPOSIT $10 IN YOUR ID SYSTEM   AUTOMATICALLY ACTIVATE YOUR ID FOR MATCHING BONUS
                                    BY DEDUCTING 900 <span style={{ textTransform: "capitalize" }}> DG COINS</span> FROM YOUR ACCOUNT
                                    OUT OF THIS AMOUNT 180 <span style={{ textTransform: "capitalize" }}> DG COINS</span> will go to admin as fee and rest of the
                                    amount will be distributed at the spot AMONG ALL  the ids which will COMPLETE THEIR
                                    pair at the time of placing that particular id.</p>
                                <p>So here you can earn unlimited money
                                    from the unlimited depth of your right and left team.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
};

export default MatchingRules;
