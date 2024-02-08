import React from 'react';
import Home_page from '../../component/Home/Home_page';
import Winner from './Winner/Index';
import Earning from './Winner/Earning';
import Information from './Information/Index';
import Bottom_bar from './Bottom/Bottom_bar';

const Index = () => {

    return (
        <main>
            <div className='home_page'>
                <Home_page />
                <Information />
                <Earning />
                <Winner />
                <Bottom_bar />
            </div>
        </main >
    )
}

export default Index