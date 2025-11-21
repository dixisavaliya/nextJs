import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';

const ItemPortfolio = ({ portfolioData }) => {
    if (!portfolioData) return null;

    return (
        <Col lg={4} md={6}>
            <Link href={portfolioData.link} className="item-portfolio figure picture rounded-xs d-flex align-items-end py-lg-6 py-4 px-lg-10 px-6">
                <Image
                    src={portfolioData.image}
                    alt={portfolioData.title}
                    width={553}
                    height={350}
                />
                <span className="z-2 text-white h5 transition text-center">{portfolioData.title}</span>
            </Link>
        </Col>
    );
};

export default ItemPortfolio;

