import React from 'react';
import { Col } from 'react-bootstrap';

const ItemCaseInfo = ({ infoData }) => {
    if (!infoData) return null;

    return (
        <Col className='position-relative pt-lg-15 pt-sm-8 pt-6 border-top border-primary'>
            <span className='p-2 p-lg-3 rounded-circle bg-primary position-absolute top-0 start-0 translate-middle-y'></span>
            <span className='text-dark fw-medium mb-2 d-inline-block w-100'>{infoData.label}</span>
            <h3 className='h4 text-primary h5-md'>{infoData.value}</h3>
        </Col>
    );
};

export default ItemCaseInfo;

