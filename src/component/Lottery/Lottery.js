import React from 'react';
import back from '../../assets/img/back.svg';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import music from '../../assets/img/music.svg';
import headphone from '../../assets/img/headphone.svg';
import refresh from '../../assets/img/refresh.svg';
import flat from '../../assets/img/Flat.svg';
import watch from '../../assets/img/watch.svg';
import coin_1 from '../../assets/img/coin_1.svg';
import coin_2 from '../../assets/img/coin_2.svg';
import coin_3 from '../../assets/img/coin_3.svg';
import coin_4 from '../../assets/img/coin_4.svg';
import coin_5 from '../../assets/img/coin_5.svg';
import coin_6 from '../../assets/img/coin_6.svg';



const Lottery = () => {

    return (
        <div className='lottery_page'>
            <div className='lottery'>
                <div className='dapic_header'>
                    <div className='header_flex'>
                        <div className='back_img'>
                            <Link to="/Home_page">
                                <img src={back} alt='back' />
                            </Link>
                        </div>
                        <div className='img_flex'>
                            <div className='dapic_game_img'>
                                <img src={logo} alt='logo' />
                            </div>
                            <div className='music_headphone'>
                                <div className='music'>
                                    <img src={music} alt='music' />
                                </div>
                                <div className='headphone'>
                                    <img src={headphone} alt='headphone' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secound_sec'>
                    <div className='card'>
                        <div className='refresh'>
                            <img src={refresh} alt='refresh' />
                        </div>
                        <h1>₹0.00</h1>
                        <div className='img_content'>
                            <img src={flat} alt='flat' />
                            <h4>Wallet Balance</h4>
                        </div>
                        <div className='btn_flex'>
                            <div className='withdraw_btn'>
                                <button>Withdraw</button>
                            </div>
                            <div className='deposit_btn'>
                                <button>Deposit</button>
                            </div>
                        </div>
                    </div>
                    <div className='watch_flex_card'>
                        <div className='watch_active'>
                            <div className='text-center p-2'>
                                <img src={watch} alt='watch' />
                                <h5>Win Go 1 min</h5>
                            </div>
                        </div>
                        <div className='watch'>
                            <div className='text-center p-2'>
                                <img src={watch} alt='watch' />
                                <h5>Win Go 3 min</h5>
                            </div>
                        </div>
                        <div className='watch'>
                            <div className='text-center p-2'>
                                <img src={watch} alt='watch' />
                                <h5>Win Go 5 min</h5>
                            </div>
                        </div>
                        <div className='watch'>
                            <div className='text-center p-1'>
                                <img src={watch} alt='watch' />
                                <h5>Win Go 10 min</h5>
                            </div>
                        </div>
                    </div>
                    <div className='mixing_card'>
                        <div className='win_number'>
                            <h3>Win Go 1 min</h3>
                            <div className='coin_img'>
                                <img src={coin_1} alt='coin_1' />
                                <img src={coin_2} alt='coin_2' />
                                <img src={coin_3} alt='coin_3' />
                                <img src={coin_4} alt='coin_4' />
                                <img src={coin_5} alt='coin_5' />
                                <img src={coin_6} alt='coin_6' />
                            </div>
                        </div>
                        <div className='play'>
                            <button> HOW TO PLAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lottery;