import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import youtube_inner from "../../../assets/img/youtube_inner.svg";

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
            <div className="youtube_inner_img">
              <img src={youtube_inner} alt="youtube_inner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtubes;
