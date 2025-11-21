'use client';

import { useState } from 'react';
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

import Link from 'next/link';

import { IconCrossArrow, IconLogo, IconReadArrow, IconEye, IconEyeOff } from '@/components/icon';
import { useAuth } from '@/context/AuthContext';
import { postData } from '@/utils/api';
import { toast } from 'react-toastify';

export default function Login() {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const router = useRouter();
    const { login, isAuthenticated } = useAuth();


    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            setValidated(true);
            return;
        }
        try {
            setLoading(true);
            let result = await postData('auth/login', {
                email: email,
                password: password
            });
            const response = result.data;
            console.log(response, "response");

            setLoading(false);
            if (result.success) {
                // Cookie is automatically set by the server, no need to handle token
                // await login({ user: { slug: response.slug } });
                toast.success(result.message);
                window.location.href = `/`;
                // return router.push(`/profile/${response.slug}`);
            } else {
                toast.error(result.message);
            }
        }
        catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    const handleemailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <div className='auth-data py-10 px-4 px-sm-6 px-lg-10 m-auto margin-child'>
                <div className='mb-6 mb-lg-8 mb-xl-12 text-center'>
                    <Link href="/" className='brand-logo mb-4 md:mb-8 p-4 lg:p-6 rounded-circle bg-dark bg-opacity-10'>
                        <IconLogo width={30} height={30} />
                    </Link>
                    <h1 className='h3 fw-bold mb-3'>Login</h1>
                    <span className='d-inline-block w-100 fw-medium small px-10'>Welcome back! Please sign in to your account to continue.</span>
                </div>

                <Form
                    noValidate validated={validated} onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLogin(e);
                    }}
                >
                    <Row className='gx-6 gy-7'>
                        <Col sm={12}>
                            <Form.Group controlId="email">
                                <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email address"
                                    onChange={handleemailChange}
                                    className="custom-input"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col sm={12}>
                            <Form.Group controlId="password">
                                <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                                <PasswordInput placeholder="Password" handlePasswordChange={handlePasswordChange} className="custom-input" />
                            </Form.Group>
                        </Col>
                        {/* <Col sm={12}>
                            <div className="d-flex justify-content-between align-items-center">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember"
                                    id="Remember"
                                    name="Remember"
                                />
                                <div></div>
                                <div className="d-flex flex-column align-items-end gap-1">
                                    <Link href="/forgot-password" className='link fw-medium'>
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        </Col> */}
                        <Col sm={12}>
                            <Button type="submit" className="px-4 px-lg-6 justify-content-center w-100" variant="primary" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </>
                                ) :
                                    <>
                                        Login
                                        < i className="p-lg-3 p-2 icon"><IconCrossArrow width={24} height={24} /></i>
                                    </>
                                }
                            </Button>
                        </Col>
                        <Col sm={12}>
                            <div className="text-center d-flex justify-content-center w-100 fw-semibold small">
                                Back to &nbsp;
                                <Link className='link link-secondary' href={'/'} title="Read More">
                                    Home Page <i className='icon p-lg-3 p-2 transition'><IconReadArrow width={16} height={16} /></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Form>

            </div >
        </>
    );
}

function PasswordInput({ placeholder = 'Password', handlePasswordChange, className }) {
    const [show, setShow] = useState(false);
    return (
        <div className='position-relative'>
            <Form.Control
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                onChange={handlePasswordChange}
                className={className}
                required
            />
            <i
                className='icon pt-5 pe-5 position-absolute me-3 top-50 end-0 translate-middle cursor-pointer'
                onClick={() => setShow((s) => !s)}
                aria-label={show ? 'Hide password' : 'Show password'}
            >
                {show ? <IconEye width={20} height={20} /> : <IconEyeOff width={20} height={20} />}
            </i>
            <Form.Control.Feedback type="invalid">
                Please enter your password.
            </Form.Control.Feedback>
        </div>
    );
}
