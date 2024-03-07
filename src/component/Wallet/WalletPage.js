import React, { useEffect } from 'react'
import Wallet from './Wallet'
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
        </div>
    )
}

export default WalletPage;