import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";


const DirectTree = () => {

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
            <div className="direct_tree">
                <div className="header_direct_tree">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="direct_tree_content">
                            <h4>My Direct Tree</h4>
                        </div>

                    </div>

                    <div className="direct_tree_section">

                    </div>
                </div>
            </div >
        </>
    );
};

export default DirectTree;
