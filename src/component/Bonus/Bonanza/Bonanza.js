import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";


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
                        <div className="card_padding">
                            <div className="rule_card">
                                <h6>Activity Content </h6>
                            </div>
                            <div className="play_rules">
                                <div className="viewer_flexes">
                                    <h2>Dapic Games will going to distribute mysterious gifts from time to time for all the members even newly registered can also get the bonus.</h2>
                                    <h2>Note: The registered account information must be complete, and correct.</h2>
                                </div>
                                <p>Mysterious gifts cannot apply with our customer service it will automatically be added in member's Dapic account or in the linked bank account in the game.</p>

                                <div className="viewer_flexes">
                                    <h2>Note: For members who have received the mysterious gifts, you will be notify through personal message in member center.</h2>
                                </div>
                                <p> <span style={{ fontWeight: 600 }}>1.</span> All Dapic Games discounts are specially designed for players. If any group or individual is found to have dishonestly taken company bonuses or any threats or abuse of company discounts, the company reserves the right to freeze or cancel the account balance of the group or individual s right.</p>
                                <p><span style={{ fontWeight: 600 }}>2.</span> If members have any disputes about the event, in order to ensure the interests of both parties and prevent identity theft, Dapic Games has the right to ask members to provide y sufficient and valid documents to confirm whether the eligible for the discount.</p>
                                <p><span style={{ fontWeight: 600 }}>3.</span> Dapic Games reserves the right of final interpretatio.</p>

                                <div className="viewer_flexes">
                                    <h2>Event: as well as the right to modify and terminate the event without notice, applicable to all company events.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Bonanza;
