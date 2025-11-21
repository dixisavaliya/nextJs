import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const SubBanner = ({
    title,
    description,
    image,
    alt,
    className = "",
    width = 1200,
    height = 400
}) => {
    return (
        <section className={`section-banner d-flex align-items-center justify-content-center px-6 px-xl-0 ${className}`}>
            <figure className="picture rounded-xl position-absolute top-0 bottom-0 mx-4 mx-md-6 mx-lg-8 start-0 end-0 w-auto">
                <Image
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </figure>
            <Container fluid className="position-relative z-2">
                <h1 className="text-white mb-4 mb-lg-7 h2-md">{title}</h1>
                <h6 className="text-white fw-medium text-md-base">{description}</h6>
            </Container>
        </section>
    );
};

export default SubBanner;
