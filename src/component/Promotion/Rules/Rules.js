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
    console.log("Invitation data ==>", getInvitationBonusReducerData);
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
                    <th>Lvl</th>
                    <th>Dir</th>
                    <th>T-Size</th>
                    <th>T-Bet</th>
                    <th>T-Rec</th>
                    <th>L-Bonus</th>
                    <th>Sta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lvl-1
                      {/* <img src={level_0} alt="level_0" /> */}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>

                  </tr>

                  <tr>
                    <td>Lvl-7
                      {/* <img src={level_0} alt="level_0" /> */}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>Lvl-7
                      {/* <img src={level_0} alt="level_0" /> */}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>Lvl-7
                      {/* <img src={level_0} alt="level_0" /> */}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>Lvl-7
                      {/* <img src={level_0} alt="level_0" /> */}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>Lvl-7
                      {/* <img src={level_0} alt="level_0" /> */}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <td>Lvl-7
                      {/* <img src={level_0} alt="level_0" /> */}
                    </td>
                    <td>0</td>
                    <td>0</td>
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
