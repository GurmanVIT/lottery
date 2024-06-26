import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { myColors } from "../../../../utils/Colors";
import { Balance } from "@mui/icons-material";
import dollar_img from "../../../../assets/img/dollar_img.png";
import { useNavigate } from "react-router";
import { Toast } from "react-bootstrap";


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
    backgroundColor: "#fff",
    borderRadius: "14px 14px 0 0",
  },
};

const ModalBottom = ({
  myColor,
  isOpenModal,
  setOpenModal,
  selectedValue,
  selectedX,
  setSelectedX,
  setBalance,
  balance,
  placeBet,
  betToast
}) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  const setCountValue = (sum) => {
    if (selectedX >= 1) {
      const countVal = sum ? ++selectedX : --selectedX;
      if (countVal > 0) {
        setSelectedX(countVal);
      }
    }
  };

  const navigation = useNavigate();
  const token = localStorage.getItem("token");

  const hanldeInputBalance = (value) => {
    if (value.length < 5) {
      const number = parseInt(value);
      if (number < 1) {
        setSelectedX("");
      } else {
        setSelectedX(number)
      }
    }
  };

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  });


  return (
    <>
      <Modal
        isOpen={isOpenModal}
        style={customStyles}
        onRequestClose={() => closeModal}
      >
        <div className="modal_bottom">
          <div className="modals">
            <div className="win_go" style={{ backgroundColor: myColor }}>
              <h4>Win Go 1 min</h4>
              <h4>Selected : {selectedValue}</h4>
            </div>

            <div className="modal_content">
              <h5>DG Coins</h5>
              <div className="rupees_button">
                <button
                  className="x_one_btn"
                  style={{
                    width: 27,
                    backgroundColor:
                      balance === 1 ? myColor : myColors.dark_watch_bg,
                    color:
                      balance === 1 ? myColors.txtWhite : myColors.forgot_color,
                  }}
                  onClick={() => setBalance(1)}
                >
                  1
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      balance === 10 ? myColor : myColors.dark_watch_bg,
                    color:
                      balance === 10
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setBalance(10)}
                >
                  10
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      balance === 100 ? myColor : myColors.dark_watch_bg,
                    color:
                      balance === 100
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setBalance(100)}
                >
                  100
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      balance === 1000 ? myColor : myColors.dark_watch_bg,
                    color:
                      balance === 1000
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setBalance(1000)}
                >
                  1000
                </button>
              </div>
            </div>

            <div className="quantity">
              <h5>Quantity</h5>
              <div className="plus_minus">
                <button
                  style={{ backgroundColor: myColor, width: 22 }}
                  onClick={() => setCountValue(false)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={selectedX}
                  onChange={(val) => hanldeInputBalance(val.target.value)}
                />
                {/* <h4>{selectedX}</h4> */}
                <button
                  style={{ backgroundColor: myColor }}
                  onClick={() => setCountValue(true)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="modal_content x_number">
              <div className="rupees_button">
                <button
                  className="x_one_btn"
                  style={{
                    backgroundColor:
                      selectedX === 1 ? myColor : myColors.dark_watch_bg,
                    color:
                      selectedX === 1
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setSelectedX(1)}
                >
                  X1
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      selectedX === 5 ? myColor : myColors.dark_watch_bg,
                    color:
                      selectedX === 5
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setSelectedX(5)}
                >
                  X5
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      selectedX === 10 ? myColor : myColors.dark_watch_bg,
                    color:
                      selectedX === 10
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setSelectedX(10)}
                >
                  X10
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      selectedX === 20 ? myColor : myColors.dark_watch_bg,
                    color:
                      selectedX === 20
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setSelectedX(20)}
                >
                  X20
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      selectedX === 50 ? myColor : myColors.dark_watch_bg,
                    color:
                      selectedX === 50
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setSelectedX(50)}
                >
                  X50
                </button>

                <button
                  className="x_two_btn"
                  style={{
                    backgroundColor:
                      selectedX === 100 ? myColor : myColors.dark_watch_bg,
                    color:
                      selectedX === 100
                        ? myColors.txtWhite
                        : myColors.forgot_color,
                  }}
                  onClick={() => setSelectedX(100)}
                >
                  X100
                </button>
              </div>
            </div>

            <div className="radio_btn">
              <div className="radio">
                <label>
                  I agree <span color={myColor}>(Pre-sale rule)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="cancel_amount">
          <button type="button" onClick={closeModal} className="cancel">
            Cancel
          </button>
          <button
            type="button"
            className="amount"
            style={{ backgroundColor: myColor }}
            onClick={() => { betToast(); placeBet() }}
          >
            Total Coins{" "}
            <img
              src={dollar_img}
              alt="dollar_img"
              style={{ width: "20px", height: "20px" }}
            />{" "}
            {balance * selectedX}
          </button>

        </div>
      </Modal>
    </>
  );
};

export default ModalBottom;
