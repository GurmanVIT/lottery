import React from 'react';
import frame_img_1 from '../../../assets/img/frame_img_1.svg';
import frame_image_2 from '../../../assets/img/frame_image_2.svg';
import winner from '../../../assets/img/winner.svg';
import winner_1 from '../../../assets/img/winner_1.svg';
import winner_2 from '../../../assets/img/winner_2.svg';

const Earning = () => {
    return (
        <div>
            <div className='earning '>
                <h3>Today's earnings chart</h3>

                <div className='flex_frame'>
                    <div className='frame_sec'>
                        <div className='img_frame'>
                            <img src={frame_img_1} alt='frame_img_1' className='frame_img_1' />
                            <img src={winner} alt='winner' className='winner' />
                            <p className='ellipsis'>JOHN DOE</p>
                        </div>
                    </div>

                    <div className='frame_sec_secound'>
                        <div className='img_frame_secound'>
                            <img src={frame_image_2} alt='frame_image_2' className='frame_img_2' />
                            <img src={winner_1} alt='winner_1' className='winner_1' />
                            <p className='ellipsis'>JOHN DOE</p>
                        </div>
                    </div>

                    <div className='frame_sec'>
                        <div className='img_frame'>
                            <img src={frame_img_1} alt='frame_img_1' className='frame_img_1' />
                            <img src={winner_2} alt='winner_2' className='winner_2' />
                            <p className='ellipsis'>JOHN DOE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earning;