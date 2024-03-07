import React, { useEffect, useState } from "react";
import back from "../../assets/img/back.svg";
import rule_img from '../../assets/img/rule_img.png';
import next from '../../assets/img/next.svg';
import { useNavigate } from "react-router";
import CloseButton from "../SVG/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { inviteBonusSheet } from "../../redux/inviteBonusSheetSlice";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../utils/Colors";
import { claimInviteBonus } from "../../redux/claimInviteBonusSlice";

const InvitationBonus = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch();

    const inviteBonusSheetReducer = useSelector((state) => state.inviteBonusSheetReducer.data);
    const claimInviteBonusReducer = useSelector((state) => state.claimInviteBonusReducer.data);

    const [inviteBonus, setInviteBonus] = useState(null);

    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

    useEffect(() => {
        dispatch(inviteBonusSheet());
    }, []);


    useEffect(() => {
        console.log("inviteBonusSheetReducer ===> ", inviteBonusSheetReducer)
        if (
            inviteBonusSheetReducer != null &&
            inviteBonusSheetReducer.status === 1
        ) {
            setInviteBonus(inviteBonusSheetReducer.data.levelData);
        }
    }, [inviteBonusSheetReducer]);

    const claimInviteBonusApi = (item) => {

        const payload = {
            level: item.level
        }

        dispatch(claimInviteBonus(payload))
    }

    useEffect(() => {
        if (claimInviteBonusReducer != null && claimInviteBonusReducer.status === 1) {
            dispatch(inviteBonusSheet());
        }
    }, [claimInviteBonusReducer])


    return (
        <>
            <div className="invitaion_bonus">
                <div className="header_invitaion_bonus">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="invitaion_bonus_content">
                            <h4>Invitation Bonus</h4>
                        </div>
                    </div>

                    {inviteBonus != null ? (
                        <div className="invitaion_bonus_section">

                            <div className="notification" onClick={() => navigation('/invitation_rules')}>
                                <div className="img_notification">
                                    <img src={rule_img} alt="rule_img" style={{ width: "40px", height: "40px" }} />
                                    <p>Invitation Reward Rules</p>
                                </div>
                                <div className="number_noti">
                                    <img src={next} alt="next" />
                                </div>
                            </div>

                            <div className="notification mb-3" onClick={() => navigation('/direct_tree')}>
                                <div className="img_notification">
                                    <img src={rule_img} alt="rule_img" style={{ width: "40px", height: "40px" }} />
                                    <p>My Direct Members</p>
                                </div>
                                <div className="number_noti">
                                    <img src={next} alt="next" />
                                </div>
                            </div>

                            <div>
                                {inviteBonus != null &&
                                    inviteBonus.map((item) => (
                                        <div className="bonus_card mb-3">
                                            <div className="head_bonus">
                                                <div className="bonus_bg">
                                                    <p>Bonus <span>{item.level}</span></p>
                                                    <p className="close_btn"><CloseButton /></p>
                                                </div>
                                                <div className="right_number">{item.bonus}</div>
                                            </div>
                                            <div className="bonus_around">
                                                <div className="numbers_one">
                                                    <p className="text-start">Number of invitees</p>
                                                    <p>1</p>
                                                </div>

                                                <div className="recharge_member">
                                                    <p className="text-start">Recharge per people</p>
                                                    <p>{item.people}</p>
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

                                                <div className="finished_btn">
                                                    <button type="button" style={{ backgroundColor: item.status === 1 ? "#6561C0" : "#bfbfbf" }} onClick={() => item.status === 1 ? claimInviteBonusApi(item) : ""}>{item.status === 0 ? "Unfinished" : item.status === 1 ? "Claim" : "Finished"}</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
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

export default InvitationBonus;
