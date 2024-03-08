import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";

const Youtubes = () => {

  const navigation = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    //Check Login
    if (token == null) {
      navigation("/login");
    }
  })


  return (
    <>
      <div className="youtube">
        <div className="header_youtube">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="youtube_content">
              <h4>YouTube Promotion Bonus</h4>
            </div>
          </div>

          <div className="youtube_section">
            <div className="card_padding">
              <div className="rule_card">
                <h6>You Tube</h6>
              </div>
              <div className="play_rules">

                <h6>How To Get Bonus</h6>
                <p>Make A Short Video Content About Dapic Games</p>
                <h6>Rules</h6>
                <p>The content of the Video must be about Dapic Games</p>
                <p>New Content of Video about DAPIC GAMES every month</p>
                <p>Put in the video description your Dapic ID number,</p>
                <p>your telegram contact and your (Promotional Link)</p>
                <p>Each view requirement can only get one time bonus.</p>

                <p>To claim the bonus you should do the following:</p>

                <p>* Provide your video link at the customer at March 01,2024</p>
                <p>* Every member can claim this bonus when reach the View requirements</p>

                <h5>More People View Your Video, More Bonus You Can Get</h5>

                <div className="viewer_flex">
                  <div className="viewers">
                    <h3>Viewers</h3>
                    <p className="pt-1">1000+</p>
                    <p>2500+</p>
                    <p>5000+</p>
                    <p>10000+</p>
                    <p>100000+</p>
                  </div>
                  <div className="income_view">
                    <h3>Income</h3>
                    <p className="pt-1">700</p>
                    <p>1500</p>
                    <p>2000</p>
                    <p>5000</p>
                    <p>25000</p>
                  </div>
                </div>

                <p>1. Your referral should not use Same bank details and Same IP, Once detected, you will be ineligible on claiming the bonus.</p>
                <p>2. In order to secure the safety of both parties, Dapic Games has the authority to oblige the members to provide their valid documents for verification purposes if qualified or not and to restrain identity theft.</p>
                <p>3. Engaged into this activity express your agreement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtubes;
