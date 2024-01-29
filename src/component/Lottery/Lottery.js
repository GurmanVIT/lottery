import React, { useEffect, useState } from "react";
import back from "../../assets/img/back.svg";
import { Link } from "react-router-dom";
import DG from "../../assets/img/DG.svg";
import music from "../../assets/img/music.svg";
import headphone from "../../assets/img/headphone.svg";
import refresh from "../../assets/img/refresh.svg";
import flat from "../../assets/img/Flat.svg";
import watch from "../../assets/img/watch.svg";
import coin_1 from "../../assets/img/coin_1.svg";
import coin_2 from "../../assets/img/coin_2.svg";
import coin_3 from "../../assets/img/coin_3.svg";
import coin_5 from "../../assets/img/coin_5.svg";
import first from "../../assets/img/first.svg";
import secound from "../../assets/img/secound.svg";
import third from "../../assets/img/third.svg";
import fifth from "../../assets/img/fifth.svg";
import BigSmall from "./BigSmall/BigSmall";
import Tab_screen from "./Tabs/Tab_screen";
import io from "socket.io-client";
import ModalBottom from "./BigSmall/OffCanvas/ModalBottom";
import { myColors } from "../../utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import { gameHistory } from "../../redux/gameHistorySlice";

const socket = io("https://dapic-api.virtualittechnology.com/");

const Lottery = () => {
  const userId = localStorage.getItem("userId");
  const [isSocketConnected, setSocketConnected] = useState(false);
  const [gameId, setGameId] = useState("");

  const [gameTimer, setGamerTimer] = useState(0);
  const [skip, setSkip] = useState(0);

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedX, setSelectedX] = useState(1);
  const [winToGoTime, setWinToGoTime] = useState(1);
  const [balanceValue, setBalanceValue] = useState(1);

  const [isOpenModal, setOpenModal] = useState(false);
  const [historyData, setHistoryData] = useState(null);

  const gameHistoryData = useSelector((state) => state.gameHistoryReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      skip: skip,
      limit: 10,
    };

    console.log("History Payload ===> ", payload);

    dispatch(gameHistory(payload));
  }, [skip]);

  useEffect(() => {
    if (gameHistoryData != null && gameHistoryData.status === 1) {
      setHistoryData(gameHistoryData.data);
    }
  }, [gameHistoryData]);

  useEffect(() => {
    // Establish a connection to the Socket.io server

    // Define event handlers for the socket
    if (!isSocketConnected) {
      console.log("Socket connected check ===> ", isSocketConnected);
      function onConnect() {
        setSocketConnected(true);
      }

      function onDisconnect() {
        setSocketConnected(false);
      }
      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);

      const data = {
        userId: userId,
      };

      socket.emit("touch_server", data);

      socket.on("timerForward", (data) => {
        console.log("Timer", data.gameTimer);
        setGamerTimer(data.gameTimer);
        const minutes = Math.floor(data.gameTimer / 60);
        const second = data.gameTimer - minutes * 60;
        if (gameId.length === 0) {
          setGameId(data.gameId);
        }
        // const secondSplit = splitIntoArray(second)[0];
        // console.log("Timer", secondSplit);
      });

      socket.on("gameResult", (data) => {
        console.log("Game Result ===> ", data);
      });

      socket.on("less_wallet_points", (data) => {
        console.log("less_wallet_points ===> ", data);
        alert("Low Balance");
      });

      // Clean up the socket connection when the component unmounts
      return () => {
        console.log("Disconnected ===> ");
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
        socket.off("timerForward");
        socket.off("gameResult");
        socket.off("less_wallet_points");
      };
    }
  }, []);

  function splitIntoArray(num) {
    return Array.from(String(num), Number);
  }

  const placeBet = () => {
    if (
      selectedValue === "Violet" ||
      selectedValue === "Green" ||
      selectedValue === "Red"
    ) {
      const betData = {
        userId: userId,
        amount: balanceValue * selectedX,
        multiplier: selectedX,
        color:
          selectedValue === "green" ? 1 : selectedValue === "Violet" ? 2 : 3,
        gameId: gameId,
      };
      console.log("Bet Data ===> ", betData);
      socket.emit("bet_place", betData);
    } else if (selectedValue === "Big" || selectedValue === "Small") {
      const betData = {
        userId: userId,
        amount: balanceValue * selectedX,
        multiplier: selectedX,
        type: selectedValue === "Big" ? 1 : 2,
        gameId: gameId,
      };
      console.log("Bet Data ===> ", betData);
      socket.emit("bet_place", betData);
    } else {
      const betData = {
        userId: userId,
        amount: balanceValue * selectedX,
        multiplier: selectedX,
        betNumber: selectedValue,
        gameId: gameId,
      };
      console.log("Bet Data ===> ", betData);
      socket.emit("bet_place", betData);
    }

    setOpenModal(false);
  };

  return (
    <div className="lottery_page">
      <div className="lottery">
        <div className="header_flex">
          <div className="back_img">
            <Link to="/Home_page">
              <img src={back} alt="back" />
            </Link>
          </div>
          <div className="dapic_game_img">
            <img src={DG} alt="DG" />
          </div>
          <div className="music_headphone">
            <div className="music">
              <img src={music} alt="music" />
            </div>
            <div className="headphone">
              <img src={headphone} alt="headphone" />
            </div>
          </div>
        </div>
        <div className="dapic_header"></div>
        <div className="secound_sec">
          <div className="card">
            <div className="refresh">
              <img src={refresh} alt="refresh" />
            </div>
            <h1>₹0.00</h1>
            <div className="img_content">
              <img src={flat} alt="flat" />
              <h4>Wallet Balance</h4>
            </div>
            <div className="btn_flex">
              <div className="withdraw_btn">
                <button>Withdraw</button>
              </div>
              <div className="deposit_btn">
                <button>Deposit</button>
              </div>
            </div>
          </div>

          <div className="watch_flex_card">
            <div
              className={winToGoTime === 1 ? "watch_active" : "watch"}
              onClick={() => {
                setWinToGoTime(1);
              }}
            >
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 1 min</h5>
              </div>
            </div>
            <div
              className={winToGoTime === 3 ? "watch_active" : "watch"}
              onClick={() => {
                setWinToGoTime(3);
              }}
            >
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 3 min</h5>
              </div>
            </div>
            <div
              className={winToGoTime === 5 ? "watch_active" : "watch"}
              onClick={() => {
                setWinToGoTime(5);
              }}
            >
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 5 min</h5>
              </div>
            </div>
            <div
              className={winToGoTime === 10 ? "watch_active" : "watch"}
              onClick={() => {
                setWinToGoTime(10);
              }}
            >
              <div className="text-center p-1">
                <img src={watch} alt="watch" />
                <h5>Win Go 10 min</h5>
              </div>
            </div>
          </div>

          <div className="mixing_card">
            <div className="win_card">
              <div className="win_number">
                <h3>Win Go 1 min</h3>
                <div className="coin_img">
                  <div className="text_move">
                    <img src={coin_1} alt="coin_1" />
                    <h6>1</h6>
                  </div>

                  <div className="text_move">
                    <img src={coin_2} alt="coin_2" />
                    <h6>2</h6>
                  </div>

                  <div className="text_move">
                    <img src={coin_3} alt="coin_3" />
                    <h6>3</h6>
                  </div>

                  <div className="text_move">
                    <img src={coin_2} alt="coin_2" />
                    <h6>4</h6>
                  </div>

                  <div className="text_move">
                    <img src={coin_5} alt="coin_1" />
                    <h6>5</h6>
                  </div>

                  <div className="text_move">
                    <img src={coin_3} alt="coin_3" />
                    <h6>6</h6>
                  </div>
                </div>
              </div>
              <div className="play">
                <button> HOW TO PLAY</button>
              </div>
            </div>
            <div className="timing">
              <h5>Time remaining </h5>
              <div className="d-flex justify-content-between align-items-center">
                <div className="remaining">
                  <div className="zero_number">0</div>
                  <div className="zero_number">
                    {Math.floor(gameTimer / 60)}
                  </div>
                  <div className="zero_number_bg">:</div>
                  <div className="zero_number">
                    {splitIntoArray(gameTimer - Math.floor(gameTimer / 60) * 60)
                      .length === 2
                      ? splitIntoArray(
                          gameTimer - Math.floor(gameTimer / 60) * 60
                        )[0]
                      : 0}
                  </div>
                  <div className="zero_number">
                    {splitIntoArray(gameTimer - Math.floor(gameTimer / 60) * 60)
                      .length > 1
                      ? splitIntoArray(
                          gameTimer - Math.floor(gameTimer / 60) * 60
                        )[1]
                      : splitIntoArray(
                          gameTimer - Math.floor(gameTimer / 60) * 60
                        )[0]}
                  </div>
                </div>
                <div className="text_number">{gameId}</div>
              </div>
            </div>
          </div>

          <div className="modal_number">
            <div className="color_btn">
              <button
                className="violet_btn"
                onClick={() => {
                  setSelectedValue("Violet");
                  setSelectedColor(myColors.primaryColor);
                  setOpenModal(true);
                }}
              >
                Violet
              </button>
              <button
                className="green_btn"
                onClick={() => {
                  setSelectedValue("Green");
                  setSelectedColor(myColors.green_color);
                  setOpenModal(true);
                }}
              >
                Green
              </button>
              <button
                className="red_btn"
                onClick={() => {
                  setSelectedValue("Red");
                  setSelectedColor(myColors.red_color);
                  setOpenModal(true);
                }}
              >
                Red
              </button>
            </div>
            <div className="select_coin">
              <div className="ten_coin">
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedValue("0");
                    setSelectedColor(myColors.primaryColor);
                    setOpenModal(true);
                  }}
                >
                  <img src={first} alt="first" />
                  <h4>0</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedValue("1");
                    setSelectedColor(myColors.green_color);
                    setOpenModal(true);
                  }}
                >
                  <img src={secound} alt="secound" />
                  <h4>1</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedValue("2");
                    setSelectedColor(myColors.red_color);
                    setOpenModal(true);
                  }}
                >
                  <img src={third} alt="third" />
                  <h4>2</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedValue("3");
                    setSelectedColor(myColors.green_color);
                    setOpenModal(true);
                  }}
                >
                  <img src={secound} alt="secound" />
                  <h4>3</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedValue("4");
                    setSelectedColor(myColors.red_color);
                    setOpenModal(true);
                  }}
                >
                  <img src={third} alt="third" />
                  <h4>4</h4>
                </div>
              </div>
              <div className="ten_coin">
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedValue("5");
                    setSelectedColor(myColors.primaryColor);
                    setOpenModal(true);
                  }}
                >
                  <img src={fifth} alt="fitfh" />
                  <h4>5</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedColor(myColors.red_color);
                    setSelectedValue("6");
                    setOpenModal(true);
                  }}
                >
                  <img src={third} alt="third" />
                  <h4>6</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedColor(myColors.green_color);
                    setSelectedValue("7");
                    setOpenModal(true);
                  }}
                >
                  <img src={secound} alt="secound" />
                  <h4>7</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedColor(myColors.red_color);
                    setSelectedValue("8");

                    setOpenModal(true);
                  }}
                >
                  <img src={third} alt="third" />
                  <h4>8</h4>
                </div>
                <div
                  className="first_line"
                  onClick={() => {
                    setSelectedColor(myColors.green_color);
                    setSelectedValue("9");

                    setOpenModal(true);
                  }}
                >
                  <img src={secound} alt="secound" />
                  <h4>9</h4>
                </div>
              </div>
            </div>
            <div className="flex_seven_btn">
              <button className="secound_violet">Random</button>
              <button
                className="x_two_btn"
                style={{
                  color: selectedX === 1 ? "white" : "#707070",
                  background: selectedX === 1 ? "#00C738" : "#E4E4E4",
                }}
                onClick={() => setSelectedX(1)}
              >
                X1
              </button>
              <button
                className="x_two_btn"
                style={{
                  color: selectedX === 5 ? "white" : "#707070",
                  background: selectedX === 5 ? "#00C738" : "#E4E4E4",
                }}
                onClick={() => setSelectedX(5)}
              >
                X5
              </button>
              <button
                className="x_two_btn"
                style={{
                  color: selectedX === 10 ? "white" : "#707070",
                  background: selectedX === 10 ? "#00C738" : "#E4E4E4",
                }}
                onClick={() => setSelectedX(10)}
              >
                X10
              </button>
              <button
                className="x_two_btn"
                style={{
                  color: selectedX === 20 ? "white" : "#707070",
                  background: selectedX === 20 ? "#00C738" : "#E4E4E4",
                }}
                onClick={() => setSelectedX(20)}
              >
                X20
              </button>
              <button
                className="x_two_btn"
                style={{
                  color: selectedX === 50 ? "white" : "#707070",
                  background: selectedX === 50 ? "#00C738" : "#E4E4E4",
                }}
                onClick={() => setSelectedX(50)}
              >
                X50
              </button>
              <button
                className="x_two_btn"
                style={{
                  color: selectedX === 100 ? "white" : "#707070",
                  background: selectedX === 100 ? "#00C738" : "#E4E4E4",
                }}
                onClick={() => setSelectedX(100)}
              >
                X100
              </button>
            </div>
            {/* <div onClick={() => setOpenModal(true)}> */}

            <BigSmall
              openModal={setOpenModal}
              setSelectedValue={setSelectedValue}
              setSelectedColor={setSelectedColor}
            />
            {/* </div> */}
          </div>

          <Tab_screen resultHistoryData={historyData} />
          <ModalBottom
            myColor={selectedColor}
            isOpenModal={isOpenModal}
            setOpenModal={setOpenModal}
            selectedValue={selectedValue}
            selectedX={selectedX}
            setSelectedX={setSelectedX}
            setBalance={setBalanceValue}
            balance={balanceValue}
            placeBet={placeBet}
          />
        </div>
      </div>
    </div>
  );
};

export default Lottery;
