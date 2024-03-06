import React, { useEffect } from 'react'
import Wallet from './Wallet'
import Bottom_bar from '../Home/Bottom/Bottom_bar'
import { useNavigate } from 'react-router';

const WalletPage = () => {

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
            <Wallet />
            {/* <Bottom_bar /> */}
        </div>
    )
}

export default WalletPage;