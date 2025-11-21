'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const SliderServices = ({ services }) => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".work-with-us-next",
                    prevEl: ".work-with-us-prev",
                }}
                slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    569: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} className='h-auto'>
                        <div className="border rounded-xs p-lg-10 p-5 d-flex flex-column justify-content-start h-100">
                            <i className="icon p-10 p-lg-15 mb-lg-25 mb-8 me-auto">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={60}
                                    height={60}
                                />
                            </i>
                            <h2 className='h3 mb-lg-6 mb-5'>{service.title}</h2>
                            <p className='fw-medium'>{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="d-flex align-items-center gap-3 justify-content-center gap-lg-4 pt-lg-10 pt-5">
                <div className="swiper-button swiper-button-prev work-with-us-prev"></div>
                <div className="swiper-button swiper-button-next work-with-us-next"></div>
            </div>
        </>
    );
};

export default SliderServices;

