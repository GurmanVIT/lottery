import React, { useEffect, useState } from 'react';
import back from '../../../assets/img/back.svg';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { myHistory } from '../../../redux/myHistorySlice';
import { myColors } from '../../../utils/Colors';
import moment from "moment-timezone";
import PaginationComponent from '../../Lottery/Pagination/Pagination';


const BetHistory = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch()

    const [skip, setSkip] = useState(0)
    const [myBetData, setMyBetData] = useState([])
    const myHistoryData = useSelector((state) => state.myHistoryReducer.data);
    const [activeKey, setActiveKey] = useState(1);

    useEffect(() => {
        getMyHistory();
    }, [skip, activeKey]);

    const getMyHistory = (type) => {
        const payload = {
            skip: skip,
            limit: 10,
            type: type,
        };

        dispatch(myHistory(payload));
    };

    const handleSelect = (key) => {
        // Additional actions based on the clicked tab
        setSkip(0);
        if (key === "1_min") {
            getMyHistory(1)
        } else if (key === "3_min") {
            getMyHistory(3)
        } else if (key === "5_min") {
            getMyHistory(5)
        } else if (key === "10_min") {
            getMyHistory(10)
        }

    };


    useEffect(() => {
        console.log("MyHistory ===> ", myHistoryData)
        if (myHistoryData != null && myHistoryData.status === 1) {
            setMyBetData(myHistoryData.data);
        }
    }, [myHistoryData])

    const getBetValue = (item) => {
        if (item.betType === 1) {
            return item.betNumber;
        } else if (item.betType === 2) {
            return "";
        } else {
            return item.type === 1 ? "Big" : "Small";
        }
    };
    const getBGColor = (index) => {
        if (myBetData.length > 0) {
            if (myBetData[index].betType === 2) {
                return myBetData[index].color === 1
                    ? "green"
                    : myBetData[index].color === 2
                        ? "violet"
                        : "red";
            } else if (myBetData[index].betType === 1) {
                return myBetData[index].betNumber === 1 ||
                    myBetData[index].betNumber === 3 ||
                    myBetData[index].betNumber === 7 ||
                    myBetData[index].betNumber === 9
                    ? "green"
                    : myBetData[index].betNumber === 2 ||
                        myBetData[index].betNumber === 4 ||
                        myBetData[index].betNumber === 6 ||
                        myBetData[index].betNumber === 8
                        ? "red"
                        : "violet";
            } else {
                return myBetData[index].type === 1 ? "violet" : "white";
            }
        }
    };

    const getFormattedDate = (utcDate) => {
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
            <div className="bet_history">
                <div className="header_bet_history">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="bets">
                            <h4>Bet History</h4>
                        </div>
                    </div>


                    <div className='tab_btn'>
                        <button type='button' onClick={() => setActiveKey(1)} style={{
                            color: activeKey === 1 ? "#0d6efd" : "#707070",
                            background: activeKey === 1 ? "#fff" : "#F7F8FF",
                        }}>1 Min</button>
                        <button type='button' onClick={() => setActiveKey(3)} style={{
                            color: activeKey === 3 ? "#0d6efd" : "#707070",
                            background: activeKey === 3 ? "#fff" : "#F7F8FF",
                        }}>3 Min</button>
                        <button type='button' onClick={() => setActiveKey(5)} style={{
                            color: activeKey === 5 ? "#0d6efd" : "#707070",
                            background: activeKey === 5 ? "#fff" : "#F7F8FF",
                        }}>5 Min</button>
                        <button type='button' onClick={() => setActiveKey(10)} style={{
                            color: activeKey === 10 ? "#0d6efd" : "#707070",
                            background: activeKey === 10 ? "#fff" : "#F7F8FF",
                        }}>10 Min</button>
                    </div>

                    <div className='bet_history_section'>
                        <p>Bet History</p>
                        <div className="history_table">
                            {myBetData.length > 0 &&
                                myBetData.map((item, index) => (
                                    <div className="table_div">
                                        <div className="big_id">
                                            <div
                                                className="bg_primary"
                                                style={{
                                                    height: 40,
                                                    width: 40,
                                                    fontSize: getBetValue(item).length > 1 ? 10 : 20,
                                                    backgroundColor:
                                                        getBGColor(index) === "green"
                                                            ? myColors.green_color
                                                            : getBGColor(index) === "red"
                                                                ? myColors.red_color
                                                                : getBGColor(index) === "violet"
                                                                    ? myColors.primaryColor
                                                                    : myColors.txtWhite,
                                                    color:
                                                        getBGColor(index) === "white"
                                                            ? myColors.primaryColor
                                                            : myColors.txtWhite,
                                                }}
                                            >
                                                {getBetValue(item)}
                                            </div>
                                            <div className="id_date_number">
                                                <div className="id_number">{item.gameId}</div>
                                                <div className="date">
                                                    {getFormattedDate(item.createdAt)}
                                                </div>
                                            </div>
                                        </div>
                                        {item.isCompleted === 1 && (
                                            <div className="win_loss">
                                                {item.isWon === 0 ? (
                                                    <div className="failed">Failed</div>
                                                ) : (
                                                    <div className="succeed">Success</div>
                                                )}

                                                <div className={item.isWon === 0 ? "loss" : "win"}>
                                                    {item.isWon === 0
                                                        ? item.finalAmount
                                                        : item.winningAmount}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>

                    <PaginationComponent
                        skip={skip}
                        setSkip={setSkip}
                    />
                </div>
            </div>
        </>
    )
}

export default BetHistory;