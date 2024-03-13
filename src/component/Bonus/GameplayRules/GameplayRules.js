import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import { Table } from "react-bootstrap";


const GameplayRules = () => {

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
            <div className="direct_tree">
                <div className="header_direct_tree">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="direct_tree_content">
                            <h4>Gameplay Rules</h4>
                        </div>

                    </div>

                    <div className="direct_tree_section">

                        <div className="lottery_table">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>LEV<br />EL</th>
                                        <th>DIRE<br />CT</th>
                                        <th>TEAM<br />SIZE</th>
                                        <th>TOTAL<br />BET</th>
                                        <th>TEAM<br />RECHARGE</th>
                                        <th>LEVEL<br />BONUS</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>1</td>

                                        <td>2</td>
                                        <td>5</td>
                                        <td>10,000</td>
                                        <td>10,000</td>
                                        <td>0.20%</td>

                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>10</td>
                                        <td>20,000</td>
                                        <td>20,000</td>
                                        <td>0.20%</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>8</td>
                                        <td>15</td>
                                        <td>50,000</td>
                                        <td>50,000</td>
                                        <td>0,20%</td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>11</td>
                                        <td>20</td>
                                        <td>1,50,000</td>
                                        <td>1,50,000</td>
                                        <td>0.20%</td>
                                    </tr>

                                    <tr>
                                        <td>5</td>
                                        <td>14</td>
                                        <td>25</td>
                                        <td>4,50,000</td>
                                        <td>4,50,000</td>
                                        <td>0.20%</td>
                                    </tr>

                                    <tr>
                                        <td>6</td>
                                        <td>17</td>
                                        <td>30</td>
                                        <td>13,50,000</td>
                                        <td>13,50,000</td>
                                        <td>0.20%</td>
                                    </tr>

                                    <tr>
                                        <td>7</td>
                                        <td>20</td>
                                        <td>100</td>
                                        <td>40,50,000</td>
                                        <td>40,50,000</td>
                                        <td>0.20%</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>50</td>
                                        <td>500</td>
                                        <td>1,21,50,000</td>
                                        <td>1,21,50,000</td>
                                        <td>0.20%</td>
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

export default GameplayRules;
