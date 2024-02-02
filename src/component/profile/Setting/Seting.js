import React from 'react';
import { useNavigate } from "react-router-dom";
import back from '../../../assets/img/back.svg';
import qr_code from '../../../assets/img/qr_code.svg';



const Setting = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className="setting">
                <div className="header_setting">
                    <div className="header_flex">
                        <div className="back_img" onClick={() => navigation(-1)}>
                            <img src={back} alt="back" />
                        </div>
                        <div className="setting_content">
                            <h4>Settings Center</h4>
                        </div>
                    </div>

                    <div className='setting_section'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting;