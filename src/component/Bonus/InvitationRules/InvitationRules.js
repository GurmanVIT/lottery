import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Table from 'react-bootstrap/Table';

const InvitationRules = () => {
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
            <div className="invitaion_rule">
                <div className="header_invitaion_rule">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="invitaion_rule_content">
                            <h4>Invitation Reward Rules</h4>
                        </div>
                    </div>

                    <div className="invitaion_rule_section">
                        <p>Invite friends and recharge to get additional platform rewards !</p>
                        <p className="mb-3">After being claimed, the rewards will be directly distributed to the wallet balance within 10 minutes.</p>

                        <div className="invitaion_rule_table">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Invite account</th>
                                        <th>Deposit amount</th>
                                        <th>Bonus</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1People
                                        </td>
                                        <td>500.00</td>
                                        <td>55.00</td>
                                    </tr>

                                    <tr>
                                        <td>3People
                                        </td>
                                        <td>500.00</td>
                                        <td>155.00</td>
                                    </tr>

                                    <tr>
                                        <td>10People
                                        </td>
                                        <td>500.00</td>
                                        <td>555.00</td>
                                    </tr>

                                    <tr>
                                        <td>30People
                                        </td>
                                        <td>500.00</td>
                                        <td>1,555.00</td>
                                    </tr>

                                    <tr>
                                        <td>70People
                                        </td>
                                        <td>500.00</td>
                                        <td>3,355.00</td>
                                    </tr>

                                    <tr>
                                        <td>200People
                                        </td>
                                        <td>500.00</td>
                                        <td>10,955.00</td>
                                    </tr>

                                    <tr>
                                        <td>500People
                                        </td>
                                        <td>500.00</td>
                                        <td>25,555.00</td>
                                    </tr>

                                    <tr>
                                        <td>1000People
                                        </td>
                                        <td>500.00</td>
                                        <td>48,555.00</td>
                                    </tr>

                                    <tr>
                                        <td>5000People
                                        </td>
                                        <td>500.00</td>
                                        <td>355,555.00</td>
                                    </tr>

                                    <tr>
                                        <td>10000People
                                        </td>
                                        <td>500.00</td>
                                        <td>755,555.00</td>
                                    </tr>

                                    <tr>
                                        <td>20000People
                                        </td>
                                        <td>500.00</td>
                                        <td>1,555,555.00</td>
                                    </tr>

                                    <tr>
                                        <td>50000People
                                        </td>
                                        <td>500.00</td>
                                        <td>3,555,555.00</td>
                                    </tr>

                                    <tr>
                                        <td>100000People
                                        </td>
                                        <td>500.00</td>
                                        <td>7,555,555.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div className="account_rules">
                            <h6>Rules</h6>

                            <ul>
                                <li>Only when the number of invited accounts is reached and each account can meet the recharge amount can you receive the bonus.</li>
                                <li>The invitation account meets the requirements, but the recharge amount of the account does not meet the requirements, and the bonus cannot be claimed.</li>
                                <li>Please claim the event bonus within the event period. All bonuses will be cleared after the event expires.</li>
                                <li>Please complete the task within the event period. After the event expires, the invitation record will be cleared.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default InvitationRules;

