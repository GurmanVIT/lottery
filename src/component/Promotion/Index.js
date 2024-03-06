import React, { useEffect } from 'react';
import Promotion from './Promotion';
import Bottom_bar from '../Home/Bottom/Bottom_bar';
import { useNavigate } from 'react-router';

const PromotionData = () => {

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
            <div className='home_page'>
                <Promotion />
                {/* <Bottom_bar /> */}
            </div>
        </>
    )
}

export default PromotionData;