import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";
import team_top from "../../../assets/img/team_top.svg";
import team_left from "../../../assets/img/team_left.svg";
import team_right from "../../../assets/img/team_right.svg";
import road_map from "../../../assets/img/road_map.svg";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const MatchingTree = () => {

    const navigation = useNavigate();

    const leftCounter = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Left Account
        </Tooltip>
    );

    const rightCounter = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Right Account
        </Tooltip>
    );


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
                        <div className="frame_card">
                            <h5>Tree Views</h5>
                            <div className="team_img">
                                <img src={team_top} alt="team_top" />
                                <p>Gurman</p>
                            </div>
                            <div className="road_map">
                                <img src={road_map} alt="road_map" />
                            </div>
                            <div className="team_img2">

                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={leftCounter}
                                >
                                    <div className="team_left">
                                        <img src={team_left} alt="team_left" className="team_img3" />
                                        <p>Aman</p>
                                    </div>
                                </OverlayTrigger>


                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={rightCounter}
                                >
                                    <div className="team_right">
                                        <img src={team_right} alt="team_right" className="team_img4" />
                                        <p>Name</p>
                                    </div>
                                </OverlayTrigger>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MatchingTree;

