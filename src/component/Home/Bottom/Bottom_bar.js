import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Home from '../../SVG/home';
import Mine from '../../SVG/mine';
import Activity from '../../SVG/activity';
import Wallet from '../../SVG/wallet';
import Promotion from '../../../assets/img/Promotion.svg';

const Bottom_bar = () => {
    const navigation = useNavigate();
    const [value, setValue] = useState(0);
    const token = localStorage.getItem("token");
    let location = useLocation();

    const onTabClick = (val, navigateTo) => {
        if (token == null && val != 0) {
            navigation("/login");
        }
        else {
            setValue(val);
            navigation(navigateTo);
        }
    };

    useEffect(() => {
        if (location.pathname.includes("/home_page")) {
            setValue(0)
        } else if (location.pathname.includes("/bonus")) {
            setValue(1)
        } else if (location.pathname.includes("/promotion")) {
            setValue(2)
        } else if (location.pathname.includes("/wallet")) {
            setValue(3)
        }
        else if (location.pathname.includes("/profile")) {
            setValue(4)
        }
        else {
            setValue(0)
        }
    }, []);

    return (
        <div className='center_bar'>
            <div className='bottom_bar'>
                <div className="navbar">
                    <div className={`bottom_img ${value === 0 ? 'selected' : ''}`} onClick={() => onTabClick(0, '/home_page')}>
                        <Home
                            stroke={value === 0 ? "#fff" : "#6A6A6A"}
                        />
                        <p style={{ color: value === 0 ? "#fff" : "#6A6A6A" }}>Home</p>
                    </div>
                    <div className={`bottom_img ${value === 1 ? 'selected' : ''}`} onClick={() => onTabClick(1, '/bonus')}>
                        <Activity
                            stroke={value === 1 ? "#fff" : "#6A6A6A"}
                        />
                        <p style={{ color: value === 1 ? "#fff" : "#6A6A6A" }}>Bonus</p>
                    </div>
                    <div className={`promotion_img ${value === 2 ? 'selected' : ''}`} onClick={() => onTabClick(2, '/promotion')} style={{ cursor: "pointer" }}>
                        <img src={Promotion} alt="Promotion" className='pro_img' />
                        <p style={{ color: value === 2 ? "#fff" : "#6A6A6A" }}>Promotion</p>
                    </div>
                    <div className={`bottom_img ${value === 3 ? 'selected' : ''}`} onClick={() => onTabClick(3, '/wallet')}>
                        <Wallet
                            stroke={value === 3 ? "#fff" : "#6A6A6A"}
                        />
                        <p style={{ color: value === 3 ? "#fff" : "#6A6A6A" }}>Wallet</p>
                    </div>
                    <div className={`bottom_img ${value === 4 ? 'selected' : ''}`} onClick={() => onTabClick(4, '/profile')}>
                        <Mine
                            stroke={value === 4 ? "#fff" : "#6A6A6A"}
                        />
                        <p style={{ color: value === 4 ? "#fff" : "#6A6A6A" }}>Profile</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Bottom_bar;