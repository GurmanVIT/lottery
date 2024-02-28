import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/img/back.svg";


const PlayEarnRules = () => {

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
            <div className="play_earn">
                <div className="header_play_earn">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="play_earne_content">
                            <h4>Play & Earn Rules</h4>
                        </div>
                    </div>

                    <div className="play_earn_section">
                        <p>
                            In all game servers you can participate 5 second before result.
                        </p>
                        <p>
                            in all the bets 2% will be deducted as tax i.e. your beting amount is 100 DG coin your bet will be placed for 98 DG coins and you will get winning amount according to that.
                        </p>
                        <p>
                            1. Select green: if the result shows 1,3,7,9 you will get
                            (98*2) 196;If the result shows 5, you will get (98*1.5) 147
                        </p>
                        <p>
                            2. Select red: if the result shows 2,4,6,8 you will get
                            (98*2) 196;If the result shows 0, you will get (98*1.5) 147
                        </p>
                        <p>
                            3. Select violet:if the result shows 0 or 5, you will get
                            (98*4.5) 441
                        </p>
                        <p>
                            4. Select number:if the result is the same as the number you
                            selected, you will get (98*9) 882
                        </p>
                        <p>
                            5. Select big: if the result shows 5,6,7,8,9 you will get
                            (98 * 2) 196
                        </p>
                        <p>
                            6. Select small: if the result shows 0,1,2,3,4 you will get
                            (98 * 2) 196
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default PlayEarnRules;
