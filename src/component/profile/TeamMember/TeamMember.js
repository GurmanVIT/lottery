import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const TeamMember = () => {
    const navigation = useNavigate();

    return (
        <>
            <div className="team_member">
                <div className="header_member">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="member_content">
                            <h4>Team Member</h4>
                        </div>
                    </div>

                    <div className="team_member_section">
                        <Tabs
                            defaultActiveKey="left"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="left" title="Left">
                                <div className='card_amount'>
                                    <p>Name : <span>fisrt + last</span></p>
                                    <p>Email : <span>jided@gmail.com</span></p>
                                    <p>UserId : <span>djedj</span></p>
                                    <p>Staus : <span>853</span></p>
                                    <p>Joining Date : <span>853</span></p>
                                </div>
                            </Tab>

                            <Tab eventKey="right" title="Right">
                                <div className='card_amount'>
                                    <p>Amount : <span>853.0 USDT</span></p>
                                    <p>Admin Charges : <span>853</span></p>
                                    <p>Payable Amount : <span>853</span></p>
                                    <p>Staus : <span>853</span></p>
                                    <p>Date : <span>853</span></p>
                                </div>
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamMember;
