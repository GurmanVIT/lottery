import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import LinkBottomNavigationAction from '@mui/material/BottomNavigationAction';
import Promotion from '../../../assets/img/Promotion.svg';
import Home from '../../SVG/home';
import Mine from '../../SVG/mine';
import Activity from '../../SVG/activity';
import Wallet from '../../SVG/wallet';
import { useNavigate } from 'react-router';


const Bottom_bar = () => {

    const navigation = useNavigate();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        console.log(value)
    }, [value])


    return (
        <section>
            <div className='bottom_bar'>
                <Box>
                    <BottomNavigation
                        value={value}
                        onChange={handleChange}
                        showLabels
                    >
                        <LinkBottomNavigationAction className={value === 0 ? "active" : ""} onClick={() => navigation('/home_page')} label=" Home" icon={<Home />} />
                        <LinkBottomNavigationAction label="Activity" icon={<Activity />} />
                        <LinkBottomNavigationAction label="Promotion" icon={<img src={Promotion} alt="Promotion" />} className='promotion' />
                        <LinkBottomNavigationAction label="Wallet" icon={<Wallet />} />
                        <LinkBottomNavigationAction className={value === 0 ? "active" : ""} onClick={() => navigation('/profile')} label="Mine" icon={<Mine />} />
                    </BottomNavigation>
                </Box>
            </div>
        </section >
    )
}

export default Bottom_bar;