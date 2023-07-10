

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';


const Slider = () => {
    return (
        <div className='best_article'>
            <Swiper
                pagination={{

                    dynamicBullets: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='best_article_article'>
                        <div className='best_article_article_img'>
                            <img src='../images/watsh.png' />
                        </div>
                        <div className='best_article_article_description'>
                            <span className='best_article_article_promo'>
                                -60€
                            </span>
                            <span className='best_article_article_cat'>
                                Adulte
                            </span>
                            <span className='best_article_article_title'>
                                garmin
                            </span>
                            <span className='best_article_article_desc'>
                                Montre GPS & Cardio VENU SQ
                            </span>
                            <span className='best_article_article_price'>
                                <span className='best_article_article_price_old'> 249,99€</span> 189,99€
                            </span>
                            <a className='best_article_article_btn' href="#">Acheter</a>
                        </div>
                    </div>


                </SwiperSlide>





                <SwiperSlide>

                    <div className='best_article_article'>
                        <div className='best_article_article_img'>
                            <img src='../images/watsh.png' />
                        </div>
                        <div className='best_article_article_description'>
                            <span className='best_article_article_promo'>
                                -60€
                            </span>
                            <span className='best_article_article_cat'>
                                Adulte
                            </span>
                            <span className='best_article_article_title'>
                                garmin
                            </span>
                            <span className='best_article_article_desc'>
                                Montre GPS & Cardio VENU SQ
                            </span>
                            <span className='best_article_article_price'>
                                <span className='best_article_article_price_old'> 249,99€</span> 189,99€
                            </span>
                            <a className='best_article_article_btn' href="#">Acheter</a>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div className='best_article_article'>
                        <div className='best_article_article_img'>
                            <img src='../images/watsh.png' />
                        </div>
                        <div className='best_article_article_description'>
                            <span className='best_article_article_promo'>
                                -60€
                            </span>
                            <span className='best_article_article_cat'>
                                Adulte
                            </span>
                            <span className='best_article_article_title'>
                                garmin
                            </span>
                            <span className='best_article_article_desc'>
                                Montre GPS & Cardio VENU SQ
                            </span>
                            <span className='best_article_article_price'>
                                <span className='best_article_article_price_old'> 249,99€</span> 189,99€
                            </span>
                            <a className='best_article_article_btn' href="#">Acheter</a>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div className='best_article_article'>
                        <div className='best_article_article_img'>
                            <img src='../images/watsh.png' />
                        </div>
                        <div className='best_article_article_description'>
                            <span className='best_article_article_promo'>
                                -60€
                            </span>
                            <span className='best_article_article_cat'>
                                Adulte
                            </span>
                            <span className='best_article_article_title'>
                                garmin
                            </span>
                            <span className='best_article_article_desc'>
                                Montre GPS & Cardio VENU SQ
                            </span>
                            <span className='best_article_article_price'>
                                <span className='best_article_article_price_old'> 249,99€</span> 189,99€
                            </span>
                            <a className='best_article_article_btn' href="#">Acheter</a>
                        </div>
                    </div>


                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;




