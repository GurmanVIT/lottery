import React from 'react';
import you_win from '../../assets/img/you_win.svg';
import close from '../../assets/img/close.svg';

const WinPop = () => {
    return (
        <>
            <div className='you_win'>
                <div className='winner_width'>
                    <div className='winner_reward'>
                        <img src={you_win} alt='you_win' className='win_img' />
                        <h4>Bonus</h4>
                        <h5>₹10.56</h5>
                        <p>3 seconds auto close</p>
                        <div className='close_btn'>
                            <img src={close} alt='close' className='close_img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WinPop;