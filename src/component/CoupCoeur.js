import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const CoupCoeur = () => {
    const [setSwiperRef] = useState(null);
    return (
        <div className='coup_coeur'>
            <div class="coup_coeur_diagonal_block">
                <span class="bg1 bg1_right">
                    <span class="bg1_bg1">black friday</span>
                </span>
                <span class="bg2">
                    black friday weeks 
                    <span class="bg2_bg2">black friday weeks</span>
                    black friday weeks
                    <span class="bg2_bg2">black</span>
                </span>
            </div>
            <div className='coup_coeur__top'>
                <div className='coup_coeur__title'>
                    <p className='coup_coeur__title_title_1'>Sélection</p>
                    <p className='coup_coeur__title_title_2'>Exceptionnelle</p>
                </div>
                <div className='coup_coeur__top__img'>
                    <img src='../images/selection_exceptionnelle.png'></img>
                </div>
            </div>


            <div className='coup_coeur__bottom'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={0}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='coup_coeur__bottom_card'>
                            <div className='coup_coeur__bottom_card_reduction'>
                                <span className='coup_coeur__bottom_card_reduction_text'>BLACK FRIDAY</span>
                                <span className='coup_coeur__bottom_card_reduction_percent'>-50%</span>
                            </div>
                            <div className='coup_coeur__bottom_card_product'>
                                <img src='./images/basket-gris.png' className='coup_coeur__bottom_card_product_img'></img>
                            </div>
                            <div className='coup_coeur__bottom_card_description'>
                                <span className='coup_coeur__bottom_card_description_marque'>MARQUE</span>
                                <span className='coup_coeur__bottom_card_description_produit'>Nom produit<br />Nom du produit ligne 2...</span>
                                <span className='coup_coeur__bottom_card_description_price'>
                                    <span className='coup_coeur__bottom_card_description_price_old'> 100,99€</span> 99,99€
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='coup_coeur__bottom_card'>
                            <div className='coup_coeur__bottom_card_reduction'>
                                <span className='coup_coeur__bottom_card_reduction_text'>BLACK FRIDAY</span>
                                <span className='coup_coeur__bottom_card_reduction_percent'>-50%</span>
                            </div>
                            <div className='coup_coeur__bottom_card_product'>
                                <img src='./images/basket-gris.png' className='coup_coeur__bottom_card_product_img'></img>
                            </div>
                            <div className='coup_coeur__bottom_card_description'>
                                <span className='coup_coeur__bottom_card_description_marque'>MARQUE</span>
                                <span className='coup_coeur__bottom_card_description_produit'>Nom produit<br />Nom du produit ligne 2...</span>
                                <span className='coup_coeur__bottom_card_description_price'>
                                    <span className='coup_coeur__bottom_card_description_price_old'> 100,99€</span> 99,99€
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='coup_coeur__bottom_card'>
                            <div className='coup_coeur__bottom_card_reduction'>
                                <span className='coup_coeur__bottom_card_reduction_text'>BLACK FRIDAY</span>
                                <span className='coup_coeur__bottom_card_reduction_percent'>-50%</span>
                            </div>
                            <div className='coup_coeur__bottom_card_product'>
                                <img src='./images/basket-gris.png' className='coup_coeur__bottom_card_product_img'></img>
                            </div>
                            <div className='coup_coeur__bottom_card_description'>
                                <span className='coup_coeur__bottom_card_description_marque'>MARQUE</span>
                                <span className='coup_coeur__bottom_card_description_produit'>Nom produit<br />Nom du produit ligne 2...</span>
                                <span className='coup_coeur__bottom_card_description_price'>
                                    <span className='coup_coeur__bottom_card_description_price_old'> 100,99€</span> 99,99€
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='coup_coeur__bottom_card'>
                            <div className='coup_coeur__bottom_card_reduction'>
                                <span className='coup_coeur__bottom_card_reduction_text'>BLACK FRIDAY</span>
                                <span className='coup_coeur__bottom_card_reduction_percent'>-50%</span>
                            </div>
                            <div className='coup_coeur__bottom_card_product'>
                                <img src='./images/basket-gris.png' className='coup_coeur__bottom_card_product_img'></img>
                            </div>
                            <div className='coup_coeur__bottom_card_description'>
                                <span className='coup_coeur__bottom_card_description_marque'>MARQUE</span>
                                <span className='coup_coeur__bottom_card_description_produit'>Nom produit<br />Nom du produit ligne 2...</span>
                                <span className='coup_coeur__bottom_card_description_price'>
                                    <span className='coup_coeur__bottom_card_description_price_old'> 100,99€</span> 99,99€
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='coup_coeur__bottom_card'>
                            <div className='coup_coeur__bottom_card_reduction'>
                                <span className='coup_coeur__bottom_card_reduction_text'>BLACK FRIDAY</span>
                                <span className='coup_coeur__bottom_card_reduction_percent'>-50%</span>
                            </div>
                            <div className='coup_coeur__bottom_card_product'>
                                <img src='./images/basket-gris.png' className='coup_coeur__bottom_card_product_img'></img>
                            </div>
                            <div className='coup_coeur__bottom_card_description'>
                                <span className='coup_coeur__bottom_card_description_marque'>MARQUE</span>
                                <span className='coup_coeur__bottom_card_description_produit'>Nom produit<br />Nom du produit ligne 2...</span>
                                <span className='coup_coeur__bottom_card_description_price'>
                                    <span className='coup_coeur__bottom_card_description_price_old'> 100,99€</span> 99,99€
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='coup_coeur__bottom_card'>
                            <div className='coup_coeur__bottom_card_reduction'>
                                <span className='coup_coeur__bottom_card_reduction_text'>BLACK FRIDAY</span>
                                <span className='coup_coeur__bottom_card_reduction_percent'>-50%</span>
                            </div>
                            <div className='coup_coeur__bottom_card_product'>
                                <img src='./images/basket-gris.png' className='coup_coeur__bottom_card_product_img'></img>
                            </div>
                            <div className='coup_coeur__bottom_card_description'>
                                <span className='coup_coeur__bottom_card_description_marque'>MARQUE</span>
                                <span className='coup_coeur__bottom_card_description_produit'>Nom produit<br />Nom du produit ligne 2...</span>
                                <span className='coup_coeur__bottom_card_description_price'>
                                    <span className='coup_coeur__bottom_card_description_price_old'> 100,99€</span> 99,99€
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='coup_coeur_bouton'>
                <a href="#" className='coup_coeur_bouton_allselection'>Toute la sélection</a>
            </div>
        </div>
    );
};

export default CoupCoeur;