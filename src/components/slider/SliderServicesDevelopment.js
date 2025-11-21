'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { IconDevelopmentServices } from '../icon';

const SliderServicesDevelopment = ({ services }) => {
    return (
        <>
            <div className="swiper-button-group d-flex justify-content-between align-items-center mb-lg-12 mb-9">
                <div className="swiper-pagination development-services-pagination"></div>
                <div className="d-flex align-items-center gap-3">
                    <div className="swiper-button swiper-button-prev development-services-prev"></div>
                    <div className="swiper-button swiper-button-next development-services-next"></div>
                </div>
            </div>
            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    el: ".development-services-pagination",
                    type: "fraction",
                }}
                navigation={{
                    nextEl: ".development-services-next",
                    prevEl: ".development-services-prev",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} className="h-auto">
                        <div className="bg-white rounded-lg p-lg-10 p-5 h-100">
                            <i className="icon p-10 p-lg-15 mb-lg-15 mb-7 text-primary">
                                {service.icon === 'development-services' ? (
                                    <IconDevelopmentServices width={120} height={120} />
                                ) : (
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={120}
                                        height={120}
                                    />
                                )}
                            </i>
                            <h2 className="h4 mb-4">{service.title}</h2>
                            <p className="text-dark fw-medium">{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SliderServicesDevelopment;

