import React from 'react';
import Image from 'next/image';
import { Col } from 'react-bootstrap';

const ItemCard = ({ cardData }) => {
    if (!cardData) return null;

    const isAboutPage = cardData.className?.includes('bg-white h-100 rounded-lg p-lg-10');

    return (
        <Col sm={12} md={6} xl={3}>
            <div className={cardData.className || `h-100 border p-lg-10 p-4 rounded-xs bg-white`}>
                {isAboutPage ? (
                    <>
                        <span className="d-inline-block bg-primary-50 rounded-circle p-4 mb-lg-25 mb-sm-10 mb-7">
                            <i className="icon p-5 p-lg-9">
                                <Image src={cardData.icon} alt={cardData.title} width={72} height={72} />
                            </i>
                        </span>
                        <h2 className="h4 mb-4">{cardData.title}</h2>
                        <p className="text-dark fw-medium">{cardData.description}</p>
                    </>
                ) : (
                    <>
                        <i className='icon p-10 p-lg-15 mb-lg-10 mb-5'>
                            <Image src={cardData.icon} alt={cardData.title} width={120} height={121} />
                        </i>
                        <h2 className='h5 mb-4'>{cardData.title}</h2>
                        <p>{cardData.description}</p>
                    </>
                )}
            </div>
        </Col>
    );
};

export default ItemCard;

