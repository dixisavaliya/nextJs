'use client';

import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { IconCrossArrow, IconUser, IconMail, IconCall } from '../icon';

export default function ContactForm() {
    return (
        <Form>
            <Row className='gx-6 gy-7'>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control className='pe-12'
                                type="text"
                                placeholder="Ex. John"
                                required
                            />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconUser width={20} height={20} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control className='pe-12'
                                type="text"
                                placeholder="Ex. Doe"
                                required
                            />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconUser width={20} height={20} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control className='pe-12'
                                type="email"
                                placeholder="Ex. john.doe@gmail.com"
                                required
                            />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconMail width={20} height={20} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                        <div className="position-relative">
                            <Form.Control className='pe-12'
                                type="tel"
                                placeholder="Ex. 9876543210"
                                required
                            />
                            <span className="icon position-absolute top-50 end-0 translate-middle-y me-4 p-3 text-primary">
                                <IconCall width={20} height={20} />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={12}>
                    <Form.Group>
                        <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                        <Form.Control className='pe-12'
                            as="textarea"
                            rows={3}
                            placeholder="Write here..."
                            required
                        />
                    </Form.Group>
                </Col>
                <Col sm={12} md={12}>
                    <Form.Group>
                        <Form.Text className="fw-medium text-body text-base">
                            You could also insert a link here to a document that you consider necessary to share with us.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col sm={12} md={12}>
                    <Button type="submit" className="px-4 px-lg-6" variant="primary">
                        Submit
                        <i className="icon p-lg-3 p-2"><IconCrossArrow width={24} height={24} /></i>
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

