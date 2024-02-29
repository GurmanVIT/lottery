import React, { useEffect, useState } from "react";
import team_group from "../../assets/img/team_group.svg";
import invitation_copy from "../../assets/img/invitation_copy.svg";
import rules from "../../assets/img/rules.svg";
import next from "../../assets/img/next.svg";
import promotion_data from "../../assets/img/promotion_data.svg";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../redux/profileSlice";
import { promotionData } from "../../redux/promotionDataSlice";
import promotion_banner from "../../assets/img/promotion_banner.svg";
import promotion_banner2 from "../../assets/img/promotion_banner2.svg";
import promotion_banner3 from "../../assets/img/promotion_banner3.svg";
import promotion_banner4 from "../../assets/img/promotion_banner4.svg";
import share from "../../assets/img/share.svg";
import Modal from "react-modal";
import close from "../../assets/img/close.svg";
import { ClipLoader } from "react-spinners";
import { myColors } from "../../utils/Colors";


const modal_share = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, 0)",
    maxWidth: "90%",
    width: "420px",
    backgroundColor: "#74707008",
    borderRadius: " 10px",
  },
};

const Promotion = () => {

  const navigation = useNavigate();
  const [isOpenPlay, setOpenPlay] = useState(false);
  const [isShareOpen, setShareOpen] = useState(false);

  const profileResponse = useSelector((state) => state.profileReducer.data);

  const [promotion, setPromotion] = useState(null);
  const promotionDataReducerData = useSelector(
    (state) => state.promotionDataReducer.data
  );
  const [profileData, setProfileData] = useState(null);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  })


  useEffect(() => {
    if (profileResponse != null && profileResponse.status === 1) {
      setProfileData(profileResponse.data);
    }
  }, [profileResponse]);
  useEffect(() => {
    dispatch(profile());
  }, []);

  useEffect(() => {
    dispatch(promotionData());
  }, []);

  useEffect(() => {
    if (
      promotionDataReducerData != null &&
      promotionDataReducerData.success === 1
    ) {
      setPromotion(promotionDataReducerData.data);
    }
  }, [promotionDataReducerData]);


  const openPlayModal = () => {
    setOpenPlay(true);
  };

  const shareModal = () => {
    setShareOpen(true);
  };


  const options = [
    { label: 'Google', url: 'https://www.google.com', image: 'promotion_banner2' },
    { label: 'Facebook', url: 'https://www.facebook.com', image: 'facebook-image-url' },
    { label: 'Twitter', url: 'https://www.twitter.com', image: 'twitter-image-url' },
  ];

  return (
    <>
      <div className="promotions">
        <div className="header_promotions">
          <div className="header_flex">
            <div className="promotions_content">
              <h4>Agency</h4>
            </div>
          </div>

          {promotion != null ? (
            <div className="promotions_section">
              <div className="agency">
                <h3>
                  {promotion != null ? promotion.yesterday_total_commision : 0.0}
                </h3>
                <div className="bg_total">
                  <h6>Yesterday's total commission</h6>
                </div>
                <p>Upgrade the level to increase commission income</p>
              </div>
              {promotion != null && (
                <div className="direct_team">
                  <div className="deposit_direct">
                    <div className="direct">
                      <img src={team_group} alt="team_group" />
                      <h6>Direct subordinates</h6>
                    </div>
                    <div className="p-3 pb-1">
                      <div className="register_number">
                        <h6>{promotion.directs_number_of_registration}</h6>
                        <p> number of register</p>
                      </div>
                      <div className="register_number">
                        <h6>{promotion.directs_number_of_deposit}</h6>
                        <p> Deposit number</p>
                      </div>
                      <div className="register_number">
                        <h6>{promotion.directs_deposit_amount}</h6>
                        <p> Deposit amount</p>
                      </div>
                      <div className="register_number">
                        <h6>{promotion.directs_first_deposit}</h6>
                        <p> Number of people making first deposit</p>
                      </div>
                    </div>
                  </div>

                  <div className="deposit_direct">
                    <div className="direct people">
                      <img src={team_group} alt="team_group" />
                      <h6>Team subordinates</h6>
                    </div>
                    <div className="p-3 pb-1 border_left">
                      <div className="register_number">
                        <h6>{promotion.team_number_of_registration}</h6>
                        <p> number of register</p>
                      </div>
                      <div className="Deposit_number">
                        <h6>{promotion.team_number_of_deposit}</h6>
                        <p> Deposit number</p>
                      </div>
                      <div className="amount_number">
                        <h6>{promotion.team_first_deposit}</h6>
                        <p> Deposit amount</p>
                      </div>
                      <div className="people_number">
                        <h6>0</h6>
                        <p> Number of people making first deposit</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 link_btn">
                <button type="button" className="login_button">
                  INVITATION LINK
                </button>
              </div>

              <div
                className="game"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://dapicgames.com/register?sponser_id=" +
                    profileData.userId +
                    "&position=L"
                  );
                  alert(
                    "https://dapicgames.com/register?sponser_id=" +
                    profileData.userId +
                    "&position=L"
                  );
                }}
              >
                <div className="img_game">
                  <img src={invitation_copy} alt="invitation_copy" />
                  <p>Left invitation code</p>
                </div>
              </div>

              <div
                className="game"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://dapicgames.com/register?sponser_id=" +
                    profileData.userId +
                    "&position=R"
                  );
                  alert(
                    "https://dapicgames.com/register?sponser_id=" +
                    profileData.userId +
                    "&position=R"
                  );
                }}
              >
                <div className="img_game">
                  <img src={invitation_copy} alt="invitation_copy" />
                  <p>Right invitation code</p>
                </div>
              </div>

              <div
                className="game"
                onClick={() => navigation("/rule")}
                style={{ cursor: "pointer" }}
              >
                <div className="img_game">
                  <img src={rules} alt="rules" />
                  <p>Invitation rules</p>
                </div>
                <div className="next_img">
                  <img src={next} alt="next" />
                </div>
              </div>

              <div className="promotion_data">
                <h5>
                  <img
                    src={promotion_data}
                    alt="promotion_data"
                    className="me-2"
                  />{" "}
                  MARKTING TOOLS
                </h5>
                {promotion != null && (
                  <div className="data_details">
                    <div className="total_number">
                      <div className="this_week">
                        <h6>{promotion.promotion_profit_this_week}</h6>
                        <p>This Week</p>
                      </div>
                      <div className="this_week">
                        <h6>{promotion.this_week_directs}</h6>
                        <p>Direct subordinate</p>
                      </div>
                    </div>
                    <div className="total_number">
                      <div className="this_week">
                        <h6>{promotion.total_commision}</h6>
                        <p>Total commission</p>
                      </div>
                      <div className="this_week">
                        <h6>{promotion.total_team_members}</h6>
                        <p>Total number of subordinates in the team</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="banner_shared">
                <h5>Markting Banners</h5>
                <div className="pro_card_two">
                  <div className="promotion_banner_img">
                    <img src={promotion_banner} alt="promotion_banner" className="promotion_img" />
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>

                  <div className="promotion_banner_img">
                    <img src={promotion_banner2} alt="promotion_banner2" className="promotion_img" />
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>
                </div>

                <div className="pro_card_two">
                  <div className="promotion_banner_img">
                    <img src={promotion_banner3} alt="promotion_banner3" className="promotion_img" />
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>

                  <div className="promotion_banner_img">
                    <img src={promotion_banner4} alt="promotion_banner4" className="promotion_img" />
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>
                </div>
              </div>

              <div className="youtube_video_frame">
                <h5>Markting Videos</h5>
                <div className="flex_tube">
                  <div className="video_play">
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>
                  <div className="video_play">
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>
                </div>

                <div className="flex_tube">
                  <div className="video_play">
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>
                  <div className="video_play">
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <img src={share} alt="share" className="share_img" onClick={() => openPlayModal()} />
                  </div>
                </div>
              </div>

              <Modal
                isOpen={isOpenPlay}
                style={modal_share}
                onRequestClose={() => setOpenPlay(false)}
              >
                <div className="share_modal">
                  <h6 className="share__head">Shareing Code</h6>
                  <div className="left_right_btnn">
                    <button type="button" className="left_btnn" onClick={() => {
                      navigator.clipboard.writeText(
                        "https://dapicgames.com/register?sponser_id=" +
                        profileData.userId +
                        "&position=L"
                      );
                      alert(
                        "https://dapicgames.com/register?sponser_id=" +
                        profileData.userId +
                        "&position=L"
                      );
                    }}>Left</button>

                    <button type="button" className="right_btnn" onClick={() => {
                      navigator.clipboard.writeText(
                        "https://dapicgames.com/register?sponser_id=" +
                        profileData.userId +
                        "&position=R"
                      );
                      alert(
                        "https://dapicgames.com/register?sponser_id=" +
                        profileData.userId +
                        "&position=R"
                      );
                    }}>Right</button>
                  </div>
                </div>

                <div className="close_btnn">
                  <img
                    src={close}
                    alt="close"
                    className="close_imgs"
                    onClick={() => setOpenPlay(false)}
                  />
                </div>

                {/* <div>
                <p>Click the links below to visit different sites:</p>
                <ul>
                  {options.map((option, index) => (
                    <li key={index}>
                      <a href={option.url} target="_blank" rel="noopener noreferrer">
                        {option.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              </Modal>

              {/* <Modal
              isOpen={isShareOpen}
              style={modal_share}
              onRequestClose={() => setShareOpen(false)}
            >
              <div className="share_google">
                <p>Click the links below to visit different sites:</p>
                <ul>
                  {options.map((option, index) => (
                    <li key={index}>
                      <a href={option.url} target="_blank" rel="noopener noreferrer" onClick={() => {
                        navigator.clipboard.writeText(
                          "https://dapicgames.com/register?sponser_id=" +
                          profileData.userId +
                          "&position=L"
                        );
                        alert(
                          "https://dapicgames.com/register?sponser_id=" +
                          profileData.userId +
                          "&position=L"
                        );
                      }}>
                        {option.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Modal> */}
            </div>
          ) :
            <div className="promotions_section " >
              <div className="main_loader">
                <ClipLoader color={myColors.primaryColor} />
              </div>
            </div>
          }
        </div >
      </div >
    </>
  );
};

export default Promotion;
