import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import delete_img from "../../../assets/img/delete.svg";
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationApi } from '../../../redux/notificationSlice';
import moment from "moment-timezone";


const Notification = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch()
    const [skip, setSkip] = useState(0)


    // const notificationResponse = useSelector((state) => state.notificationDataReducer.data);
    const [notificationData, setNotificationData] = useState(null)


    useEffect(() => {

        dispatch(getNotificationApi(skip))

    }, [])

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

        // console.log(dateData[1]);

        const finalDate = dateData[0] + " " + createdTime.format("HH:mm:ss");

        return formattedDate;
    };

    return (
        <>
            <div className='notifications'>
                <div className='header_notification'>
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="setting_content">
                            <h4>Settings Center</h4>
                        </div>
                    </div>
                    <div className='card_notification'>
                        <div className='card'>
                            <p>{getFormattedDateTime(notificationData.upatedAt)}</p>
                            <div className='login_notification'>
                                <div className='login_time_date'>
                                    <h6>LOGIN NOTIFICATION</h6>
                                    <p>Your account has been login at{getFormattedDateTime(notificationData.upatedAt)}</p>
                                </div>
                                <div className='delete_img'>
                                    <img src={delete_img} alt='delete_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification;