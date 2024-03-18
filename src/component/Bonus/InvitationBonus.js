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
    const profileResponse = useSelector((state) => state.profileReducer.data);

    const [inviteBonus, setInviteBonus] = useState(null);

    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

    useEffect(() => {

        const userId = localStorage.getItem("sponsorId");
        const payload = {
            userId: userId
        }
        console.log("Payload ===>", payload)
        dispatch(inviteBonusSheet(payload));

    }, []);


    useEffect(() => {
        console.log("inviteBonusSheetReducer", inviteBonusSheetReducer)
        if (
            inviteBonusSheetReducer != null &&
            inviteBonusSheetReducer.success === 1
        ) {
            setInviteBonus(inviteBonusSheetReducer.data.bonusData);
        }
    }, [inviteBonusSheetReducer]);

    const claimInviteBonusApi = (item) => {
        const userId = localStorage.getItem("sponsorId");
        const payload = {
            user_Id: userId,
            bonus_Level: item.level

        }

        console.log("Payload ===> ", payload)
        dispatch(claimInviteBonus(payload))
    }

    useEffect(() => {
        if (claimInviteBonusReducer != null && claimInviteBonusReducer.status === 1) {
            const userId = localStorage.getItem("sponsorId");
            const payload = {
                userId: userId
            }
            dispatch(inviteBonusSheet(payload));
        }
    }, [claimInviteBonusReducer])

    const getPeople = (index) => {
        const caseVal = index + 1
        switch (caseVal) {
            case 1:
                console.log("numberOfInvitees ===>", inviteBonusSheetReducer.data.numberOfInvitees)
                return inviteBonusSheetReducer.data.numberOfInvitees >= 1 ? 1 : 0
            case 2:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 3 ? 3 : inviteBonusSheetReducer.data.numberOfInvitees
            case 3:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 10 ? 10 : inviteBonusSheetReducer.data.numberOfInvitees
            case 4:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 30 ? 30 : inviteBonusSheetReducer.data.numberOfInvitees
            case 5:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 70 ? 70 : inviteBonusSheetReducer.data.numberOfInvitees
            case 6:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 200 ? 200 : inviteBonusSheetReducer.data.numberOfInvitees
            case 7:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 500 ? 500 : inviteBonusSheetReducer.data.numberOfInvitees
            case 8:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 1000 ? 1000 : inviteBonusSheetReducer.data.numberOfInvitees
            case 9:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 5000 ? 5000 : inviteBonusSheetReducer.data.numberOfInvitees
            case 10:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 10000 ? 10000 : inviteBonusSheetReducer.data.numberOfInvitees
            case 11:
                return inviteBonusSheetReducer.data.numberOfInvitees >= 20000 ? 20000 : inviteBonusSheetReducer.data.numberOfInvitees
        }
    }

    const getDeposit = (index) => {
        const caseVal = index + 1
        switch (caseVal) {
            case 1:
                console.log("numberOfInvitees ===>", inviteBonusSheetReducer.data.rechargePerPepole)
                return inviteBonusSheetReducer.data.rechargePerPepole >= 1 ? 1 : 0
            case 2:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 3 ? 3 : inviteBonusSheetReducer.data.rechargePerPepole
            case 3:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 10 ? 10 : inviteBonusSheetReducer.data.rechargePerPepole
            case 4:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 30 ? 30 : inviteBonusSheetReducer.data.rechargePerPepole
            case 5:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 70 ? 70 : inviteBonusSheetReducer.data.rechargePerPepole
            case 6:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 200 ? 200 : inviteBonusSheetReducer.data.rechargePerPepole
            case 7:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 500 ? 500 : inviteBonusSheetReducer.data.rechargePerPepole
            case 8:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 1000 ? 1000 : inviteBonusSheetReducer.data.rechargePerPepole
            case 9:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 5000 ? 5000 : inviteBonusSheetReducer.data.rechargePerPepole
            case 10:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 10000 ? 10000 : inviteBonusSheetReducer.data.rechargePerPepole
            case 11:
                return inviteBonusSheetReducer.data.rechargePerPepole >= 20000 ? 20000 : inviteBonusSheetReducer.data.rechargePerPepole
        }
    }


    return (
        <>
            <div className="invitaion_bonus">
                <div className="header_invitaion_bonus">

                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="game_bonus_content">
                            <h4>Invitation Bonus</h4>
                        </div>
                        <div
                            className="deposit_history"
                            onClick={() => navigation("/invitation_rules")}
                        >
                            <p>Rule</p>
                        </div>
                    </div>

                    {inviteBonus != null ? (
                        <div className="invitaion_bonus_section">

                            {/* <div className="notification" onClick={() => navigation('/invitation_rules')}>
                                <div className="img_notification">
                                    <img src={rule_img} alt="rule_img" style={{ width: "40px", height: "40px" }} />
                                    <p>Invitation Reward Rules</p>
                                </div>
                                <div className="number_noti">
                                    <img src={next} alt="next" />
                                </div>
                            </div> */}

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
                                    inviteBonus.map((item, index) => (
                                        <div className="bonus_card mb-3">
                                            <div className="head_bonus">
                                                <div className="bonus_bg">
                                                    <p>Bonus <span>{item.level}</span></p>
                                                    {/* <p className="close_btn"><CloseButton /></p> */}
                                                </div>
                                                <div className="right_number">{item.bonus}</div>
                                            </div>
                                            <div className="bonus_around">
                                                <div className="numbers_one">
                                                    <p className="text-start">Number of invitees</p>
                                                    <p>{item.people}</p>
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
                                                        <p className="number_two">{getPeople(index)} / {item.people}</p>
                                                        <p>Number of invitees</p>
                                                    </div>
                                                    <div className="deposit_number">
                                                        <p className="number_two">{getDeposit(index)} / {item.people}</p>
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
