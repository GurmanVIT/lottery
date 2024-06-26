import React, { useEffect, useState } from "react";
import back from "../../../assets/img/back.svg";
import copy from "../../../assets/img/copy.svg";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearResendData, resendOtpApi } from "../../../redux/resendOtpSlice";
import { updateWalletAddress } from "../../../redux/updateWalletAddressSlice";
import { profile } from "../../../redux/profileSlice";

const UpdateWalletAddress = () => {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const [otp, setOtp] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const profileResponse = useSelector((state) => state.profileReducer.data);
  const updateWalletAddressResponse = useSelector(
    (state) => state.updateWalletAddressReducer.data
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  })

  useEffect(() => {
    dispatch(profile());
  }, []);

  const resendOtpReducer = useSelector((state) => state.resendOtpReducer.data);

  const getOtp = () => {
    const email = localStorage.getItem("email");
    const payload = {
      email: email,
    };
    dispatch(resendOtpApi(payload));
  };

  useEffect(() => {
    if (resendOtpReducer != null && resendOtpReducer.status === 1) {
      alert("Please check otp on your mail");
      dispatch(clearResendData())
    }
  }, [resendOtpReducer]);

  useEffect(() => {
    if (profileResponse != null && profileResponse.status === 1) {
      setWalletAddress(profileResponse.data.withdrawAddress);
    }
  }, [profileResponse]);

  const onUpdateClick = () => {
    if (otp === "") {
      alert("Please enter otp!");
    } else if (walletAddress === "") {
      alert("Please enter WalletAddress!");
    } else {
      const payload = {
        wallet_address: walletAddress,
        otp: otp,
      };
      dispatch(updateWalletAddress(payload));
    }
  };

  useEffect(() => {
    if (
      updateWalletAddressResponse != null &&
      updateWalletAddressResponse.success === 1
    ) {
      alert("Address updated");
      navigation(-1);
    }
  }, [updateWalletAddressResponse]);

  return (
    <>
      <div className="update_address">
        <div className="header_update_address">
          <div className="header_flex_address">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="update_address_content">
              <h4>Update Wallet Address</h4>
            </div>
          </div>
          <div className="withdraw_balance_section">
            <div className="usdt">
              <p>
                Chain name : <span style={{ fontSize: "14px" }}>USDT (BEP20)</span>
              </p>
            </div>

            <div className="address">
              <label>Address</label>
              <div className="input_copy">
                <input
                  type="text"
                  placeholder="Please enter address"
                  value={walletAddress}
                  onChange={(v) => setWalletAddress(v.target.value)}
                />
                <img
                  src={copy}
                  alt="copy"
                  onClick={() => {
                    navigator.clipboard.writeText(walletAddress);
                    alert("Address Copied");
                  }}
                />
              </div>
            </div>

            <div className="otp_inputs">
              <label>OTP</label>

              <div className="enter_otp">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(v) => setOtp(v.target.value)}
                />
                <button type="button" onClick={() => getOtp()}>
                  Get OTP
                </button>
              </div>
            </div>

            <div className="operation_reminder">
              <h6>Operation Reminder</h6>
              <p>
                The minimun amount of single withdrawl is : 10 USDT, please do
                not transfer USDT assests to addresses other than USDT,
                otherwise it cannot be retrieved in the above address you
                transferred. All withdrawl will be approved within 24 hours
                after request done.
              </p>
            </div>

            <div className="confirm_btn">
              <button
                type="button"
                className="login_button"
                onClick={() => onUpdateClick()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateWalletAddress;
