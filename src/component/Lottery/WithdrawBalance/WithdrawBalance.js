import React, { useEffect, useState } from "react";
import back from "../../../assets/img/back.svg";
import copy from "../../../assets/img/copy.svg";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../../redux/profileSlice";
import {
  apiWithdrawRequest,
  withdrawRequest,
} from "../../../redux/withdrawRequestSlice";
import { resendOtpApi } from "../../../redux/resendOtpSlice";
import { submitWithdrawRequest } from "../../../redux/submitWithdrawRequestSlice";

const WithdrawBalance = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [withdrawRequestData, setWithdrawRequest] = useState(null);
  const [address, setAddress] = useState("");
  const profileResponse = useSelector((state) => state.profileReducer.data);
  const resendOtpReducer = useSelector((state) => state.resendOtpReducer.data);
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");
  const withdrawRequestReducer = useSelector(
    (state) => state.apiWithdrawRequestReducer.data
  );

  useEffect(() => {
    dispatch(profile());
  }, []);

  useEffect(() => {
    dispatch(apiWithdrawRequest());
  }, []);

  useEffect(() => {
    console.log("withdrawRequest ===> ", withdrawRequestReducer);
    if (
      withdrawRequestReducer != null &&
      withdrawRequestReducer.success === 1
    ) {
      // setWithdrawRequest()
    }
  }, [withdrawRequestReducer]);

  const getOtp = () => {
    const email = localStorage.getItem("email");
    const payload = {
      email: email,
    };
    console.log("Payload otp ===>", payload);
    dispatch(resendOtpApi(payload));
  };

  useEffect(() => {
    console.log("Otp ===> ", resendOtpReducer);
    if (resendOtpReducer != null && resendOtpReducer.status === 1) {
      alert("Please check otp on your mail");
    }
  }, [resendOtpReducer]);

  useEffect(() => {
    if (profileResponse != null && profileResponse.status === 1) {
      setAddress(profileResponse.data.withdrawAddress);
    }
  });

  const submitWithdrawRequestData = () => {
    if (address === "") {
      alert("Please enter address");
    } else if (amount === "") {
      alert("Please enter amount");
    } else if (otp === "") {
      alert("Please enter otp");
    } else {
      const payload = {
        amount: amount,
        otp: otp,
      };
      dispatch(submitWithdrawRequest(payload));
    }
  };

  return (
    <>
      <div className="withdraw_bls">
        <div className="header_withdraw_balance">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="withdraw_balance">
              <h4>Withdraw</h4>
            </div>
          </div>
          <div className="withdraw_balance_section">
            <div className="usdt">
              <p>
                Available Balance : <span>$195.735</span>
              </p>
            </div>

            <div className="address">
              <div className="address_btn">
                <p>Address</p>
                <button
                  type="button"
                  onClick={() => navigation("/update_wallet_address")}
                >
                  Update Address
                </button>
              </div>
              <div className="input_copy">
                <input
                  type="text"
                  placeholder="uhbbWIP4769JHGhepo739qilmz0"
                  value={address}
                  onChange={(val) => setAddress(val.target.value)}
                />
                <img
                  src={copy}
                  alt="copy"
                  // onClick={() => {
                  //     navigator.clipboard.writeText();
                  //     // alert("Address Copied");
                  // }}
                />
              </div>
            </div>

            <div className="quantity_input">
              <label>Quantity</label>
              <input
                type="text"
                placeholder="The minimun number of withdraw 10 USDT"
                value={amount}
                onChange={(val) => setAmount(val.target.value)}
              />
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

            <div className="precaution">
              <h5>
                Transaction fee <span>10%</span>
              </h5>
              <h5>
                Arrival quantiy <span>0 USDT</span>
              </h5>
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
                onClick={() => submitWithdrawRequestData()}
              >
                Confirm
              </button>
            </div>

            <div className="card_amount">
              <p>
                Amount : <span>853.0 USDT</span>
              </p>
              <p>
                Admin Charges : <span>853</span>
              </p>
              <p>
                Payable Amount : <span>853</span>
              </p>
              <p>
                Staus : <span>853</span>
              </p>
              <p>
                Date : <span>853</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawBalance;
