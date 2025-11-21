'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const SliderWork = ({ portfolioItems }) => {
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
                    nextEl: ".our-work-next",
                    prevEl: ".our-work-prev",
                }}
                slidesPerView={3.5}
                spaceBetween={50}
                centeredSlides={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                    },
                    569: {
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1299: {
                        slidesPerView: 3.5,
                        spaceBetween: 50,
                    },
                }}
            >
                {portfolioItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href="#" className="item-work">
                            <figure className="figure picture rounded-sm">
                                <Image
                                    src={item.image}
                                    alt="Our Work"
                                    width={400}
                                    height={300}
                                />
                            </figure>
                            <h2 className="h4 mb-4">{item.title}</h2>
                            <p className="mb-lg-10 mb-5 fw-medium text-body">{item.description}</p>
                            <ul className="d-flex flex-wrap gap-3">
                                {item.tags.map((tag, tagIndex) => {
                                    const colorClasses = ['tag-primary', 'tag-danger', 'tag-success', 'tag-warning'];
                                    const colorClass = colorClasses[tagIndex % colorClasses.length];
                                    return (
                                        <li key={tagIndex} className={`tag tag-sm ${colorClass}`}>{tag}</li>
                                    );
                                })}
                            </ul>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="d-flex d-xl-none align-items-center gap-3 justify-content-center gap-lg-4 pt-lg-10 pt-5">
                <div className="swiper-button swiper-button-prev our-work-prev"></div>
                <div className="swiper-button swiper-button-next our-work-next"></div>
            </div>
        </>
    );
};

export default SliderWork;

