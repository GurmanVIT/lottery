import React from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../assets/img/back.svg';


const Withdraw = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="withdraw">
                <div className="header_withdraw">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation.goBack()}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="withdraw_content">
                            <h4>Withdraw</h4>
                        </div>
                        <div className="withdraw_history">
                            <p>Withdraw History</p>
                        </div>
                    </div>
                    <div className='bg_height'></div>
                </div>
            </div>
        </>
    )
}

export default Withdraw;