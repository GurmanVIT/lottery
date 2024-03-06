import React, { useEffect } from 'react'
import Bottom_bar from '../Home/Bottom/Bottom_bar'
import Bonus from './Bonus'
import { useNavigate } from 'react-router';

const BonusPage = () => {

    const navigation = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        //Check Login
        if (token == null) {
            navigation("/login");
        }
    })

    return (
        <div className='home_page'>
            <Bonus />
            {/* <Bottom_bar /> */}
        </div>
    )
}

export default BonusPage;