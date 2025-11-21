'use client';

import { Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

import { IconCrossArrow, IconLogo, IconReadArrow } from '@/components/icon';

export default function ForgotPassword() {
    return (
        <>
            <div className='auth-data py-10 px-4 px-sm-6 px-lg-10 m-auto margin-child'>
                <div className='mb-6 mb-lg-8 mb-xl-12 text-center'>
                    <Link href="/" className='brand-logo mb-4 md:mb-8 p-4 lg:p-6 rounded-circle bg-dark bg-opacity-10'>
                        <IconLogo width={30} height={30} />
                    </Link>
                    <h1 className='h3 fw-bold mb-3'>Forgot Password?</h1>
                    <span className='d-inline-block w-100 fw-medium small px-10'>Enter your email and we&rsquo;ll send you instructions to reset your password.</span>
                </div>
                <Form>
                    <Row className='gx-6 gy-7'>
                        <Col sm={12}>
                            <Form.Group controlId="email">
                                <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    name='email'
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Button type="submit" className="px-4 px-lg-6 justify-content-center w-100" variant="primary">
                                Submit
                                <i className="p-lg-3 p-2 icon"><IconCrossArrow width={24} height={24} /></i>
                            </Button>
                        </Col>
                        <Col sm={12}>
                            <div className="text-center d-flex justify-content-center w-100 fw-semibold small">
                                Back to &nbsp;
                                <Link className='link link-secondary' href={'/login'} title="Read More">
                                    Login Page <i className='icon p-lg-3 p-2 transition'><IconReadArrow width={16} height={16} /></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    
                </Form>
            </div>
        </>
    );
}