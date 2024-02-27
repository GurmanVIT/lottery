import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";


const MatchingBonus = () => {

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
                            <h4>Matching Bonus</h4>
                        </div>
                    </div>

                    <div className="matching_bonus_section">
                        <div className="capping_coin_card">
                            <h6 className="mb-2">NO CAPPING & INSTANT PAYOUT</h6>
                            <h6>ONE DOLLAR = 90 DG COIN</h6>
                        </div>
                        <p>Unbelievable but true "NO CAPPING & INSTANT PAYOUT"</p>
                        <p style={{ textTransform: "lowercase" }}><span style={{ textTransform: "capitalize" }}>AT</span> THE TIME OF  DEPOSIT SYSTEM WILL GIVE YOU 90 DG COINS AGAINST ONE DOLLAR AND WHEN YOU WILL DEPOSIT $10 IN YOUR ID SYSTEM   AUTOMATICALLY ACTIVATE YOUR ID FOR MATCHING BONUS
                            BY DEDUCTING 900 DG Coin FROM YOUR ACCOUNT
                            OUT OF THIS AMOUNT 180 DG Coins will go to admin as fee and rest of the
                            amount will be distributed at the spot AMONG ALL  the ids which will COMPLETE THEIR
                            pair at the time of placing that particular id.</p>
                        <p>So here you can earn unlimited money
                            from the unlimited depth of your right and left team.</p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default MatchingBonus;
