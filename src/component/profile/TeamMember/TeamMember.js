import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { directMemberList } from "../../../redux/directMembersListSlice";
import moment from "moment";
import { clearData } from "../../../redux/transactionListSlice";

const TeamMember = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [position, setPosition] = useState("L");

  const myData = useSelector((state) => state.directMemberListReducer.data);
  const [dataList, setDataList] = useState(null);

  useEffect(() => {
    const payload = {
      position: position,
    };

    dispatch(directMemberList(payload));
  }, [position]);

  useEffect(() => {
    console.log("directMemberListReducer ===> ", myData);
    if (myData != null && myData.success === 1) {
      setDataList(myData.data);
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

          <div className="team_member_section">
            <Tabs
              defaultActiveKey="left"
              id="uncontrolled-tab-example"
              className="mb-3"
              onSelect={handleSelect}
            >
              <Tab eventKey="left" title="Left">
                {dataList != null &&
                  dataList.map((item, index) => (
                    <div className="card_amount">
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
                        <span>{getFormattedDateTime(item.createdAt)}</span>
                      </p>
                    </div>
                  ))}
              </Tab>

              <Tab eventKey="right" title="Right">
                {dataList != null &&
                  dataList.map((item, index) => (
                    <div className="card_amount">
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
                        <span>{getFormattedDateTime(item.createdAt)}</span>
                      </p>
                    </div>
                  ))}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
