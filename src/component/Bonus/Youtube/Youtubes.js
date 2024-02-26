import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import youtube_inner from "../../../assets/img/youtube_inner.jpg";

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
