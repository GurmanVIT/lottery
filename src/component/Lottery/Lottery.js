import React, { useEffect } from "react";
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
import first from "../../assets/img/first.svg";
import secound from "../../assets/img/secound.svg";
import third from "../../assets/img/third.svg";
import io from "socket.io-client";
import { ApiBaseUrl } from "../../utils/Constants";

const Lottery = () => {
  const socket = io("https://dapic-api.virtualittechnology.com/");
  useEffect(() => {
    // Establish a connection to the Socket.io server

    // Define event handlers for the socket
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="lottery_page">
      <div className="lottery">
        <div className="dapic_header">
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
        </div>
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
            <div className="watch_active">
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 1 min</h5>
              </div>
            </div>
            <div className="watch">
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 3 min</h5>
              </div>
            </div>
            <div className="watch">
              <div className="text-center p-2">
                <img src={watch} alt="watch" />
                <h5>Win Go 5 min</h5>
              </div>
            </div>
            <div className="watch">
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
                    <img src={coin_1} alt="coin_1" />
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
                  <div className="zero_number">0</div>
                  <div className="zero_number_bg">:</div>
                  <div className="zero_number">4</div>
                  <div className="zero_number">0</div>
                </div>
                <div className="text_number">45456556541</div>
              </div>
            </div>
          </div>

          <div className="color_btn">
            <button className="violet_btn">Violet</button>
            <button className="green_btn">Green</button>
            <button className="red_btn">Red</button>
          </div>

          <div className="select_coin">
            <div className="ten_coin">
              <div className="first_line">
                <img src={first} alt="first" />
                <h4>0</h4>
              </div>
              <div className="first_line">
                <img src={secound} alt="secound" />
                <h4>1</h4>
              </div>
              <div className="first_line">
                <img src={third} alt="third" />
                <h4>2</h4>
              </div>
              <div className="first_line">
                <img src={first} alt="first" />
                <h4>3</h4>
              </div>
              <div className="first_line">
                <img src={secound} alt="secound" />
                <h4>4</h4>
              </div>
            </div>
            <div className="ten_coin">
              <div className="first_line">
                <img src={third} alt="third" />
                <h4>5</h4>
              </div>
              <div className="first_line">
                <img src={secound} alt="secound" />
                <h4>6</h4>
              </div>
              <div className="first_line">
                <img src={first} alt="first" />
                <h4>7</h4>
              </div>
              <div className="first_line">
                <img src={third} alt="third" />
                <h4>8</h4>
              </div>
              <div className="first_line">
                <img src={first} alt="first" />
                <h4>9</h4>
              </div>
            </div>
          </div>

          <div className="flex_seven_btn">
            <button className="secound_violet">Violet</button>
            <button className="x_one_btn">X1</button>
            <button className="x_two_btn">X5</button>
            <button className="x_two_btn">X10</button>
            <button className="x_two_btn">X20</button>
            <button className="x_two_btn">X50</button>
            <button className="x_two_btn">X100</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;
