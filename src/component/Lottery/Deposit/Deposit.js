import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { depositWallet } from "../../../redux/depositWalletSlice";
import QRCode from "qrcode.react";

const Deposit = () => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const [walletAddress, setWalletAddress] = useState("");

  const data = useSelector((state) => state.depositWalletReducer.data);

  useEffect(() => {
    dispatch(depositWallet());
  }, []);

  useEffect(() => {
    if (data != null && data.status === 1) {
      setWalletAddress(data.walletAddress);
    }
  }, [data]);

  return (
    <>
      <div className="deposit">
        <div className="header_deposit">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="deposit_content">
              <h4>Deposit USDT</h4>
            </div>
            <div
              className="deposit_history"
              onClick={() => navigation("/cycle_detail")}
            >
              <p>DEPOSIT DETAIL</p>
            </div>
          </div>

          <div className="deposit_section">
            <div className="usdt">
              <p>Deposit Only BEP20-USDT</p>
            </div>

            <div className="address">
              <p>Deposit address</p>
              <QRCode value={walletAddress} />
              <div className="d-flex justify-content-center">
                <h6 className="ellipsis">{walletAddress}</h6>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(walletAddress);
                  alert("Address Copied");
                }}
              >
                Copy Address
              </button>
            </div>

            <div className="precaution">
              <h5>Precaution</h5>
              <p className="mb-2">
                1. Please do not recharge non-USDT assets to the above address,
                otherwise the assets will not be retrieved. After recharging to
                the above address confirmation of the entire network node is
                required. The account will be received after 1 network
                confirmation, and the coin can be withdrawn After 1 network
                confirmation.
              </p>
              <p className="m-0">2. Inactive accounts can't be withdraw.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
