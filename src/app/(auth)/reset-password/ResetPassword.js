'use client';

import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

import { IconCrossArrow, IconLogo, IconReadArrow, IconEye, IconEyeOff } from '@/components/icon';

export default function ResetPassword() {
    return (
        <>
            <div className='auth-data py-10 px-4 px-sm-6 px-lg-10 m-auto margin-child'>
                <div className='mb-6 mb-lg-8 mb-xl-12 text-center'>
                    <Link href="/" className='brand-logo mb-4 md:mb-8 p-4 lg:p-6 rounded-circle bg-dark bg-opacity-10'>
                        <IconLogo width={30} height={30} />
                    </Link>
                    <h1 className='h3 fw-bold mb-3'>Reset Password</h1>
                    <span className='d-inline-block w-100 fw-medium small px-10'>Create a new password for your account. Make sure it’s secure and easy to remember.</span>
                </div>
                <Form>
                    <Row className='gx-6 gy-7'>
                        <Col sm={12}>
                            <Form.Group controlId="formNewPassword">
                                <Form.Label>New Password <span className="text-danger">*</span></Form.Label>
                                <PasswordInput placeholder="********" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter new password.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirm Password <span className="text-danger">*</span></Form.Label>
                                <PasswordInput placeholder="********" />
                                <Form.Control.Feedback type="invalid">
                                    "Please confirm your password."
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
};

function PasswordInput({ placeholder = 'Password' }) {
    const [show, setShow] = useState(false);
    return (
        <div className='position-relative'>
            <Form.Control
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                required
            />
            <i
                className='icon pt-5 pe-5 position-absolute me-3 top-50 end-0 translate-middle cursor-pointer'
                onClick={() => setShow((s) => !s)}
                aria-label={show ? 'Hide password' : 'Show password'}
            >
                {show ? <IconEye width={20} height={20} /> : <IconEyeOff width={20} height={20} />}
            </i>
        </div>
    );
}