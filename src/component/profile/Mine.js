import React, { useEffect, useState } from "react";
import profile_img from "../../assets/img/profile_img.svg";
import copy from "../../assets/img/copy.svg";
import refresh_2 from "../../assets/img/refresh_2.svg";
import wallet_2 from "../../assets/img/wallet_2.svg";
import deposit from "../../assets/img/deposit.svg";
import withdraw from "../../assets/img/withdraw.svg";
// import vip from "../../assets/img/vip.svg";
import transfer from "../../assets/img/Transfer.svg";
import bet_img from "../../assets/img/bet.svg";
import notification from "../../assets/img/notification.svg";
import next from "../../assets/img/next.svg";
import setting from "../../assets/img/setting.svg";
import feedback from "../../assets/img/feedback.svg";
import about from "../../assets/img/about.svg";
import customer from "../../assets/img/customer.svg";
import beginner from "../../assets/img/beginner.svg";
import logouts from "../../assets/img/logouts.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../../redux/loginSlice";
import { clearSignUpData } from "../../redux/signupSlice";
import { clearSponsorData } from "../../redux/checkSponsorIdSlice";
import { clearOtpData } from "../../redux/otpSlice";
import { clearResendData } from "../../redux/resendOtpSlice";
import { clearProfileData, profile } from "../../redux/profileSlice";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import {
  activateAccount,
  clearDataActive,
} from "../../redux/activateAccountSlice";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../utils/Colors";
import dollar_img from "../../assets/img/dollar_img.png";
import { refferalDeposit } from "../../redux/refferalDepositSlice";
import contact_us from "../../assets/img/contact_us.svg";
import team_member from "../../assets/img/team_member.svg";
import matching_tree from "../../assets/img/matching_tree.svg";
import referral_deposit from "../../assets/img/referral_deposit.svg";
import { Toast } from "react-bootstrap";


const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const profileResponse = useSelector((state) => state.profileReducer.data);
  const refferalDepositResponse = useSelector(
    (state) => state.refferalDepositReducer.data
  );
  const activateReducer = useSelector(
    (state) => state.activateAccountReducer.data
  );
  const [profileData, setProfileData] = useState(null);
  const [profileInfo, setInfoData] = useState(null);
  const [walletPoints, setWalletPoints] = useState(null);
  const [changeActive, setChangeActive] = useState(true);
  const [refferalDepositData, setRefferralDeposit] = useState(null);
  const [showToastProfile, setShowToastProfile] = useState(false);

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", "");
    localStorage.clear();
    dispatch(clearSignUpData());
    dispatch(clearData());
    dispatch(clearSponsorData());
    dispatch(clearOtpData());
    dispatch(clearResendData());
    dispatch(clearProfileData());

    setTimeout(() => {
      navigation("/login");
    }, 500);
  };

  useEffect(() => {
    dispatch(profile());
    dispatch(refferalDeposit());
  }, []);

  useEffect(() => {
    if (profileResponse != null && profileResponse.status === 1) {
      setProfileData(profileResponse.data);
      setWalletPoints(profileResponse.data.walletPoints);
      setInfoData(profileResponse.userInfo);
      localStorage.setItem("email", profileResponse.data.email);
    } else if (profileResponse != null && profileResponse.status === 0) {
      logout();
      alert("You logged-in on another device!");
    }
  }, [profileResponse]);

  useEffect(() => {
    if (
      refferalDepositResponse != null &&
      refferalDepositResponse.success === 1
    ) {
      setRefferralDeposit(refferalDepositResponse.data);
    }
  }, [refferalDepositResponse]);

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

  const showToast = () => {
    toast.success("This is a success message!", {
      position: "top-right",
      autoClose: 500, // milliseconds
    });
  };

  const onActiveClick = () => {
    dispatch(activateAccount());
  };

  useEffect(() => {
    if (activateReducer != null && activateReducer.status === 1) {
      dispatch(profile());
      dispatch(clearDataActive());
    } else {
      if (activateReducer != null) {
        alert(activateReducer.message);
      }
    }
  }, [activateReducer]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  });

  const refreshDataImgs = () => {
    dispatch(profile());
    dispatch(refferalDeposit());
    setShowToastProfile(true);
    setTimeout(() => {
      setShowToastProfile(false);
    }, 2000);
  };

  return (
    <>
      <div className="profile lottery_page">
        {profileData != null && profileInfo != null ? (
          <div className="profile_width lottery" style={{ height: "100vh" }}>
            {/* <ToastContainer /> */}
            <div className="mine">
              <div className="profile_img">
                <img src={profile_img} alt="profile_img" />
              </div>
              <div className="name_id">
                <div className="your_name">
                  <h5 className="ellipsis">
                    {profileData.firstName + " " + profileData.lastName}
                  </h5>
                  <div className="copy">
                    <h4>
                      UID <span>{profileData.userId}</span>
                      <img
                        src={copy}
                        alt="copy"
                        onClick={() => {
                          navigator.clipboard.writeText(profileData.userId);
                          alert("User Id Copied");
                        }}
                      />
                    </h4>
                  </div>
                </div>
                <div className="last_login">
                  <p>
                    Last Login: {getFormattedDateTime(profileData.upatedAt)}
                  </p>
                </div>
              </div>
            </div>


            <div className="sec_padding">

              <div className="active_card">
                <p>
                  {profileInfo.paidStatus === 0
                    ? "This account is not activate"
                    : "This account is activate"}
                </p>
              </div>

              <div className="balance">
                <Toast
                  onClose={() => setShowToastProfile(true)}
                  show={showToastProfile}
                  className="toast_refresh"
                >
                  <Toast.Body className="toast_refresh_body">
                    <p className="toast_refresh_content">refresh successfully</p>
                  </Toast.Body>
                </Toast>
                <p>Total Balance</p>
                <h3>

                  <img
                    src={dollar_img}
                    alt="dollar_img"
                    className="dollar_img"
                  />
                  <span>{profileData.walletPoints}</span>

                  <img
                    src={refresh_2}
                    alt="refresh_2"
                    onClick={() => refreshDataImgs()}
                  />
                </h3>
                <div className="four_img">
                  <div
                    className="wallet_2"
                    onClick={() => navigation("/update_wallet_address")}
                  >
                    <img src={wallet_2} alt="wallet_2" />
                    <h5>Wallet</h5>
                  </div>
                  <div
                    className="deposit"
                    onClick={() => navigation("/deposit")}
                  >
                    <img src={deposit} alt="deposit" />
                    <h5>Deposit</h5>
                  </div>
                  <div
                    className="withdraw"
                    onClick={() => navigation("/withdraw_balance")}
                  >
                    <img src={withdraw} alt="withdraw" />
                    <h5>Withdraw</h5>
                  </div>
                  {/* <div className="vip">
                    <img src={vip} alt="vip" />
                    <h5>VIP</h5>
                  </div> */}
                </div>
              </div>

              <div className="card_history">
                <div className="card_flex">
                  <div
                    className="card"
                    onClick={() => navigation("/bet_history")}
                  >
                    <div className="bet_img">
                      <img src={bet_img} alt="bet_img" />
                    </div>
                    <div className="bet_content">
                      <h6>Bet</h6>
                      <p>My betting history</p>
                    </div>
                  </div>

                  <div
                    className="card"
                    onClick={() => navigation("/transaction")}
                  >
                    <div className="transfer_img">
                      <img src={transfer} alt="transfer" />
                    </div>
                    <div className="transfer_content">
                      <h6>Transaction</h6>
                      <p>My transaction history</p>
                    </div>
                  </div>
                </div>

                <div className="card_flex mt-2">
                  <div className="card" onClick={() => navigation("/deposit")}>
                    <div className="deposit_img">
                      <img src={deposit} alt="deposit" />
                    </div>
                    <div className="deposit_content">
                      <h6>Deposit</h6>
                      <p>My deposit</p>
                    </div>
                  </div>

                  <div
                    className="card"
                    onClick={() => navigation("/withdraw_balance")}
                  >
                    <div className="withdraw_img">
                      <img src={withdraw} alt="withdraw" />
                    </div>
                    <div className="withdraw_content">
                      <h6>Withdraw</h6>
                      <p>My withdraw history</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="notification"
                onClick={() => navigation("/notification")}
              >
                <div className="img_notification">
                  <img src={notification} alt="notification" style={{ width: "28px", height: "28px" }} />
                  <p>Notification</p>
                </div>
                <div className="number_noti">
                  {/* <p>3</p> */}
                  <img src={next} alt="next" />
                </div>
              </div>

              <div
                className="game"
                onClick={() => navigation("/customer")}
                style={{ cursor: "pointer" }}
              >
                <div className="img_game">
                  <img src={contact_us} alt="contact_us" style={{ width: "28px", height: "28px" }} />
                  <p>Contact us</p>
                </div>
                <div className="next_img">
                  <img src={next} alt="next" />
                </div>
              </div>

              <div
                className="game"
                onClick={() => navigation("/team_member")}
                style={{ cursor: "pointer" }}
              >
                <div className="img_game">
                  <img src={team_member} alt="team_member" style={{ width: "28px", height: "28px" }} />
                  <p>My Team Member</p>
                </div>
                <div className="next_img">
                  <img src={next} alt="next" />
                </div>
              </div>

              {/* <div
                className="game"
                onClick={() => navigation("/team_tree")}
                style={{ cursor: "pointer" }}
              >
                <div className="img_game">
                  <img src={matching_tree} alt="matching_tree" style={{ width: "28px", height: "28px" }} />
                  <p>Matching Tree</p>
                </div>
                <div className="next_img">
                  <img src={next} alt="next" />
                </div>
              </div> */}

              <div
                className="game"
                onClick={() => navigation("/refferal_deposit")}
                style={{ cursor: "pointer" }}
              >
                <div className="img_game">
                  <img src={referral_deposit} alt="referral_deposit" style={{ width: "28px", height: "28px" }} />
                  <p>Referral Deposit</p>
                </div>
                {/* <div className="next_img">
                  <h6>
                    <img src={dollar_img} alt="dollar_img" />
                    {refferalDepositData !== null
                      ? refferalDepositResponse.incomeBalance
                      : 0}
                  </h6>
                </div> */}
                <div className="next_img">
                  <img src={next} alt="next" />
                </div>
              </div>

              <div className="service">
                <h5>Service center</h5>

                <div className="service_center">
                  <div
                    className="setting"
                    onClick={() => navigation("/settings")}
                  >
                    <img src={setting} alt="setting" />
                    <p>Settings</p>
                  </div>
                  <div
                    className="setting"
                    onClick={() => navigation("/feedback")}
                  >
                    <img src={feedback} alt="feedback" />
                    <p>Feedback</p>
                  </div>
                  <div className="setting" onClick={() => navigation("/about")}>
                    <img src={about} alt="about" />
                    <p>About Us</p>
                  </div>
                </div>

                <div className="service_center">
                  <div
                    className="setting"
                    onClick={() => navigation("/service")}
                  >
                    <img src={customer} alt="customer" />
                    <p>24/7 Customer service</p>
                  </div>
                  <div className="setting">
                    <img src={beginner} alt="beginner" />
                    <p>Beginner’s Guide</p>
                  </div>
                  <div className="setting" onClick={() => logout()}>
                    <img src={logouts} alt="logouts" />
                    <p>Logout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="profile_width lottery" style={{ height: "100vh" }}>
            <div className="main_loader">
              <ClipLoader color={myColors.primaryColor} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
