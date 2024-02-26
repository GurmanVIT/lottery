import React from 'react';
import card_emoji from '../../../assets/img/card_emoji.svg';
import card_emoji2 from '../../../assets/img/card_emoji2.svg';
import card_emoji3 from '../../../assets/img/card_emoji3.svg';
import dollar_img from '../../../assets/img/dollar_img.png';

const Information = () => {
    return (
        <div className='information_detail'>
            <div className='information'>
                <h3>Winning Information</h3>

                <div className='card_secound'>
                    <div className='winning_card'>
                        <img src={card_emoji} alt='card_emoji' />
                        <h4 className='ellipsis'>Mem***LIK</h4>
                    </div>

                    <div className='amount_winning'>
                        <div className='receive'>
                            <h5>Receive</h5>
                            <h6>
                                <img src={dollar_img} alt="dollar_img" style={{ width: "21px", marginBottom: "2px" }} />
                                210.05
                            </h6>
                        </div>
                        <div className='amount'>
                            <h6>Winning amount</h6>
                        </div>
                    </div>
                </div>

                <div className='card_secound'>
                    <div className='winning_card'>
                        <img src={card_emoji2} alt='card_emoji2' />
                        <h4 className='ellipsis'>Mem***LIK</h4>
                    </div>

                    <div className='amount_winning'>
                        <div className='receive'>
                            <h5>Receive</h5>
                            <h6>
                                <img src={dollar_img} alt="dollar_img" style={{ width: "21px", marginBottom: "2px" }} />
                                210.05
                            </h6>
                        </div>
                        <div className='amount'>
                            <h6>Winning amount</h6>
                        </div>
                    </div>
                </div>

                <div className='card_secound'>
                    <div className='winning_card'>
                        <img src={card_emoji3} alt='card_emoji3' />
                        <h4 className='ellipsis'>Mem***LIK</h4>
                    </div>

                    <div className='amount_winning'>
                        <div className='receive'>
                            <h5>Receive</h5>
                            <h6>
                                <img src={dollar_img} alt="dollar_img" style={{ width: "21px", marginBottom: "2px" }} />
                                210.05
                            </h6>
                        </div>
                        <div className='amount'>
                            <h6>Winning amount</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;