import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../../assets/img/back.svg";
import { useDispatch } from "react-redux";
import moment from "moment-timezone";


const DepositHistory = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch();


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
            <div className="deposit_historys">
                <div className="header_deposit_historys">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="deposit_historys_content">
                            <h4>Deposit History</h4>
                        </div>
                    </div>
                    <div className="card_deposit_historys">
                        {/* {notificationData != null &&
                            notificationData.map((item, index) => ( */}
                        <div className="card">
                            <div className="login_notification">
                                <div className="fund_send">
                                    <h6 className="ellipsis">Fund Send to YG934</h6>
                                    <p>
                                        9/2/2024  15:14
                                    </p>
                                </div>
                                <div className="amount_result">
                                    <h6>77 USDT</h6>
                                </div>
                            </div>
                        </div>
                        {/* ))} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DepositHistory;
