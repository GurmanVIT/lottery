import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import { socket } from "../Lottery";
import { myColors } from "../../../utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import { myHistory } from "../../../redux/myHistorySlice";
import moment from "moment-timezone";
import red_voilet from "../../../assets/img/red_voilet.svg";
import red from "../../../assets/img/red.svg";
import green from "../../../assets/img/green.svg";
import green_voilet from "../../../assets/img/green_voilet.svg";
import { useNavigate } from "react-router";
import no_data from "../../../assets/img/no_data.svg";

const Tab_screen = ({
  resultHistoryData,
  setHistoryData,
  skip,
  setSkip,
  gameType,
  onResult,
  pageCount,
  setPageCount,
  walletBalance,
  setActiveKey,
  activeKey
}) => {
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  })

  const myHistoryData = useSelector((state) => state.myHistoryReducer.data);


  const [myBetData, setMyBetData] = useState([]);
  useEffect(() => {
    socket.on("gameResult", (data) => {
      if (gameType === 1) {
        if (activeKey === "game_history") {
          if (resultHistoryData != null) {
            // const addedData = resultHistoryData.reverse();
            // addedData.pop();
            const newArray = (addedData) => {
              const updatedArray = addedData.slice(0, -1);
              return [data, ...updatedArray];
            };
            setHistoryData(newArray);
          }
        }
      }
    });
    socket.on("gameResultThree", (data) => {
      if (gameType === 3) {
        if (activeKey === "game_history") {
          if (resultHistoryData != null) {
            // const addedData = resultHistoryData.reverse();
            // addedData.pop();
            const newArray = (addedData) => {
              const updatedArray = addedData.slice(0, -1);
              return [data, ...updatedArray];
            };
            setHistoryData(newArray);
          }
        }
      }
    });
    socket.on("gameResultFive", (data) => {

      if (gameType === 5) {
        if (activeKey === "game_history") {
          if (resultHistoryData != null) {
            // const addedData = resultHistoryData.reverse();
            // addedData.pop();
            const newArray = (addedData) => {
              const updatedArray = addedData.slice(0, -1);
              return [data, ...updatedArray];
            };
            setHistoryData(newArray);
          }
        }
      }
    });
    socket.on("gameResultTen", (data) => {

      if (gameType === 10) {
        if (activeKey === "game_history") {
          if (resultHistoryData != null) {
            // const addedData = resultHistoryData.reverse();
            // addedData.pop();
            const newArray = (addedData) => {
              const updatedArray = addedData.slice(0, -1);
              return [data, ...updatedArray];
            };
            setHistoryData(newArray);
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    getMyHistory();
  }, [skip, gameType, onResult, walletBalance]);

  const getMyHistory = () => {
    const payload = {
      skip: skip,
      limit: 10,
      type: gameType,
    };
    dispatch(myHistory(payload));
  };

  const handleSelect = (key) => {
    // Additional actions based on the clicked tab
    setSkip(0);
    if (key === "my_history") {
      getMyHistory();
    }
    setActiveKey(key);
  };
  useEffect(() => {
    if (myHistoryData != null && myHistoryData.status === 1) {
      setMyBetData(myHistoryData.data);
      if (activeKey === "my_history")
        setPageCount(Math.floor(myHistoryData.count / 10))
    }
  }, [myHistoryData]);

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
          : myBetData[index].color === 3
            ? "red"
            : "violet";
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

  return (
    <>
      <div className="tab_screen">
        <Tabs
          id="uncontrolled-tab-example"
          className="mb-3"
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Tab eventKey="game_history" title="Game History">
            <Table>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Number </th>
                  <th>Big Small</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                {resultHistoryData.length > 0 &&
                  resultHistoryData.map((item) => (
                    <tr>
                      <td>{item.gameId}</td>
                      <td>{item.result.betNumber}</td>
                      <td>{item.result.type === 1 ? "Big" : "Small"}</td>
                      <td>
                        {item.result.color === 1 ? (
                          <img src={green} alt="green" />
                        ) : item.result.color === 12 ? (
                          <img src={green_voilet} alt="green_voilet" />
                        ) : item.result.color === 23 ? (
                          <img src={red_voilet} alt="red_violet" />
                        ) : (
                          <img src={red} alt="red" />
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            {/* <PaginationComponent
            skip={skip}
            setSkip={setSkip}
            getGameHistory={getGameHistory}
            pageCount={pageCount}
            /> */}
          </Tab>

          <Tab eventKey="chart" title="Chart">
            <div className="chart_table">
              <div className="table_head">
                <h5>Period</h5>
                <h4>Number</h4>
              </div>

              <div className="history_table">
                <div className="secound_table_sec">
                  <div className="statistic">
                    <h6>Statistic (Last 100 Periods)</h6>
                  </div>
                  <div className="flex_winning_number">
                    <div className="win_number_one">Winning number</div>
                    <div className="d-flex">
                      <p className="table_number_sec">0</p>
                      <p className="table_number_sec">1</p>
                      <p className="table_number_sec">2</p>
                      <p className="table_number_sec">3</p>
                      <p className="table_number_sec">4</p>
                      <p className="table_number_sec">5</p>
                      <p className="table_number_sec">6</p>
                      <p className="table_number_sec">7</p>
                      <p className="table_number_sec">8</p>
                      <p className="table_number_sec">9</p>
                    </div>
                  </div>

                  <div className="flex_winning_number">
                    <div className="win_number_one">Missing</div>
                    <div className="missing">
                      <p className="table_selected_number">22</p>
                      <p className="table_selected_number">25</p>
                      <p className="table_selected_number">2</p>
                      <p className="table_selected_number">36</p>
                      <p className="table_selected_number">8</p>
                      <p className="table_selected_number">18</p>
                      <p className="table_selected_number">9</p>
                      <p className="table_selected_number">11</p>
                      <p className="table_selected_number">36</p>
                      <p className="table_selected_number">8</p>
                    </div>
                  </div>

                  <div className="flex_winning_number">
                    <div className="win_number_one">Avg missing</div>
                    <div className="missing">
                      <p className="table_selected_number">3</p>
                      <p className="table_selected_number">1</p>
                      <p className="table_selected_number">8</p>
                      <p className="table_selected_number">16</p>
                      <p className="table_selected_number">19</p>
                      <p className="table_selected_number">9</p>
                      <p className="table_selected_number">13</p>
                      <p className="table_selected_number">1</p>
                      <p className="table_selected_number">5</p>
                      <p className="table_selected_number">2</p>
                    </div>
                  </div>

                  <div className="flex_winning_number">
                    <div className="win_number_one">Frequency</div>
                    <div className="missing">
                      <p className="table_selected_number">14</p>
                      <p className="table_selected_number">6</p>
                      <p className="table_selected_number">8</p>
                      <p className="table_selected_number">3</p>
                      <p className="table_selected_number">11</p>
                      <p className="table_selected_number">8</p>
                      <p className="table_selected_number">6</p>
                      <p className="table_selected_number">15</p>
                      <p className="table_selected_number">6</p>
                      <p className="table_selected_number">14</p>
                    </div>
                  </div>

                  <div className="flex_winning_number">
                    <div className="win_number_one">Max consecutive</div>
                    <div className="missing">
                      <p className="table_selected_number">1</p>
                      <p className="table_selected_number">1</p>
                      <p className="table_selected_number">2</p>
                      <p className="table_selected_number">1</p>
                      <p className="table_selected_number">1</p>
                      <p className="table_selected_number">2</p>
                      <p className="table_selected_number">1</p>
                      <p className="table_selected_number">2</p>
                      <p className="table_selected_number">2</p>
                      <p className="table_selected_number">1</p>
                    </div>
                  </div>
                </div>

                {resultHistoryData.length > 0 &&
                  resultHistoryData.map((item) => (
                    <div className="result_row">
                      <div className="issue_number">{item.gameId}</div>
                      <div className="result_number">

                        <div className="d-flex">
                          <p className={item.result.betNumber == 0 ? "result_big_small" : "table_number_sec"}>0</p>
                          <p className={item.result.betNumber == 1 ? "result_big_small" : "table_number_sec"}>1</p>
                          <p className={item.result.betNumber == 2 ? "result_big_small" : "table_number_sec"}>2</p>
                          <p className={item.result.betNumber == 3 ? "result_big_small" : "table_number_sec"}>3</p>
                          <p className={item.result.betNumber == 4 ? "result_big_small" : "table_number_sec"}>4</p>
                          <p className={item.result.betNumber == 5 ? "result_big_small" : "table_number_sec"}>5</p>
                          <p className={item.result.betNumber == 6 ? "result_big_small" : "table_number_sec"}>6</p>
                          <p className={item.result.betNumber == 7 ? "result_big_small" : "table_number_sec"}>7</p>
                          <p className={item.result.betNumber == 8 ? "result_big_small" : "table_number_sec"}>8</p>
                          <p className={item.result.betNumber == 9 ? "result_big_small" : "table_number_sec"}>9</p>
                        </div>

                        <div className="result_big_small">
                          <p>{item.result.type === 1 ? "B" : "S"}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Tab>

          <Tab eventKey="my_history" title="My History">
            <div className="history_table">
              {myBetData.length > 0 ?


                myBetData.length > 0 && (
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
                  ))

                ) : (
                  <div className='no_data_img' style={{ display: "flex", height: "50vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <div><img src={no_data} alt='no_data' width={120} /></div>
                    <p style={{ fontSize: "14px", color: "gray", marginRight: "20px" }}>No Data Found</p>
                  </div>
                )}
            </div>

            {/* <PaginationComponent /> */}
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Tab_screen;
