import React from 'react';
import card_img2 from '../../../assets/img/card_emoji2.svg';
import card_img3 from '../../../assets/img/card_img3.svg';
import card_img4 from '../../../assets/img/card_img4.svg';

const Winner = () => {
    return (
        < >
            <div className='bottom_sec'>
                <div className='last_sec'>
                    <div className='card_last'>
                        <div className='winning_card_last'>
                            <h4><b>1</b></h4>
                            <img src={card_img2} alt='card_img2' />
                            <h4 className='ellipsis'>Mem***LIK</h4>
                        </div>

                        <div className='amount_winning'>
                            <p><b>$2304.26</b></p>
                        </div>
                    </div>
                </div>

                <div className='last_sec'>
                    <div className='card_last'>
                        <div className='winning_card_last'>
                            <h4><b>1</b></h4>
                            <img src={card_img3} alt='card_img3' />
                            <h4 className='ellipsis'>Mem***LIK</h4>
                        </div>

                        <div className='amount_winning'>
                            <p><b>$2304.26</b></p>
                        </div>
                    </div>
                </div>

                <div className='last_sec'>
                    <div className='card_last'>
                        <div className='winning_card_last'>
                            <h4><b>1</b></h4>
                            <img src={card_img4} alt='card_img4' />
                            <h4 className='ellipsis'>Mem***LIK</h4>
                        </div>

                        <div className='amount_winning'>
                            <p><b>$2304.26</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Winner;