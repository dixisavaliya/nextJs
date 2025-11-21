'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const SliderLogo = () => {
    const logoDimensions = {
        1: { width: 449, height: 100 },
        2: { width: 97, height: 100 },
        3: { width: 425, height: 100 },
        4: { width: 142, height: 100 },
        5: { width: 401, height: 100 },
        6: { width: 309, height: 100 },
        7: { width: 240, height: 100 },
        8: { width: 217, height: 100 },
        9: { width: 300, height: 100 },
    };

    const clientLogos = Array.from({ length: 9 }, (_, i) => i + 1);

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            freeMode={true}
            allowTouchMove={false}
            speed={6000}
            spaceBetween={0}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
            }}
            className="marquee-swiper"
        >
            {clientLogos.map((logoNum, index) => (
                <SwiperSlide key={`logo-1-${index}`}>
                    <Image
                        src={`/images/client-logo/${logoNum}.png`}
                        alt={`Client Logo ${logoNum}`}
                        width={logoDimensions[logoNum].width}
                        height={logoDimensions[logoNum].height}
                        style={{ transition: 'filter 0.3s ease' }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderLogo;

