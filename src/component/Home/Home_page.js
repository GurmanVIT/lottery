import React from 'react';
import massage from '../../assets/img/massage.svg';
import download from '../../assets/img/download.svg';
import banner from '../../assets/img/banner.svg';
import lottery from '../../assets/img/lottery.svg';
import mini_game from '../../assets/img/mini_game.svg';
import slots from '../../assets/img/slots.svg';
import sports from '../../assets/img/sports.svg';
import card_img from '../../assets/img/card_img.svg';
import card_bg_img from '../../assets/img/card_bg_img.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import DG from '../../assets/img/DG.svg';


const Home_page = () => {

    return (
        <div className='home_page_section'>
            <div className='inner_section'>
                <div className='header_section'>
                    <div className='logo'>
                        <img src={DG} alt='DG' />
                        <h2>Dapic games</h2>
                    </div>
                    <div className='d-flex'>
                        <div className='massage me-2'>
                            <img src={massage} alt='massage' />
                        </div>
                        <div className='download'>
                            <img src={download} alt='download' />
                        </div>
                    </div>
                </div>

                <div className="swiper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        autoplay={true}

                        breakpoints={{
                            240: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            }
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='card'>
                                <div className='card-img'>
                                    <img src={banner} alt="banner" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='card'>
                                <div className='card-img'>
                                    <img src={banner} alt="banner" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='card'>
                                <div className='card-img'>
                                    <img src={banner} alt="banner" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='card'>
                                <div className='card-img'>
                                    <img src={banner} alt="banner" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='flex_sec'>
                    <div className='game_sec'>
                        <div className='secound_section'>
                            <div className='lottery_img'>
                                <img src={lottery} alt='lottery' />
                            </div>
                            <div className='lottery_content'>
                                <h5>Lottery</h5>
                            </div>
                        </div>
                        <div className='same_sec'>
                            <div className='lottery_img'>
                                <img src={mini_game} alt='mini_game' />
                            </div>
                            <div className='lottery_content'>
                                <h5>Mini Game</h5>
                            </div>
                        </div>
                        <div className='same_sec'>
                            <div className='lottery_img'>
                                <img src={slots} alt='slots' />
                            </div>
                            <div className='lottery_content'>
                                <h5>Slots</h5>
                            </div>
                        </div>
                        <div className='same_sec'>
                            <div className='lottery_img'>
                                <img src={sports} alt='sports' />
                            </div>
                            <div className='lottery_content'>
                                <h5>Sports</h5>
                            </div>
                        </div>
                    </div>

                    <div className='game_sec'>
                        <div className='same_sec'>
                            <div className='lottery_img'>
                                <img src={mini_game} alt='mini_game' />
                            </div>
                            <div className='lottery_content'>
                                <h5>Casino</h5>
                            </div>
                        </div>
                        <div className='same_sec'>
                            <div className='lottery_img'>
                                <img src={slots} alt='slots' />
                            </div>
                            <div className='lottery_content'>
                                <h5>PVC</h5>
                            </div>
                        </div>
                        <div className='same_sec'>
                            <div className='lottery_img'>
                                <img src={sports} alt='sports' />
                            </div>
                            <div className='lottery_content'>
                                <h5>Fishing</h5>
                            </div>
                        </div>
                        <div className='same_sec'>
                            <div className='lottery_img'>
                                <img src={sports} alt='sports' />
                            </div>
                            <div className='lottery_content'>
                                <h5>Popular</h5>
                            </div>
                        </div>
                    </div>

                    <div className='card_sec'>
                        <div className='card'>
                            <div className='card_body'>
                                <div>
                                    <h4>Win Go</h4>
                                    <p>Guess Number</p>
                                    <p className='purple'>Big/Red/Purple to win</p>
                                </div>
                                <div>
                                </div>
                            </div>
                            <img src={card_bg_img} alt='card_bg_img' className='posiion-fixed' />
                        </div>
                        <div className='card_footer'>
                            <div className='card_flex'>
                                <img src={card_img} alt='card_img' />
                                <h4>John Doe</h4>
                            </div>
                            <div className='card_sec_flex'>
                                <h6>Wining Amount</h6>
                                <h5>$200.16</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_page;
