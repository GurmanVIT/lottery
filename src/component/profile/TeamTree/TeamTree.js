import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import crypto_logo from "../../../assets/img/crypto_logo.png";


const TeamTree = () => {
    const navigation = useNavigate();


    return (
        <>
            <div className="team_tree">
                <div className="header_team">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="team_tree_content">
                            <h4>Team Tree</h4>
                        </div>
                    </div>

                    <div className="team_tree_section">
                        <iframe src={crypto_logo} name="iframe_a" title="Iframe Example"></iframe>
                        <p><a href="https://cryptokity.com/" target="iframe_a">https://cryptokity.com</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamTree;
