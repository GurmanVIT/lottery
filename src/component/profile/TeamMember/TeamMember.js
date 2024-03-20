import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { directMemberList } from "../../../redux/directMembersListSlice";
import moment from "moment";
import { clearData } from "../../../redux/transactionListSlice";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";
import no_data from "../../../assets/img/no_data.svg";
import { downlineList } from "../../../redux/downlineListSlice";

const TeamMember = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [position, setPosition] = useState("L");

  const myData = useSelector((state) => state.downlineListReducer.data);
  const [dataList, setDataList] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  });

  useEffect(() => {
    const sponsorId = localStorage.getItem("sponsorId");
    const payload = {
      position: position == "L" ? "left" : "right",
      sponsorId: sponsorId,
    };

    dispatch(downlineList(payload));
  }, [position]);

  useEffect(() => {
    if (myData != null && myData.success === 1) {
      setDataList(myData.data.downlineData);
    }
  }, [myData]);

  const handleSelect = (key) => {
    if (key === "left") {
      dispatch(clearData());
      setPosition("L");
    } else {
      dispatch(clearData());
      setPosition("R");
    }
  };

  const getFormattedDateTime = (utcDate) => {
    const timestampStr = new Date(utcDate);
    // Convert to Indian time zone (IST)
    // const timestamp = moment(timestampStr).tz("Asia/Kolkata");
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    };

    // Format the date as "2024-01-30"
    const formattedDate = timestampStr.toLocaleDateString("en-IN", options);

    const dateData = formattedDate.split(" ");

    const createdTime = moment(dateData[1], "HH:mm:ss")
      .add(5, "hours")
      .add(30, "minutes");

    const finalDate = dateData[0] + " " + createdTime.format("HH:mm:ss");

    return formattedDate;
  };

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

          {dataList != null ? (
            <div className="team_member_section">
              <Tabs
                defaultActiveKey="left"
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={handleSelect}
              >
                <Tab eventKey="left" title="Left">
                  {dataList.length > 0 ? (
                    <div>
                      {dataList != null &&
                        dataList.map((item, index) => (
                          <div className="card_amount mb-2">
                            <p>
                              Name :{" "}
                              <span>
                                {item.firstName} {item.lastName}
                              </span>
                            </p>
                            <p>
                              UserId : <span>{item.userId}</span>
                            </p>
                            <p>
                              Joining Date :{" "}
                              <span>
                                {getFormattedDateTime(item.createdAt)}
                              </span>
                            </p>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className='no_data_img' style={{ display: "flex", height: "75vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                      <div><img src={no_data} alt='no_data' width={120} /></div>
                      <p style={{ fontSize: "14px", color: "gray", marginRight: "20px" }}>No Data Found</p>
                    </div>
                  )}
                </Tab>

                <Tab eventKey="right" title="Right">
                  {dataList.length > 0 ? (
                    <div>
                      {dataList != null &&
                        dataList.map((item, index) => (
                          <div className="card_amount mb-2">
                            <p>
                              Name :{" "}
                              <span>
                                {item.firstName} {item.lastName}
                              </span>
                            </p>
                            <p>
                              UserId : <span>{item.userId}</span>
                            </p>
                            <p>
                              Joining Date :{" "}
                              <span>
                                {getFormattedDateTime(item.createdAt)}
                              </span>
                            </p>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className='no_data_img' style={{ display: "flex", height: "75vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                      <div><img src={no_data} alt='no_data' width={120} /></div>
                      <p style={{ fontSize: "14px", color: "gray", marginRight: "20px" }}>No Data Found</p>
                    </div>
                  )}
                </Tab>
              </Tabs>
            </div>
          ) : (
            <div className="team_member_section" style={{ height: "100vh" }}>
              <div className="main_loader">
                <ClipLoader color={myColors.primaryColor} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeamMember;
