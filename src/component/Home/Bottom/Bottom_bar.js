import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import LinkBottomNavigationAction from '@mui/material/BottomNavigationAction';
import home from '../../../assets/img/home.svg';
import Activity from '../../../assets/img/activity.svg';
import Promotion from '../../../assets/img/Promotion.svg';
import Wallet from '../../../assets/img/wallet.svg';
import mine from '../../../assets/img/mine.svg';


const Bottom_bar = () => {

    const [value, setValue] = useState(0);


    return (
        <section>
            <div className='bottom_bar'>
                <Box>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                    >
                        <LinkBottomNavigationAction href='/Home_page' label="Home" icon={<img src={home} alt="Home" />} />
                        <LinkBottomNavigationAction label="Activity" icon={<img src={Activity} alt="Activity" />} />
                        <LinkBottomNavigationAction label="Promotion" icon={<img src={Promotion} alt="Promotion" />} className='promotion' />
                        <LinkBottomNavigationAction label="Wallet" icon={<img src={Wallet} alt="Wallet" />} />
                        <LinkBottomNavigationAction label="Mine" icon={<img src={mine} alt="Mine" />} />
                    </BottomNavigation>
                </Box>
            </div>
        </section >
    )
}

export default Bottom_bar;