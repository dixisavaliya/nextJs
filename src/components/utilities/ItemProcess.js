import React from 'react';
import Image from 'next/image';
import { Col } from 'react-bootstrap';

const ItemProcess = ({ processData }) => {
    if (!processData) return null;

    return (
        <Col md={6} lg={4}>
            <div className="box">
                <span className="text-white h5 fw-semibold d-inline-block w-100">{processData.number}</span>
                <i className="icon p-10 p-lg-15 my-lg-6 my-5">
                    <Image
                        src={processData.icon}
                        alt={processData.title}
                        width={60}
                        height={60}
                    />
                </i>
                <h2 className="text-white h4 mb-lg-6 mb-5">{processData.title}</h2>
                <p className="text-white fw-medium">{processData.description}</p>
            </div>
        </Col>
    );
};

export default ItemProcess;

