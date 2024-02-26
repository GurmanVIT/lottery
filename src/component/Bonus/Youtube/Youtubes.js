import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import youtube from "../../../assets/img/youtube.png";
// import back from "../../../assets/img/back.png";

const Youtubes = () => {

  const navigation = useNavigate();


  return (
    <>
      <div className="youtube">
        <div className="header_youtube">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="youtube_content">
              <h4>Activity details</h4>
            </div>
          </div>
          <div className="top_img_youtube">
            <img src={youtube} alt="youtube" className="youtube_img" />
          </div>
          <div className="youtube_section">

          </div>
        </div>
      </div>
    </>
  );
};

export default Youtubes;
