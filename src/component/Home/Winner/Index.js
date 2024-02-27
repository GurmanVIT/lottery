import React from 'react';
import dollar_img from '../../../assets/img/dollar_img.png';


const Winner = ({ randomMember }) => {
    return (
        < >
            <div className='bottom_sec'>
                {randomMember != null &&
                    randomMember.todays_winner_list.map((item, index) => (
                        <div className='last_sec'>
                            <div className='card_last'>
                                <div className='winning_card_last'>
                                    {/* <h4><b>1</b></h4> */}
                                    <img src={item.profileImage} alt='card_img2' />
                                    <h4 className='ellipsis'>{item.firstName}</h4>
                                </div>

                                <div className='amount_winning'>
                                    <p><b>
                                        <img src={dollar_img} alt="dollar_img" style={{ width: "17px", marginBottom: "2px", marginRight: "2px" }} />2304.26
                                    </b></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Winner;