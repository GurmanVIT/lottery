import React from 'react';
import logo from '../../assets/img/logo.svg';
import massage from '../../assets/img/massage.svg';
import download from '../../assets/img/download.svg';
import banner from '../../assets/img/banner.svg';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/free-mode";




const Home_page = () => {




    return (
        <div className='home_page'>
            <div className='inner_section'>
                <div className='header_section'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
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
                            clickable: true,
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
            </div>
        </div>
    )
}

export default Home_page;