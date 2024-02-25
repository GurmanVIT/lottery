import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import { useSelector } from "react-redux";

const TeamTree = () => {

  const navigation = useNavigate();

  const profileResponse = useSelector((state) => state.profileReducer.data);


  return (
    <>
      <div className="team_tree">
        <div className="header_team">
          <div className="header_flex">
            <div className="back_img" onClick={() => navigation(-1)}>
              <img src={back} alt="back" />
            </div>
            <div className="team_tree_content">
              <h4>Matching Tree</h4>
            </div>
          </div>

          <div className="team_tree_section">
            <iframe
              src={
                profileResponse != null
                  ? `https://dapic-api.virtualittechnology.com/api/user/team/${profileResponse.data.userId}`
                  : ""
              }
              name="iframe_a"
              title="Iframe Example"
              scrolling="no"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTree;
