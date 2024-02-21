import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Table from 'react-bootstrap/Table';

const Rules = () => {
    const navigation = useNavigate();


    return (
        <>
            <div className="rule">
                <div className="header_rule">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="rule_content">
                            <h4>Rules</h4>
                        </div>
                    </div>

                    <div className="rule_section">
                        <h5>(Promotion parter) program</h5>
                        <p>This activity is valid for a long time</p>

                        <div className="card_subordination">
                            <div className="number_one">
                                <h6>01</h6>
                            </div>
                            <p>There are 6 subordinate levels in inviting friends, if A invites B, then B is a level 1 subordinate of A. If B invites C, then C is a level 1 subordinate of B and also a level 2 subordinate of A. If C invites D, then D is a level 1 subordinate of C, at the same time a level 2 subordinate of B and also a level 3 subordinate of A.</p>
                        </div>

                        <div className="card_subordination mt-4">
                            <div className="number_one">
                                <h6>02</h6>
                            </div>
                            <p>When inviting friends to register, you must send the invitation link provided or enter the invitation code manually so that your friends become your level 1 subordinates.</p>
                        </div>

                        <div className="card_subordination mt-4">
                            <div className="number_one">
                                <h6>03</h6>
                            </div>
                            <p>The invitee registers via the inviter's invitation code and completes the deposit, shortly after that the commission will be received immediately</p>
                        </div>


                        <div className="card_subordination mt-4">
                            <div className="number_one">
                                <h6>04</h6>
                            </div>
                            <p>The calculation of yesterday's commission starts every morning at 01:00. After the commission calculation is completed, the commission is rewarded to the wallet and can be viewed through the commission collection record.</p>
                        </div>

                        <div className="card_subordination mt-4">
                            <div className="number_one">
                                <h6>05</h6>
                            </div>
                            <p>Commission rates vary depending on your agency level on that day</p>
                            <p>Number of Teams: How many downline deposits you have to date. </p>
                            <p>Team Deposits: The total number of deposits made by your downline in one day. </p>
                            <p>Team Deposit: Your downline deposits within one day.</p>
                        </div>

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Agency Lvl</th>
                                    <th>Team Number</th>
                                    <th>Team Betting</th>
                                    <th>Team Deposit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Level-0
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-1
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-2
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-3
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-4
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-5
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-6
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-7
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-8
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-9
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>

                                <tr>
                                    <td>Level-10
                                        {/* <img src={level_0} alt="level_0" /> */}
                                    </td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className="card_subordination mt-4">
                            <div className="number_one">
                                <h6>06</h6>
                            </div>
                            <p>The commission percentage depends on the membership level. The higher the membership level, the higher the bonus percentage. Different game types also have different payout percentages. </p>
                            <p>The commission rate is specifically explained as follows</p>
                        </div>

                        <div className="Lottery_percentage">
                            <h4>Lottery commission percentage</h4>
                        </div>

                        <div className="lottery_table">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Commission level</th>
                                        <th>Tier 1</th>
                                        <th>Tier 2</th>
                                        <th>Tier 3</th>
                                        <th>Tier 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Level-0
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-1
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-2
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-3
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-4
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-5
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-6
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-7
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-8
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-9
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>Level-10
                                            {/* <img src={level_0} alt="level_0" /> */}
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Rules;

