import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import delete_img from "../../../assets/img/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { getNotificationApi } from "../../../redux/notificationSlice";
import moment from "moment-timezone";
import Modal from "react-modal";
import { deleteNotifications } from "../../../redux/deleteSlice";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";



const modal_notification = {
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, 0)",
    maxWidth: "100%",
    width: "420px",
    borderRadius: "5px",
    backgroundColor: "#74707008",
    borderRadius: "14px 14px 0 0",
  },
};

const Notification = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(0);
  const [notificationId, setNotificationId] = useState("");

  const [isWinOpen, setWinOpen] = useState(false);

  const notificationResponse = useSelector(
    (state) => state.notificationReducer.data
  );
  const deleteReducer = useSelector((state) => state.deleteReducer.data);
  const [notificationData, setNotificationData] = useState(null);

  const openDeleteModal = (id) => {
    setNotificationId(id);
    setWinOpen(true);
  };

  const deleteNoti = () => {
    const payload = {
      id: notificationId,
    };

    dispatch(deleteNotifications(payload));
  };

  useEffect(() => {
    dispatch(getNotificationApi(skip));
  }, []);

  useEffect(() => {
    if (notificationResponse != null && notificationResponse.status === 1) {
      setNotificationData(notificationResponse.data);
    }
  }, [notificationResponse]);

  useEffect(() => {
    if (deleteReducer != null && deleteReducer.status === 1) {
      setWinOpen(false);
      dispatch(getNotificationApi(0));
    } else if (deleteReducer != null) {
      alert(deleteReducer.message);
    }
  }, [deleteReducer]);

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
      <div className="notifications">
        <div className="header_notification">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="setting_content">
              <h4>Notifications</h4>
            </div>
          </div>
          {notificationData != null ? (

            <div className="card_notification_load">
              <div className="card_notification">
                {notificationData != null &&
                  notificationData.map((item, index) => (
                    <div className="card" key={index}>
                      <p>{getFormattedDateTime(item.upatedAt)}</p>
                      <div className="login_notification">
                        <div className="login_time_date">
                          <h6>{item.title}</h6>
                          <p>
                            {item.text} {getFormattedDateTime(item.upatedAt)}
                          </p>
                        </div>
                        <div
                          className="delete_img"
                          onClick={() => openDeleteModal(item._id)}
                        >
                          <img src={delete_img} alt="delete_img" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <Modal
                isOpen={isWinOpen}
                style={modal_notification}
                onRequestClose={() => setWinOpen(false)}
              >
                <div className="change_nickname">
                  <h3>Delete Notification</h3>
                  <div className="nick_name">
                    <div className="group_delete">
                      <h4 className="delete_this">
                        Do you want to delete this notification.{" "}
                      </h4>
                    </div>

                    <div className="cancel_delete_btn">
                      <button
                        className="cancel_btn"
                        onClick={() => setWinOpen(false)}
                      >
                        Cancel
                      </button>

                      <button className="delete_btn" onClick={() => deleteNoti()}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          ) : (
            <div className="card_notification_load" style={{ height: "100vh" }}>
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

export default Notification;
