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
import { clearResendData, resendOtpApi } from "../../../redux/resendOtpSlice";
import { submitWithdrawRequest } from "../../../redux/submitWithdrawRequestSlice";
import moment from "moment";
import dollar_img from "../../../assets/img/dollar_img.png";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../../utils/Colors";



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
  const submitWithdrawRequestReducer = useSelector(
    (state) => state.submitWithdrawRequestReducer.data
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

  useEffect(() => {
    // dispatch(apiWithdrawRequest());
  }, []);

  useEffect(() => {
    console.log("withdrawRequestReducer", withdrawRequestReducer)
    if (
      withdrawRequestReducer != null &&
      withdrawRequestReducer.success === 1
    ) {
      setWithdrawRequest(withdrawRequestReducer.data);
    }
  }, [withdrawRequestReducer]);

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
    console.log("PRofile ===> ", profileResponse)
    if (profileResponse != null && profileResponse.status === 1) {
      setAddress(profileResponse.data.withdrawAddress);
    }
  });

  useEffect(() => {
    console.log("submitWithdrawRequestReducer ===> ", submitWithdrawRequestReducer)
    if (submitWithdrawRequestReducer != null && submitWithdrawRequestReducer.success === 1) {
      // navigation(-1)
    }
    else {
      if (submitWithdrawRequestReducer != null) {
        alert(submitWithdrawRequestReducer.status)
      }
    }
  }, [submitWithdrawRequestReducer])

  const submitWithdrawRequestData = () => {
    console.log("submitWithdrawRequest", submitWithdrawRequest)
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
      console.log("Payload ===> ", payload)
      dispatch(submitWithdrawRequest(payload));
    }
  };

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
                Available Balance :{" "}
                <span>
                  <img src={dollar_img} alt="dollar_img" style={{ width: "21px", marginBottom: "2px", marginRight: "5px" }} />
                  {profileResponse != null
                    ? profileResponse.data.walletPoints
                    : 0.0}
                </span>
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
                  disabled
                  type="text"
                  value={address}
                  onChange={(val) => setAddress(val.target.value)}
                />
                <img
                  src={copy}
                  alt="copy"
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                    alert("Address Copied");
                  }}
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

            {withdrawRequestData != null &&
              withdrawRequestData.map((item, index) => (
                <div className="card_amount">
                  <p>
                    Amount : <span>{item.amount} USDT</span>
                  </p>
                  <p>
                    Admin Charges :{" "}
                    <span>{item.amount - item.payable_amount}</span>
                  </p>
                  <p>
                    Payable Amount : <span>{item.payable_amount}</span>
                  </p>
                  <p>
                    Status :{" "}
                    {/* <span>
                      {item.status === 0
                        ? "Pending"
                        : item.status === 1
                          ? "Approved"
                          : "Rejected"}
                    </span> */}
                  </p>
                  <p>
                    Date : <span>{getFormattedDateTime(item.createdAt)}</span>
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawBalance;
