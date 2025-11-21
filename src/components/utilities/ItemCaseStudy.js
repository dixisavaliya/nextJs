import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IconOurWorkShape1, IconOurWorkShape2, IconOurWorkShape3, IconCrossArrow } from '@/components/icon';

const ItemCaseStudy = ({ caseStudyData }) => {
    if (!caseStudyData) return null;

    return (
        <div className="section-item py-lg-25 py-15">
            <Container fluid>
                <Row className="g-8 g-lg-20 align-items-center">
                    <Col lg={6}>
                        <figure className="picture image-vertical rounded-xs">
                            <IconOurWorkShape1
                                className="shape-1"
                                width={100}
                                height={100}
                            />
                            <IconOurWorkShape2
                                className="shape-2"
                                width={80}
                                height={80}
                            />
                            <IconOurWorkShape3
                                className="shape-3"
                                width={60}
                                height={60}
                            />
                            <Image
                                className="our-work-img"
                                src={caseStudyData.image}
                                alt={caseStudyData.title}
                                width={835}
                                height={600}
                            />
                        </figure>
                    </Col>
                    <Col lg={6}>
                        <div className="title">
                            <span className='tag'>{caseStudyData.tag}</span>
                            <h2>{caseStudyData.title}</h2>
                            <p>{caseStudyData.description}</p>
                        </div>
                        <ul className="d-flex align-items-center justify-content-start mb-6 mb-lg-10">
                            {caseStudyData.stats?.map((stat, index) => (
                                <li key={index}>
                                    <h4>{stat.value}</h4>
                                    <p className='fw-medium text-dark'>{stat.label}</p>
                                </li>
                            ))}
                        </ul>
                        <Button
                            as={Link}
                            href={caseStudyData.link}
                            className="px-4 px-lg-6"
                            variant="primary"
                        >
                            Read More
                            <i className="p-lg-3 p-2 icon"><IconCrossArrow width={24} height={24} /></i>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemCaseStudy;

