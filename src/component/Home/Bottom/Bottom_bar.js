import React, { useEffect, useState } from 'react';
import Promotion from '../../../assets/img/Promotion.svg';
import Home from '../../SVG/home';
import Mine from '../../SVG/mine';
import Activity from '../../SVG/activity';
import Wallet from '../../SVG/wallet';
import { useNavigate } from 'react-router';


const Bottom_bar = () => {

    const navigation = useNavigate();

    const [value, setValue] = useState(0);
    const token = localStorage.getItem("token");

    const onTabClick = (val, navigateTo) => {
        console.log("Token ===> ", token)
        if (token == null && val != 0) {
            navigation("/login");
        }
        else {
            setValue(val);
            navigation(navigateTo);
        }
    };

    useEffect(() => {
        setValue(value);
    }, [value])

    return (

        <div className='bottom_bar'>
            <div className="navbar">
                <div className='bottom_img' onClick={() => onTabClick(0, '/home_page')}>
                    <Home
                        stroke={"#6A6A6A"}
                    // stroke={value === 0 ? "#fff" : "#6A6A6A"}
                    />
                    <p>Home</p>
                    {/* <p style={{ color: value === 0 ? "#fff" : "#6A6A6A" }}>Home</p> */}
                </div>
                <div className='bottom_img' onClick={() => onTabClick(1, '/bonus')}>
                    <Activity />
                    <p>Bonus</p>
                </div>
                <div className='promotion_img' onClick={() => onTabClick(2, '/promotion')} style={{ cursor: "pointer" }}>
                    <img src={Promotion} alt="Promotion" className='pro_img' />
                    <p>Promotion</p>
                </div>
                <div className='bottom_img' onClick={() => onTabClick(3, '/wallet')}>
                    <Wallet />
                    <p>Wallet</p>
                </div>
                <div className='bottom_img' onClick={() => onTabClick(4, '/profile')}>
                    <Mine
                        stroke={"#6A6A6A"}
                    // stroke={value === 4 ? "#fff" : "#6A6A6A"} 
                    />
                    <p>Profile</p>
                    {/* <p style={{ color: value === 4 ? "#fff" : "#6A6A6A" }}>Mine</p> */}
                </div>
            </div>
        </div >

    );
};

export default Bottom_bar;
