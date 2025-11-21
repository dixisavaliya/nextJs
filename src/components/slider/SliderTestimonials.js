'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IconQuotes } from '../icon';

const SliderTestimonials = () => {

    const testimonials = [
        {
            quote: "I contracted with Hardik and his team to develop a freelancing webapp. From the beginning I was pleased. Hardik quickly gained my trust, fulfilled my asks, provided guidance when needed, and took appropriate initiatives in areas that I overlooked. I highly recommend Hardik and his team.",
            author: "Gavin Helt",
            position: "Director, Realestate, Investments, Software Solutions."
        },
        {
            quote: "Hardik is an excellent project manager and problem solver. He does not give up until he finds the solution!",
            author: "Elisyn Halgren",
            position: "Director, Marketing Consulting."
        },
        {
            quote: "We worked with Anhas to accelerate product development and successfully launched it on AWS. We are impressed by their commitment and on-time delivery.",
            author: "Carole Carlson",
            position: "Director, Brandeis HELLER"
        }
    ];

    return (
        <div className="text-center">
            <i className='icon p-lg-6 p-5 mb-lg-10 mb-5 text-primary'>
                <IconQuotes width={48} height={48} />
            </i>
            <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={0}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={{
                    nextEl: ".testimonial-next",
                    prevEl: ".testimonial-prev",
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <blockquote className='h6 mb-lg-10 mb-5 px-lg-10'>{testimonial.quote}</blockquote>
                        <div className="testimonial-info">
                            <h5>{testimonial.author}</h5>
                            <small>{testimonial.position}</small>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="d-flex align-items-center gap-3 justify-content-center gap-lg-4 pt-lg-10 pt-5">
                <div className="swiper-button swiper-button-prev testimonial-prev"></div>
                <div className="swiper-button swiper-button-next testimonial-next"></div>
            </div>
        </div>
    );
};

export default SliderTestimonials;

