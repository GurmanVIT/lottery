import React from 'react';
import card_emoji from '../../../assets/img/card_emoji.svg';
import card_emoji2 from '../../../assets/img/card_emoji2.svg';
import card_emoji3 from '../../../assets/img/card_emoji3.svg';
import card_emoji4 from '../../../assets/img/image_1.jpeg';
import card_emoji5 from '../../../assets/img/image_2.png';
import card_emoji6 from '../../../assets/img/image_3.jpeg';
import card_emoji7 from '../../../assets/img/image_4.jpeg';
import card_emoji8 from '../../../assets/img/image_5.jpeg';
import winner from '../../../assets/img/winner.svg';
import winner_1 from '../../../assets/img/winner_1.svg';
import winner_2 from '../../../assets/img/winner_2.svg';

const Earning = ({ randomMember }) => {

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
        <div>
            <div className='earning '>
                <h3>Today's earnings chart</h3>

                <div className='flex_frame'>
                    {randomMember != null &&
                        <div className='frame_sec'>
                            <div className='img_frame'>
                                <img src={getImage(Math.floor(Math.random() * 8) + 1)} alt='frame_img_1' className='frame_img_1' />
                                <img src={winner} alt='winner' className='winner' />
                                <p className='ellipsis'>{randomMember.todays_earning_list[0].firstName}</p>
                            </div>
                        </div>
                    }

                    {randomMember != null &&
                        <div className='frame_sec_secound'>
                            <div className='img_frame_secound'>
                                <img src={getImage(Math.floor(Math.random() * 8) + 1)} alt='frame_image_2' className='frame_img_2' />
                                <img src={winner_1} alt='winner_1' className='winner_1' />
                                <p className='ellipsis first_win_img_name'>{randomMember.todays_earning_list[1].firstName}</p>
                            </div>
                        </div>
                    }

                    {randomMember != null &&
                        <div className='frame_sec'>
                            <div className='img_frame'>
                                <img src={getImage(Math.floor(Math.random() * 8) + 1)} alt='frame_img_1' className='frame_img_1' />
                                <img src={winner_2} alt='winner_2' className='winner_2' />
                                <p className='ellipsis'>{randomMember.todays_earning_list[2].firstName}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Earning;