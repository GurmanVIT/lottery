import React from 'react';
import loss_img from '../../assets/img/loss_img.svg';
import close from '../../assets/img/close.svg';

const LossPop = () => {
    return (
        <>
            <div className='you_loss'>
                <div className='loss_width'>
                    <div className='loss_reward'>
                        <img src={loss_img} alt='loss_img' className='loss_img' />
                        <h4>Lose</h4>
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

export default LossPop;