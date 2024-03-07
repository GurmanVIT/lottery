import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/img/back.svg";
import flat from "../../assets/img/Flat.svg";
import dollar_img from "../../assets/img/dollar_img.png";
import { useDispatch, useSelector } from "react-redux";
import { transactionList } from "../../redux/transactionListSlice";
import moment from "moment";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../utils/Colors";


const Wallet = () => {

    const navigation = useNavigate();

    const transactionListData = useSelector(
        (state) => state.transactionListReducer.data
    );

    const [transactionData, setTransactionData] = useState(null);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(transactionList());
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

    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })


    return (
        <>
            <div className="wallet_inner">
                <div className="header_wallet">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="wallet_content">
                            <h4>Wallet</h4>
                        </div>
                    </div>

                    {transactionData != null ? (
                        <div className="height_full">
                            <div className="dapic_header"></div>

                            <div className="wallet_section">
                                <div className="wallet_card">
                                    <div className="flat_img">
                                        <img src={flat} alt="flat" />
                                    </div>
                                    <h1><img src={dollar_img} alt="dollar_img" className="dollar_img" />{transactionListData != null ? transactionListData.data.walletPoints : "0.0"}</h1>
                                    <h4>Total Balance</h4>
                                    <div className="btn_flex">
                                        <div
                                            className="withdraw_btn"
                                            onClick={() => navigation("/withdraw_balance")}
                                        >
                                            <button>Withdraw</button>
                                        </div>
                                        <div
                                            className="deposit_btn"
                                            onClick={() => navigation("/deposit")}
                                        >
                                            <button>Deposit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="link_member_sections">
                                <h5>Fund Transactions</h5>
                                {transactionData != null &&
                                    transactionData.map((item, index) => (
                                        <div className="card_link">
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
                        </div>
                    ) : (
                        <div className="height_full " style={{ height: "100vh" }}>
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

export default Wallet;
