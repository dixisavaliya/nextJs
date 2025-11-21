import React from 'react';
import { Col } from 'react-bootstrap';

const ItemStep = ({ stepData }) => {
    if (!stepData) return null;

    return (
        <Col md={6} lg={3}>
            <div className='bg-white p-lg-10 p-5 rounded-lg h-100 position-relative z-1'>
                <span className='p-8 p-lg-10 rounded-circle bg-light position-relative d-inline-block mb-lg-10 mb-5'>
                    <span className='h4 position-absolute text-primary text-center top-50 start-50 translate-middle'>{stepData.number}</span>
                </span>
                <h2 className='h5 fw-semibold mb-4'>{stepData.title}</h2>
                <small className='fw-medium text-dark'>{stepData.description}</small>
            </div>
        </Col>
    );
};

export default ItemStep;

