import React from 'react';
import { Col } from 'react-bootstrap';

const ItemImpact = ({ impactData }) => {
    if (!impactData) return null;

    return (
        <Col sm={12} md={4}>
            <div className="h-100 bg-white p-lg-10 p-5 rounded-lg">
                <h2 className='text-primary'>{impactData.number}</h2>
                <h5 className='mb-lg-10 mb-5'>{impactData.title}</h5>
                <p className='text-dark fw-medium'>{impactData.description}</p>
            </div>
        </Col>
    );
};

export default ItemImpact;

