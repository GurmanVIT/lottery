import React from 'react';
import dollar_img from '../../../assets/img/dollar_img.png';
import card_emoji from '../../../assets/img/card_emoji.svg';
import card_emoji2 from '../../../assets/img/card_emoji2.svg';
import card_emoji3 from '../../../assets/img/card_emoji3.svg';
import card_emoji4 from '../../../assets/img/image_1.jpeg';
import card_emoji5 from '../../../assets/img/image_2.png';
import card_emoji6 from '../../../assets/img/image_3.jpeg';
import card_emoji7 from '../../../assets/img/image_4.jpeg';
import card_emoji8 from '../../../assets/img/image_5.jpeg';


const Winner = ({ randomMember }) => {

    const getImage = (number) => {
        switch (number) {
            case 1:
                return card_emoji;
            case 2:
                return card_emoji2;
            case 3:
                return card_emoji3;
            case 4:
                return card_emoji4;
            case 5:
                return card_emoji5;
            case 6:
                return card_emoji6;
            case 7:
                return card_emoji7;
            case 8:
                return card_emoji8;
            default:
                return card_emoji;
        }
    }

    return (
        < >
            <div className='bottom_sec'>
                {randomMember != null &&
                    randomMember.todays_winner_list.map((item, index) => (
                        <div className='last_sec'>
                            <div className='card_last'>
                                <div className='winning_card_last'>
                                    <img src={getImage(Math.floor(Math.random() * 8) + 1)} alt='card_img2' />
                                    <h4 className='ellipsis'>{item.firstName}</h4>
                                </div>

                                <div className='amount_winning'>
                                    <p><b>
                                        <img src={dollar_img} alt="dollar_img" style={{ width: "17px", marginBottom: "2px", marginRight: "2px" }} />{item.randomNumber}
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