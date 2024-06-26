import React, { useEffect, useState } from "react";
import back from "../../assets/img/back.svg";
import { Link, useNavigate } from "react-router-dom";
import DG from "../../assets/img/DG.svg";
import music from "../../assets/img/music.svg";
import headphone from "../../assets/img/headphone.svg";
import refresh from "../../assets/img/refresh.svg";
import flat from "../../assets/img/Flat.svg";
import watch from "../../assets/img/watch.svg";
import zero from "../../assets/img/zero.svg";
import first from "../../assets/img/first.svg";
import secound from "../../assets/img/secound.svg";
import third from "../../assets/img/third.svg";
import fourth from "../../assets/img/fourth.svg";
import fifth from "../../assets/img/fifth.svg";
import sixth from "../../assets/img/sixth.svg";
import seventh from "../../assets/img/seventh.svg";
import eight from "../../assets/img/eight.svg";
import nineth from "../../assets/img/nineth.svg";
import BigSmall from "./BigSmall/BigSmall";
import Tab_screen from "./Tabs/Tab_screen";
import io from "socket.io-client";
import ModalBottom from "./BigSmall/OffCanvas/ModalBottom";
import { myColors } from "../../utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import { gameHistory } from "../../redux/gameHistorySlice";
import PaginationComponent from "./Pagination/Pagination";
import audioFile from "../../assets/audio/five_sec.mp3";
import Modal from "react-modal";
import you_win from "../../assets/img/you_win.webp";
import close from "../../assets/img/close.svg";
import loss_img from "../../assets/img/loss_img.webp";
import { clearSignUpData } from "../../redux/signupSlice";
import { clearData } from "../../redux/loginSlice";
import { clearSponsorData } from "../../redux/checkSponsorIdSlice";
import { clearOtpData } from "../../redux/otpSlice";
import { clearResendData } from "../../redux/resendOtpSlice";
import { Toast } from "react-bootstrap";
import mark_ex from "../../assets/img/mark_ex.png";
import dollar_img from "../../assets/img/dollar_img.png";
import { profile } from "../../redux/profileSlice";
import { refferalDeposit } from "../../redux/refferalDepositSlice";
import { ClipLoader } from "react-spinners";

export const socket = io("https://dapic-api.virtualittechnology.com/");

const customStyles = {
  content: {
    top: "initial",
    left: "50%",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    transform: "translate(-50%, 0)",
    maxWidth: "100%",
    width: "420px",
    borderRadius: "5px",
    backgroundColor: "#74707008",
    borderRadius: "14px 14px 0 0",
  },
};

const modal_notifications = {
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
    borderRadius: "14px",
  },
};

const Lottery = () => {

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [isSocketConnected, setSocketConnected] = useState(false);
  const [gameId, setGameId] = useState("");
  const [gameTableId, setGameTableId] = useState("");
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [messageText, setMessageText] = useState("");

  const [gameTimer, setGamerTimer] = useState(0);
  const [skip, setSkip] = useState(0);
  const [onResult, setResult] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedX, setSelectedX] = useState(1);
  const [winToGoTime, setWinToGoTime] = useState(1);
  const [balanceValue, setBalanceValue] = useState(1);

  const [isOpenModal, setOpenModal] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [walletBalance, setWalletBalance] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWinOpen, setWinOpen] = useState(false);
  const [losePoints, setLosePoints] = useState(0);
  const [winPoints, setWinPoints] = useState(0);
  const [isLoseOpen, setLoseOpen] = useState(false);
  const [gameType, setGameType] = useState(1);
  const [activeKey, setActiveKey] = useState("game_history");

  const navigator = useNavigate();

  const [isOpenPlay, setOpenPlay] = useState(false);

  const openPlayModal = () => {
    setOpenPlay(true);
  };

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const navigation = useNavigate();

  const gameHistoryData = useSelector((state) => state.gameHistoryReducer.data);

  const profileResponse = useSelector((state) => state.profileReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      skip: skip,
      limit: 10,
      type: gameType,
    };

    dispatch(gameHistory(payload));
  }, [skip]);

  useEffect(() => {
    if (gameHistoryData != null && gameHistoryData.status === 1) {
      const data = gameHistoryData.data;
      setHistoryData(data);
      if (activeKey === "game_history")
        setPageCount(Math.floor(gameHistoryData.count / 10));
    }
  }, [gameHistoryData]);

  const getGameHistory = () => {
    const payload = {
      skip: skip,
      limit: 10,
      type: gameType,
    };
    dispatch(gameHistory(payload));
  };

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigator("/login");
    }

    // Establish a connection to the Socket.io server

    // Define event handlers for the socket
    if (!isSocketConnected) {
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
        authorization: token,
      };

      socket.emit("touch_server", data);

      if (userId != null) {
        socket.emit("walletPoints", data);
      }
      socket.on("wallet_points", (data) => {
        setWalletBalance(data.walletPoints);

        setResult(!onResult);
      });

      socket.on("bet_placed", (data) => {
        setWalletBalance(data.walletPoints);
        setResult(!onResult);
      });

      socket.on("less_wallet_points", (data) => {
        alert("Low Balance");
      });

      socket.on("token_expired", (data) => {
        localStorage.clear();
        dispatch(clearSignUpData());
        dispatch(clearData());
        dispatch(clearSponsorData());
        dispatch(clearOtpData());
        dispatch(clearResendData());

        setTimeout(() => {
          navigation("/login");
        }, 500);
      });

      socket.on("winner", (data) => {
        // if (gameType === 1) {
        setWinOpen(true);
        setResult(!onResult);
        setWinPoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });
      socket.on("winnerThree", (data) => {
        // if (gameType === 3) {
        setWinOpen(true);
        setResult(!onResult);
        setWinPoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });
      socket.on("winnerFive", (data) => {
        // if (gameType === 5) {
        setWinOpen(true);
        setResult(!onResult);
        setWinPoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });
      socket.on("winnerTen", (data) => {
        // if (gameType === 10) {
        setWinOpen(true);
        setResult(!onResult);
        setWinPoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });
      socket.on("looser", (data) => {
        // if (gameType === 1) {
        setLoseOpen(true);
        setResult(!onResult);
        setLosePoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });
      socket.on("looserThree", (data) => {
        // if (gameType === 3) {
        setLoseOpen(true);
        setResult(!onResult);
        setLosePoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });
      socket.on("looserFive", (data) => {
        // if (gameType === 5) {
        setLoseOpen(true);
        setResult(!onResult);
        setLosePoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });
      socket.on("looserTen", (data) => {
        // if (gameType === 10) {
        setLoseOpen(true);
        setResult(!onResult);
        setLosePoints(data.winningAmount);
        setWalletBalance(data.walletPoints);

        // }
      });

      // Clean up the socket connection when the component unmounts
      return () => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
        socket.off("timerForward");
        socket.off("timerForwardThree");
        socket.off("timerForwardFive");
        socket.off("timerForwardTen");
        socket.off("gameResult");
        socket.off("less_wallet_points");
        socket.off("bet_placed");
        socket.off("winner");
        socket.off("winnerThree");
        socket.off("winnerFive");
        socket.off("winnerTen");
        socket.off("looser");
        socket.off("looserThree");
        socket.off("looserFive");
        socket.off("looserTen");
        socket.off("dummyText");
        socket.off("touch_server");
        socket.off("token_expired");
        socket.off("gameResult");
        socket.off("gameResultThree");
        socket.off("gameResultFive");
        socket.off("gameResultTen");
      };
    }
  }, []);

  useEffect(() => {
    socket.on("timerForward", (data) => {
      if (gameType === 1) {
        setGamerTimer(data.gameTimer);
        const minutes = Math.floor(data.gameTimer / 60);
        const second = data.gameTimer - minutes * 60;
        if (gameId.length === 0 || data.gameTimer === 58) {
          setGameId(data.gameId);
          setGameTableId(data.gameTableId);
        }

        if (second < 7) {
          setIsPlaying(true);
        } else if (data.gameTimer === 1) {
          setIsPlaying(false);
        }
      }
    });

    socket.on("timerForwardThree", (data) => {
      if (gameType === 3) {
        setGamerTimer(data.gameTimer);
        const minutes = Math.floor(data.gameTimer / 60);
        const second = data.gameTimer - minutes * 60;
        if (gameId.length === 0 || data.gameTimer === 178) {
          setGameId(data.gameId);
          setGameTableId(data.gameTableId);
        }

        if (second < 7) {
          setIsPlaying(true);
        } else if (data.gameTimer === 1) {
          setIsPlaying(false);
        }
      }
    });

    socket.on("timerForwardFive", (data) => {
      if (gameType === 5) {
        setGamerTimer(data.gameTimer);
        const minutes = Math.floor(data.gameTimer / 60);
        const second = data.gameTimer - minutes * 60;
        if (gameId.length === 0 || data.gameTimer === 178) {
          setGameId(data.gameId);
          setGameTableId(data.gameTableId);
        }

        if (second < 7) {
          setIsPlaying(true);
        } else if (data.gameTimer === 1) {
          setIsPlaying(false);
        }
      }
    });

    socket.on("timerForwardTen", (data) => {
      if (gameType === 10) {
        setGamerTimer(data.gameTimer);
        const minutes = Math.floor(data.gameTimer / 60);
        const second = data.gameTimer - minutes * 60;
        if (gameId.length === 0 || data.gameTimer === 598) {
          setGameId(data.gameId);
          setGameTableId(data.gameTableId);
        }

        if (second < 7) {
          setIsPlaying(true);
        } else if (data.gameTimer === 1) {
          setIsPlaying(false);
        }
      }
    });

    socket.on("dummyText", (data) => {
      setMessageText(data.text);
      setShow(true);
    });

    getGameHistory();
    return () => {
      socket.off("timerForward");
      socket.off("timerForwardThree");
      socket.off("timerForwardFive");
      socket.off("timerForwardTen");
      socket.off("dummyText");
    };
  }, [gameType]);

  const selectTime = (time) => {
    setGameId("");
    socket.off("timerForward");
    socket.off("timerForwardThree");
    socket.off("timerForwardFive");
    socket.off("timerForwardTen");
    // socket.off("winner");
    // socket.off("winnerThree");
    // socket.off("winnerFive");
    // socket.off("winnerTen");
    // socket.off("looser");
    // socket.off("looserThree");
    // socket.off("looserFive");
    // socket.off("looserTen");

    setGameType(time);
  };

  function splitIntoArray(num) {
    return Array.from(String(num), Number);
  }

  const betToast = () => {
    setShowToastLottery(true);
    setTimeout(() => {
      setShowToastLottery(false);
    }, 500);
  };

  const placeBet = () => {
    if (selectedX > 0) {
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
            selectedValue === "Green" ? 1 : selectedValue === "Violet" ? 2 : 3,
          gameId: gameId,
          gameTableId: gameTableId,
          gameType: gameType,
          authorization: token,
        };

        socket.emit("bet_place", betData);
      } else if (selectedValue === "Big" || selectedValue === "Small") {
        const betData = {
          userId: userId,
          amount: balanceValue * selectedX,
          multiplier: selectedX,
          type: selectedValue === "Big" ? 1 : 2,
          gameId: gameId,
          gameTableId: gameTableId,
          gameType: gameType,
          authorization: token,
        };
        socket.emit("bet_place", betData);
      } else {
        const betData = {
          userId: userId,
          amount: balanceValue * selectedX,
          multiplier: selectedX,
          betNumber: selectedValue,
          gameId: gameId,
          gameTableId: gameTableId,
          gameType: gameType,
          authorization: token,
        };
        socket.emit("bet_place", betData);
      }

      setOpenModal(false);

      betToast(false);

    } else {
      setOpenModal(false);

      betToast();
    }
  };

  const refreshDataT = () => {
    setWalletBalance(null);
    dispatch(profile());
    dispatch(refferalDeposit());
  };

  useEffect(() => {
    if (profileResponse != null && profileResponse.status === 1) {
      setWalletBalance(profileResponse.data.walletPoints);
    }
  }, [profileResponse]);


  const refreshDataImg = () => {
    dispatch(profile());
    dispatch(refferalDeposit());
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };


  const [showToastLottery, setShowToastLottery] = useState(false);

  return (
    <div className="lottery_page">
      <div className="lottery" style={{ backgroundColor: "#f7f8ff" }}>
        <div className="header_flex">

          {/* <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={2000}
            autohide
            style={{ width: "68%", marginLeft: 36, marginTop: 10 }}
          >
            <Toast.Body>
              <img src={mark_ex} alt="mark_ex" />
              {messageText}
            </Toast.Body>
          </Toast> */}
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
          <Toast
            onClose={() => setShowToast(true)}
            show={showToast}
            style={{ width: "170px", position: "absolute", top: "-5%", left: "28.6%", zIndex: "1", backgroundColor: "#000000c9", transition: "all .3s linear", borderRadius: "10px" }}
          >
            <Toast.Body>
              <p style={{ color: "#fff", fontSize: "13px", fontWeight: "600", textAlign: "center", marginBottom: "0" }}>refresh successfully</p>
            </Toast.Body>
          </Toast>
          <div className="card">
            <div className="refresh_tag">
              <h1>
                <img
                  src={dollar_img}
                  alt="dollar_img"
                  style={{
                    width: "28px",
                    marginBottom: "3px",
                    marginRight: "3px",
                  }}
                />
                <span>{walletBalance}</span>
              </h1>
              <img src={refresh} alt="refresh" onClick={() => refreshDataImg()} className="refresh_imgs" />
            </div>


            <div className="img_content">
              <img src={flat} alt="flat" />
              <h4>Wallet Balance</h4>
            </div>
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

          <Toast
            // onClose={() => setShow(false)}
            // show={show}
            // delay={2000}
            // autohide
            style={{ width: "68%", marginLeft: 36, marginTop: 10 }}
            className="toast_card_bottom"
          >
            <Toast.Body className="toast_body">
              <img src={mark_ex} alt="mark_ex" />
              {messageText}
            </Toast.Body>
          </Toast>

          <div className="watch_flex_card">
            <div
              className={gameType === 1 ? "watch_active" : "watch"}
              onClick={() => selectTime(1)}
            >
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 1 min</h5>
              </div>
            </div>
            <div
              className={gameType === 3 ? "watch_active" : "watch"}
              onClick={() => selectTime(3)}
            >
              <div className={"text-center p-2"}>
                <img src={watch} alt="watch" />
                <h5>Win Go 3 min</h5>
              </div>
            </div>
            <div
              className={gameType === 5 ? "watch_active" : "watch"}
              onClick={() => selectTime(5)}
            >
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 5 min</h5>
              </div>
            </div>
            <div
              className={gameType === 10 ? "watch_active" : "watch"}
              onClick={() => selectTime(10)}
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
                <h3>Win Go {gameType} min</h3>
                <div className="coin_img">
                  <div className="text_move">
                    <img src={zero} alt="zero" />
                  </div>

                  <div className="text_move">
                    <img src={first} alt="first" />
                  </div>

                  <div className="text_move">
                    <img src={secound} alt="secound" />
                  </div>

                  <div className="text_move">
                    <img src={third} alt="third" />
                  </div>

                  <div className="text_move">
                    <img src={fourth} alt="fourth" />
                  </div>

                  <div className="text_move">
                    <img src={fifth} alt="fifth" />
                  </div>
                </div>
              </div>
              <div className="play">
                <button type="button" onClick={() => openPlayModal()}>
                  {" "}
                  HOW TO PLAY
                </button>
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
            {gameTimer < 6 && (
              <div className="sec_number">
                <h1>
                  <span>0</span>
                  <span className="five_sec">{gameTimer}</span>
                </h1>
                <audio
                  src={audioFile}
                  autoPlay={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>
            )}
            <div className="bg_dark">
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
                    <img src={zero} alt="zero" />
                  </div>

                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedValue("1");
                      setSelectedColor(myColors.green_color);
                      setOpenModal(true);
                    }}
                  >
                    <img src={first} alt="first" />
                  </div>

                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedValue("2");
                      setSelectedColor(myColors.red_color);
                      setOpenModal(true);
                    }}
                  >
                    <img src={secound} alt="secound" />
                  </div>

                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedValue("3");
                      setSelectedColor(myColors.green_color);
                      setOpenModal(true);
                    }}
                  >
                    <img src={third} alt="third" />
                  </div>
                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedValue("4");
                      setSelectedColor(myColors.red_color);
                      setOpenModal(true);
                    }}
                  >
                    <img src={fourth} alt="fourth" />
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
                  </div>
                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedColor(myColors.red_color);
                      setSelectedValue("6");
                      setOpenModal(true);
                    }}
                  >
                    <img src={sixth} alt="sixth" />
                  </div>

                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedColor(myColors.green_color);
                      setSelectedValue("7");
                      setOpenModal(true);
                    }}
                  >
                    <img src={seventh} alt="seventh" />
                  </div>

                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedColor(myColors.red_color);
                      setSelectedValue("8");

                      setOpenModal(true);
                    }}
                  >
                    <img src={eight} alt="eight" />
                  </div>

                  <div
                    className="first_line"
                    onClick={() => {
                      setSelectedColor(myColors.green_color);
                      setSelectedValue("9");

                      setOpenModal(true);
                    }}
                  >
                    <img src={nineth} alt="nineth" />
                  </div>
                </div>
              </div>
              <div className="flex_seven_btn">
                <button className="secound_violet">Random</button>
                <button
                  className="x_two_btn"
                  style={{
                    color: selectedX === 1 ? "white" : "#707070",
                    background: selectedX === 1 ? "#00C738" : "#ffffff8a",
                  }}
                  onClick={() => setSelectedX(1)}
                >
                  X1
                </button>
                <button
                  className="x_two_btn"
                  style={{
                    color: selectedX === 5 ? "white" : "#707070",
                    background: selectedX === 5 ? "#00C738" : "#ffffff8a",
                  }}
                  onClick={() => setSelectedX(5)}
                >
                  X5
                </button>
                <button
                  className="x_two_btn"
                  style={{
                    color: selectedX === 10 ? "white" : "#707070",
                    background: selectedX === 10 ? "#00C738" : "#ffffff8a",
                  }}
                  onClick={() => setSelectedX(10)}
                >
                  X10
                </button>
                <button
                  className="x_two_btn"
                  style={{
                    color: selectedX === 20 ? "white" : "#707070",
                    background: selectedX === 20 ? "#00C738" : "#ffffff8a",
                  }}
                  onClick={() => setSelectedX(20)}
                >
                  X20
                </button>
                <button
                  className="x_two_btn"
                  style={{
                    color: selectedX === 50 ? "white" : "#707070",
                    background: selectedX === 50 ? "#00C738" : "#ffffff8a",
                  }}
                  onClick={() => setSelectedX(50)}
                >
                  X50
                </button>
                <button
                  className="x_two_btn"
                  style={{
                    color: selectedX === 100 ? "white" : "#707070",
                    background: selectedX === 100 ? "#00C738" : "#ffffff8a",
                  }}
                  onClick={() => setSelectedX(100)}
                >
                  X100
                </button>
              </div>

              <BigSmall
                openModal={setOpenModal}
                setSelectedValue={setSelectedValue}
                setSelectedColor={setSelectedColor}
              />
            </div>
          </div>

          <Tab_screen
            resultHistoryData={historyData}
            setHistoryData={setHistoryData}
            skip={skip}
            setSkip={setSkip}
            gameType={gameType}
            onResult={onResult}
            pageCount={pageCount}
            setPageCount={setPageCount}
            walletBalance={walletBalance}
            setActiveKey={setActiveKey}
            activeKey={activeKey}
          />

          <PaginationComponent
            skip={skip}
            setSkip={setSkip}
            getGameHistory={getGameHistory}
            pageCount={pageCount}
          />

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
            betToast={betToast}
          />

          <Modal
            isOpen={isWinOpen}
            style={customStyles}
            onRequestClose={() => setWinOpen(false)}

          >
            <>
              <div className="you_win">
                <div className="winner_width">
                  <div className="winner_reward">
                    <div style={{ position: "relative" }}>
                      <img src={you_win} alt="you_win" className="win_img" onClick={() => setWinOpen(false)}
                      />
                      <h5>{winPoints}</h5>
                    </div>
                    {/* <div className="close_btn">
                      <img
                        src={close}
                        alt="close"
                        className="close_img"
                        onClick={() => setWinOpen(false)}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          </Modal>

          <Modal
            isOpen={isLoseOpen}
            style={customStyles}
            onRequestClose={() => setLoseOpen(false)}
          >
            <>
              <div className="you_loss">
                <div className="loss_width">
                  <div className="loss_reward">
                    <div style={{ position: "relative" }}>
                      <img src={loss_img} alt="loss_img" className="loss_img" onClick={() => setLoseOpen(false)}
                      />
                      <h5>{losePoints}</h5>
                    </div>
                    {/* <div className="close_btn">
                      <img
                        src={close}
                        alt="close"
                        className="close_img"
                        onClick={() => setLoseOpen(false)}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          </Modal>

          <Modal
            isOpen={isOpenPlay}
            style={modal_notifications}
            onRequestClose={() => setOpenPlay(false)}
          >
            <div className="how_play">
              <h3>How to play</h3>
              <div className="how_play_section">
                <div className="play_this">
                  <p>
                    In all game servers you can participate 5 second before
                    result.
                  </p>
                  <p>
                    in all the bets 2% will be deducted as tax i.e. your beting
                    amount is 100 DG coin your bet will be placed for 98 DG
                    coins and you will get winning amount according to that.
                  </p>
                  <p>
                    1. Select green: if the result shows 1,3,7,9 you will get
                    (98*2) 196;If the result shows 5, you will get (98*1.5) 147
                  </p>
                  <p>
                    2. Select red: if the result shows 2,4,6,8 you will get
                    (98*2) 196;If the result shows 0, you will get (98*1.5) 147
                  </p>
                  <p>
                    3. Select violet:if the result shows 0 or 5, you will get
                    (98*4.5) 441
                  </p>
                  <p>
                    4. Select number:if the result is the same as the number you
                    selected, you will get (98*9) 882
                  </p>
                  <p>
                    5. Select big: if the result shows 5,6,7,8,9 you will get
                    (98 * 2) 196
                  </p>
                  <p>
                    6. Select small: if the result shows 0,1,2,3,4 you will get
                    (98 * 2) 196
                  </p>
                </div>
              </div>

              <div className="clsoe_modal_btn">
                <button
                  className="close_btn"
                  onClick={() => setOpenPlay(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>

          <Toast
            onClose={() => setShowToastLottery(true)}
            show={showToastLottery}
            className="toast_refresh"
          >
            <Toast.Body className="toast_refresh_body">
              <p className="toast_refresh_content">bet successfully</p>
            </Toast.Body>
          </Toast>
        </div>
      </div>
    </div>
  );
};

export default Lottery;
