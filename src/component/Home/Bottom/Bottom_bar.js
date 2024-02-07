import React from 'react';
import Promotion from '../../../assets/img/Promotion.svg';
import Home from '../../SVG/home';
import Mine from '../../SVG/mine';
import Activity from '../../SVG/activity';
import Wallet from '../../SVG/wallet';
import { useNavigate } from 'react-router';



const Bottom_bar = () => {

    const navigation = useNavigate();

    return (
        <section>
            <div className='bottom_bar'>
                <div class="navbar">
                    <div className='bottom_img active' onClick={() => navigation('/home_page')}>
                        < Home />
                        <p>Home</p>
                    </div>
                    <div className='bottom_img'>
                        <Activity />
                        <p>Activity</p>
                    </div>
                    <div className='promotion_img'>
                        <img src={Promotion} alt="Promotion" />
                        <p>Promotion</p>
                    </div>
                    <div className='bottom_img'>
                        <Wallet />
                        <p>Wallet</p>
                    </div>
                    <div className='bottom_img active' onClick={() => navigation('/profile')}>
                        < Mine />
                        <p>Mine</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Bottom_bar;