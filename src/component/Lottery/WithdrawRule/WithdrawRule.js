import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";

const WithdrawRule = () => {

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
            <div className="rule_inner">
                <div className="header_inner">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="inner_contents">
                            <h4>Withdraw Rules</h4>
                        </div>
                    </div>

                    <div className="inner_section">
                        <div className="rule_head">
                            <div className="rule_head_card">
                                <h6>Rule</h6>
                            </div>
                            <div className="card_body">
                                <ul>
                                    <li>Need to bet <span>₹0.00</span> to be able to withdraw</li>
                                    <li>Withdraw time <span>00:00-23:59</span></li>
                                    <li>Inday Remaining Withdrawal Times <span>2</span></li>
                                    <li>Withdrawal amount range <span>₹925.00-₹10,000,000.00</span></li>
                                    <li>After withdraw, you need to confirm the blockchain main network 3 times before it arrives at you accout.</li>
                                    <li>Please confirm that the operating environment is safe to avoid information being tampered with or leaked.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default WithdrawRule;
