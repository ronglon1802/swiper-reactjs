import './Product.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import IMG1 from '../assets/giay01.jpg'
import IMG2 from '../assets/giay02.jpg'
import IMG3 from '../assets/giay03.jpg'
import IMG4 from '../assets/giay04.jpg'
import IMG5 from '../assets/giay05.jpg'
import IMG6 from '../assets/giay06.jpg'

const Product = () => {
    const dataImg = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className='product'>
                <div className='product-slice-container'>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        modules={[Navigation, Thumbs]}
                        grabCursor={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        className='product-images-slider'
                    >
                        {
                            dataImg.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item} alt="product images" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation, Thumbs]}
                        className='product-images-slider-thumbs'
                    >
                        {
                            dataImg.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="product-images-slider-thumbs-wrapper">
                                        <img src={item} alt="product images" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )

}

export default Product