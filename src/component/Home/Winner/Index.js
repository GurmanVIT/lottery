import React from 'react';
import card_img2 from '../../../assets/img/card_emoji2.svg';
import dollar_img from '../../../assets/img/dollar_img.svg';


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
                            <p><b>
                                <img src={dollar_img} alt="dollar_img" style={{ width: "21px", marginBottom: "2px", marginRight: "2px" }} />2304.26
                            </b></p>
                        </div>
                    </div>
                </div>

                <div className='last_sec'>
                    <div className='card_last'>
                        <div className='winning_card_last'>
                            <h4><b>2</b></h4>
                            <img src={card_img2} alt='card_img2' />
                            <h4 className='ellipsis'>Mem***LIK</h4>
                        </div>

                        <div className='amount_winning'>
                            <p><b>
                                <img src={dollar_img} alt="dollar_img" style={{ width: "21px", marginBottom: "2px", marginRight: "2px" }} />
                                2304.26
                            </b></p>
                        </div>
                    </div>
                </div>

                <div className='last_sec'>
                    <div className='card_last'>
                        <div className='winning_card_last'>
                            <h4><b>3</b></h4>
                            <img src={card_img2} alt='card_img2' />
                            <h4 className='ellipsis'>Mem***LIK</h4>
                        </div>

                        <div className='amount_winning'>
                            <p><b>
                                <img src={dollar_img} alt="dollar_img" style={{ width: "21px", marginBottom: "2px", marginRight: "2px" }} />
                                2304.26
                            </b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Winner;