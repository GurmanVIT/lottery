import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getInvitationBonus } from "../../../redux/invitationBonusSlice";

const Rules = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const getInvitationBonusReducerData = useSelector(
    (state) => state.getInvitationBonusReducer.data
  );

  const [invitationData, setInvitationData] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  })

  useEffect(() => {
    dispatch(getInvitationBonus());
  }, []);

  useEffect(() => {
    if (
      getInvitationBonusReducerData != null &&
      getInvitationBonusReducerData.status === 1
    ) {
      setInvitationData(getInvitationBonusReducerData.data);
    }
  }, [getInvitationBonusReducerData]);

  return (
    <>
      <div className="rule">
        <div className="header_rule">
          <div className="header_flexs">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="rules_contents">
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
              <p>
                There are 6 subordinate levels in inviting friends, if A invites
                B, then B is a level 1 subordinate of A. If B invites C, then C
                is a level 1 subordinate of B and also a level 2 subordinate of
                A. If C invites D, then D is a level 1 subordinate of C, at the
                same time a level 2 subordinate of B and also a level 3
                subordinate of A.
              </p>
            </div>

            <div className="card_subordination mt-4">
              <div className="number_one">
                <h6>02</h6>
              </div>
              <p>
                When inviting friends to register, you must send the invitation
                link provided or enter the invitation code manually so that your
                friends become your level 1 subordinates.
              </p>
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

export default Rules;
