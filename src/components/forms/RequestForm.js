'use client';

import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { IconCrossArrow, IconUser, IconMail, IconCall } from '../icon';

export default function RequestForm() {
    return (
        <Form>
            <Row className='gx-6 gy-7'>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>First Name <span>*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control type="text" placeholder="" required />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconUser width={24} height={24} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Last Name <span>*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control type="text" placeholder="" required />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconUser width={24} height={24} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Email Address <span>*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control type="email" placeholder="" required />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconMail width={24} height={24} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Phone Number <span>*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control type="text" placeholder="" required />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconCall width={24} height={24} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Your Company Name</Form.Label>
                        <div className="position-relative">
                            <Form.Control type="text" placeholder="" />
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Team Size</Form.Label>
                        <div className="position-relative">
                            <Form.Select aria-label="Select any one" defaultValue="">
                                <option value="">Select any one</option>
                                <option value="1 - 10">1-10</option>
                                <option value="11 - 20">11-20</option>
                                <option value="20+">20+</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} className="text-center">
                    <Button type="submit" className="px-4 px-lg-6" variant="primary">
                        Submit
                        <i className="p-lg-3 p-2 icon"><IconCrossArrow width={24} height={24} /></i>
                    </Button>
                </Col>
            </Row>

        </Form>
    );
}


