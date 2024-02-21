import React from "react";
import team_group from '../../assets/img/team_group.svg';
import invitation_copy from '../../assets/img/invitation_copy.svg';
import rules from '../../assets/img/rules.svg';
import next from '../../assets/img/next.svg';
import promotion_data from '../../assets/img/promotion_data.svg';
import commission from '../../assets/img/commission.svg';
import subordinate from '../../assets/img/subordinate.svg';
import { useNavigate } from "react-router";


const Promotion = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="promotions">
                <div className="header_promotions">
                    <div className="header_flex">
                        <div className="promotions_content">
                            <h4>Agency</h4>
                        </div>
                    </div>

                    <div className="promotions_section">
                        <div className="agency">
                            <h3>0</h3>
                            <div className="bg_total">
                                <h6>Yesterday's total commission</h6>
                            </div>
                            <p>Upgrade the level to increase commission income</p>
                        </div>
                        <div className="direct_team">
                            <div className="deposit_direct">
                                <div className="direct">
                                    <img src={team_group} alt="team_group" />
                                    <h6>Direct subordinates</h6>
                                </div>
                                <div className="p-3 pb-1">
                                    <div className="register_number">
                                        <h6>0</h6>
                                        <p> number of register</p>
                                    </div>
                                    <div className="register_number">
                                        <h6>0</h6>
                                        <p> Deposit number</p>
                                    </div>
                                    <div className="register_number">
                                        <h6>0</h6>
                                        <p> Deposit amount</p>
                                    </div>
                                    <div className="register_number">
                                        <h6>0</h6>
                                        <p> Number of people making first deposit</p>
                                    </div>
                                </div>
                            </div>

                            <div className="deposit_direct">
                                <div className="direct people">
                                    <img src={team_group} alt="team_group" />
                                    <h6>Team subordinates</h6>
                                </div>
                                <div className="p-3 pb-1 border_left">
                                    <div className="register_number">
                                        <h6>0</h6>
                                        <p> number of register</p>
                                    </div>
                                    <div className="Deposit_number">
                                        <h6>0</h6>
                                        <p> Deposit number</p>
                                    </div>
                                    <div className="amount_number">
                                        <h6>0</h6>
                                        <p> Deposit amount</p>
                                    </div>
                                    <div className="people_number">
                                        <h6>0</h6>
                                        <p> Number of people making first deposit</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4 link_btn">
                            <button type="button" className="login_button">INVITATION LINK</button>
                        </div>

                        <div className="game">
                            <div className="img_game">
                                <img src={invitation_copy} alt="invitation_copy" />
                                <p>Copy invitation code</p>
                            </div>
                            <div className="next_img">
                                <img src={next} alt="next" />
                            </div>
                        </div>


                        <div className="game">
                            <div className="img_game">
                                <img src={subordinate} alt="subordinate" />
                                <p>Subordinate data</p>
                            </div>
                            <div className="next_img">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div className="game">
                            <div className="img_game">
                                <img src={commission} alt="commission" />
                                <p>Commission detail</p>
                            </div>
                            <div className="next_img">
                                <img src={next} alt="next" />
                            </div>
                        </div>


                        <div className="game" onClick={() => navigation('/rule')}>
                            <div className="img_game">
                                <img src={rules} alt="rules" />
                                <p>Invitation rules</p>
                            </div>
                            <div className="next_img">
                                <img src={next} alt="next" />
                            </div>
                        </div>

                        <div className="promotion_data">
                            <h5><img src={promotion_data} alt="promotion_data" className="me-2" /> Promotion data</h5>
                            <div className="data_details">
                                <div className="total_number">
                                    <div className="this_week">
                                        <h6>0</h6>
                                        <p>This Week</p>
                                    </div>
                                    <div className="this_week">
                                        <h6>0</h6>
                                        <p>Direct subordinate</p>
                                    </div>
                                </div>
                                <div className="total_number">
                                    <div className="this_week">
                                        <h6>0</h6>
                                        <p>Total commission</p>
                                    </div>
                                    <div className="this_week">
                                        <h6>0</h6>
                                        <p>Total number of subordinates in the team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Promotion;
