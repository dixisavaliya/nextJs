'use client';

import React from 'react';
import { Container, } from 'react-bootstrap';
import { SliderTestimonials } from '../slider';

const SectionTestimonials = ({ className = "bg-white" }) => {
    return (
        <section className={`py-lg-25 py-15 ${className}`}>
            <Container fluid>
                <div className="title text-center">
                    <span className='tag'>Testimonials</span>
                    <p>What they're all saying.</p>
                    <h2>Anhas is loved by clients</h2>
                </div>
                <SliderTestimonials />
            </Container>
        </section>
    );
};

export default SectionTestimonials;
