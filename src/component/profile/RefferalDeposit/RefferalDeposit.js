import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import { transactionList } from "../../../redux/transactionListSlice";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";
import moment from "moment";
import no_data from "../../../assets/img/no_data.svg";


const RefferalDeposit = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

    const [transactionData, setTransactionData] = useState(null);

    const transactionListData = useSelector(
        (state) => state.transactionListReducer.data
    );

    useEffect(() => {
        const payload = {
            type: 'team_play_bonus',
        }
        dispatch(transactionList(payload));
    }, []);

    useEffect(() => {
        if (transactionListData != null && transactionListData.success === 1) {
            setTransactionData(transactionListData.data.transactions);
        }
    }, [transactionListData]);


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
            <div className="game_bonus">
                <div className="header_game_bonus">

                    <div className="header_flexes">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="setting_content">
                            <h4>Refferal Deposit</h4>
                        </div>
                    </div>

                    {transactionData != null ? (
                        <div className="game_bonus_section">
                            {transactionData.length > 0 ? (
                                <div className="link_members_sections">
                                    {transactionData != null &&
                                        transactionData.map((item, index) => (
                                            <div className="card_links">
                                                <p>
                                                    Amount : <span className="ellipsis">{item.amount}</span>
                                                </p>
                                                <p>
                                                    Description :{" "}
                                                    <span className="ellipsis">{item.description}</span>
                                                </p>
                                                <p>
                                                    Date :{" "}
                                                    <span className="ellipsis">
                                                        {getFormattedDateTime(item.createdAt)}
                                                    </span>
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className='no_data_img' style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <div><img src={no_data} alt='no_data' width={120} /></div>
                                    <p style={{ fontSize: "14px", color: "gray", marginRight: "20px" }}>No Data Found</p>
                                </div>
                            )}

                        </div>
                    ) :
                        <div className="game_bonus_section " >
                            <div className="main_loader">
                                <ClipLoader color={myColors.primaryColor} />
                            </div>
                        </div>
                    }
                </div>
            </div >
        </>
    );
};

export default RefferalDeposit;
